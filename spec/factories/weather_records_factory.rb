FactoryBot.define do
  factory :weather_record do
    city { '294021' }
    data { { time: Time.now.to_s, temperature: Faker::Number.decimal(l_digits: 2, r_digits: 2) }.to_json }
  end
end