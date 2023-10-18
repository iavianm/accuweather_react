source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.2.2'
gem 'rails', '~> 7.0.6'
gem 'pg', '~> 1.5'
gem 'puma', '~> 5.0'

gem 'redis', '~> 4.0'
gem 'redis-namespace'
gem 'bootsnap', require: false
gem 'rack-cors'
gem 'grape', '~> 1.8'
gem 'grape-path-helpers', '~> 1.7', '>= 1.7.1'
gem 'grape-route-helpers', '~> 2.1'
gem 'faraday', '~> 2.7', '>= 2.7.11'

group :development, :test do
  gem 'debug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 6.0.0'
  gem 'rubocop'
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'faker'
end

group :test do
  gem 'vcr'
  gem 'webmock'
  gem 'timecop'
end
