module Weather
  module V1
    class Data < Grape::API
      resource :weather do
        desc 'Get current temperature'
        get :current do
          conn = Faraday.new(url: 'http://dataservice.accuweather.com/')
          response = conn.get do |req|
            req.url('currentconditions/v1/294021')
            req.params['apikey'] = ENV['ACCUWEATHER_API_KEY']
          end

          if response.status == 200
            parsed_response = JSON.parse(response.body)
            current_temperature = parsed_response.first['Temperature']['Metric']['Value']
            { temperature: current_temperature }
          else
            error!({ error: 'Unable to fetch current temperature' }, 500)
          end
        end

        # Добавьте другие эндпоинты аналогичным образом
      end
    end
  end
end
