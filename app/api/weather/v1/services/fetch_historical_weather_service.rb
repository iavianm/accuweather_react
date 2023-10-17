module Weather
  module V1
    module Services
      class FetchHistoricalWeatherService
        API_URL = 'http://dataservice.accuweather.com/'.freeze

        def initialize(api_key)
          @api_key = api_key
        end

        def call(location_id)
          conn = Faraday.new(url: API_URL)
          response = conn.get do |req|
            req.url("currentconditions/v1/#{location_id}/historical/24")
            req.params['apikey'] = @api_key
          end

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
