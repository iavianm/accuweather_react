module Weather
  class Base < Grape::API
    mount Weather::V1::Data
  end
end
