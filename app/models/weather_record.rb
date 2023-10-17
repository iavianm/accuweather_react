class WeatherRecord < ApplicationRecord
  validates :city, :data, presence: true
  validates :city, length: { minimum: 2, maximum: 50 }
  validate :data_is_valid_json

  private

  def data_is_valid_json
    return if data.nil?

    JSON.parse(data)
  rescue JSON::ParserError => e
    errors.add(:data, "is not a valid JSON: #{e.message}")
  end
end
