# Запуск приложения

Для запуска приложения выполните следующие шаги:

1. В корне приложения создайте .env с вашим ключом `ACCUWEATHER_API_KEY: your_key` от сервиса https://www.accuweather.com/ 

2. Запустите приложение с помощью команды `docker-compose up`.

3. После успешного запуска, приложение будет доступно по следующему URL:
   [http://localhost:3001](http://localhost:3001)
4. Запуск тестов `docker-compose run web rspec`

Приложение работает в режиме разработки (dev mode).

## Эндпоинты "weather"
GET http://localhost:4001/weather/historical

GET http://localhost:4001/weather/status
