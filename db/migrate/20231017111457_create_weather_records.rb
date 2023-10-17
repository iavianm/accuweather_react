class CreateWeatherRecords < ActiveRecord::Migration[7.0]
  def change
    create_table :weather_records do |t|
      t.string :city
      t.jsonb :data

      t.timestamps
    end
  end
end
