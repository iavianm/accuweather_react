require 'rails_helper'

RSpec.describe(Weather::V1::Services::WeatherDataService) do
  let(:api_key) { ENV['ACCUWEATHER_API_KEY'] }
  let(:city) { '294021' }
  let(:service) { described_class.new(city, api_key) }
  let(:sample_data) { { 'Temperature' => { 'Metric' => { 'Value' => 3.9 } } } }

  describe '#fetch_data' do
    context 'when data is expired or not present in both Redis and DB' do
      before do
        clear_redis_data(city)
        clear_db_data(city)
      end

      it 'fetches data from the API', :vcr do
        result = service.fetch_data

        expect(result).to(be_a(Array))
        expect(result.first).to(have_key('Temperature'))
      end
    end

    context 'when data is not expired and present in Redis' do
      before { set_redis_data(city, sample_data) }

      it 'fetches data from Redis' do
        result = service.fetch_data

        expect(result).to(be_a(Hash))
        expect(result).to(have_key('Temperature'))
      end
    end

    context 'when data is not expired, not present in Redis but present in DB' do
      before do
        clear_redis_data(city)
        create_db_record(city, sample_data)
      end

      it 'fetches data from the DB and saves it to Redis', :vcr do
        result = service.fetch_data

        expect(result).to(be_a(Hash))
        expect(result).to(have_key('Temperature'))
        expect($redis.get("weather:#{city}:data")).to(be_present)
      end
    end
  end
end
