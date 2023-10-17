module Weather
  module V1
    module Helpers
      module DateTimeHelper
        def round_datetime(datetime_string)
          date, time = datetime_string.split('T')
          hours, minutes = time.split(':').map(&:to_i)

          if minutes >= 45
            hours += 1
          end
          minutes = 0

          "#{date}T#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}"
        end
      end
    end
  end
end
