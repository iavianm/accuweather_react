require 'rails_helper'

RSpec.describe(Weather::V1::Services::FetchHistoricalWeatherService) do
  let(:api_key) { ENV['ACCUWEATHER_API_KEY'] }
  let(:location_id) { '294021' }
  let(:service) { described_class.new(api_key) }

  describe '#call' do
    context 'when the response is successful', :vcr do
      it 'returns weather data' do
        result = service.call(location_id)

        expect(result).to(be_a(Array))
        expect(result.first).to(have_key('Temperature'))
      end
    end

    context 'when the response is unsuccessful', :vcr do
      it 'raises an error' do
        expect { service.call(nil) }.to(raise_error(/Unable to fetch data/))
      end
    end
  end
end
