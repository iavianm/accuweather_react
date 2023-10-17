module WeatherDataHelpers
  def clear_redis_data(city)
    $redis.del("weather:#{city}:timestamp")
    $redis.del("weather:#{city}:data")
  end

  def set_redis_data(city, sample_data)
    $redis.set("weather:#{city}:timestamp", Time.now.to_i)
    $redis.set("weather:#{city}:data", sample_data.to_json)
  end

  def clear_db_data(city)
    WeatherRecord.where(city:).destroy_all
  end

  def create_db_record(city, sample_data)
    WeatherRecord.create(city:, data: sample_data.to_json, created_at: Time.now - 10.minutes)
  end
end
