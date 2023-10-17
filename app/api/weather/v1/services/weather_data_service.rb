module Weather
  module V1
    module Services
      class WeatherDataService
        def initialize(city, api_key)
          @city = city
          @api_key = api_key
          @redis_key_data = "weather:#{@city}:data"
          @redis_key_time = "weather:#{@city}:timestamp"
          @db_data_cache = nil
        end

        def fetch_data
          if data_expired?
            data = fetch_data_from_api

            save_data_to_redis(data.to_json)
            save_data_to_db(data)
            data
          else
            fetch_data_from_redis || save_db_data_to_redis(db_data)
          end
        end

        private

        def fetch_data_from_api
          service = Services::FetchHistoricalWeatherService.new(@api_key)
          service.call(@city)
        rescue StandardError => e
          raise e
        end

        def save_data_to_redis(data, time = nil)
          $redis.set(@redis_key_data, data)
          $redis.set(@redis_key_time, time || Time.now.to_i)
        end

        def fetch_data_from_redis
          raw_data = $redis.get(@redis_key_data)

          return nil if raw_data.nil?

          JSON.parse(raw_data)
        end

        def data_expired?
          last_fetched = $redis.get(@redis_key_time)

          return false if last_fetched && Time.now.to_i - last_fetched.to_i <= 1800

          db_data.nil? || Time.now - db_data.created_at > 1800
        end

        def save_data_to_db(data)
          WeatherRecord.create(
            city: @city,
            data: data.to_json,
          )
        end

        def fetch_data_from_db
          WeatherRecord.where(city: @city).last
        end

        def db_data
          @db_data_cache || fetch_data_from_db
        end

        def save_db_data_to_redis(db_data)
          timestamp = db_data.created_at.to_i
          save_data_to_redis(db_data.data, timestamp)
          JSON.parse(db_data.data)
        end
      end
    end
  end
end
