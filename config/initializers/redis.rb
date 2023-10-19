redis_host = ENV['REDIS_HOST'] || 'localhost'
$redis = Redis::Namespace.new("accuweather_react", redis: Redis.new(host: redis_host))
