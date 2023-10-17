module Weather
  module V1
    class Data < Grape::API
      helpers Helpers::DateTimeHelper

      resource :weather do
        desc 'Historical Current Conditions'
        get :historical do
          service = Services::FetchHistoricalWeatherService.new(ENV['ACCUWEATHER_API_KEY'])
          data = service.call('294021')
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
    end
  end
end
