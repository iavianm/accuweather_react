require 'rails_helper'

RSpec.describe(WeatherRecord, type: :model) do
  context 'validations' do
    it 'is valid with valid attributes' do
      weather_record = build(:weather_record)
      expect(weather_record).to(be_valid)
    end

    it 'is not valid without a city' do
      weather_record = build(:weather_record, city: nil)
      expect(weather_record).not_to(be_valid)
    end

    it 'is not valid without data' do
      weather_record = build(:weather_record, data: nil)
      expect(weather_record).not_to(be_valid)
    end

    it 'is not valid with invalid JSON data' do
      weather_record = build(:weather_record, data: 'invalid_json')
      expect(weather_record).not_to(be_valid)
      expect(weather_record.errors[:data].first).to(start_with('is not a valid JSON'))
    end

    it 'is not valid with a city shorter than 2 characters' do
      weather_record = build(:weather_record, city: 'A')
      expect(weather_record).not_to(be_valid)
    end

    it 'is not valid with a city longer than 50 characters' do
      long_city_name = 'A' * 51
      weather_record = build(:weather_record, city: long_city_name)
      expect(weather_record).not_to(be_valid)
    end
  end
end
