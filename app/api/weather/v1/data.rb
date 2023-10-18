module Weather
  module V1
    class Data < Grape::API
      helpers Helpers::DateTimeHelper

      resource :weather do
        desc 'Historical Current Conditions'
        get :historical do
          service = Services::WeatherDataService.new('294021', ENV['ACCUWEATHER_API_KEY'])
          data = service.fetch_data
          weather_data = data.map do |observation|
            {
              time: round_datetime(observation['LocalObservationDateTime'].split('+')[0]),
              temperature: observation['Temperature']['Metric']['Value'],
            }
          end
          weather_data
        rescue StandardError => e
          error!({ error: e.message }, 500)
        end
      end

      resource :weather do
        desc 'Endpoint status'
        get :status do
          service = Services::WeatherDataService.new('294021', ENV['ACCUWEATHER_API_KEY'])
          service.fetch_data_from_api
        rescue StandardError => e
          error!({ error: e.message }, 500)
        end
      end
    end
  end
end
