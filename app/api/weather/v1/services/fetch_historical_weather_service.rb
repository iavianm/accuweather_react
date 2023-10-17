module Weather
  module V1
    module Services
      class FetchHistoricalWeatherService
        BASE_URL = 'http://dataservice.accuweather.com'.freeze
        ENDPOINT = '/currentconditions/v1'.freeze

        def initialize(api_key)
          @api_key = api_key
        end

        def call(location_id)
          response = conn.get("#{ENDPOINT}/#{location_id}/historical/24", apikey: @api_key)

          handle_response(response)
        end

        private

        def conn
          @conn ||= Faraday.new(url: BASE_URL)
        end

        def handle_response(response)
          if response.status == 200
            JSON.parse(response.body)
          else
            raise "Unable to fetch data: #{response.status}"
          end
        end
      end
    end
  end
end
