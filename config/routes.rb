Rails.application.routes.draw do
  mount Weather::Base => '/'
end
