export function filterByLatestDate(data) {
  if (data) {
    data.sort((a, b) => new Date(b.time) - new Date(a.time));

    const latestDate = new Date(data[0].time);
    return data.filter((record) => {
      const currentDate = new Date(record.time);
      return (
        currentDate.getFullYear() === latestDate.getFullYear() &&
        currentDate.getMonth() === latestDate.getMonth() &&
        currentDate.getDate() === latestDate.getDate()
      );
    });
  }
}

export function normalizeData(data) {
  if (data) {
    return {
      time: data.time.replace("T", " "),
      temperature: data.temperature,
    };
  }
}

export function calculateAverageTemperature(data) {
  if (data) {
    const totalTemperature = data.reduce(
      (total, record) => total + record.temperature,
      0,
    );

    const average = totalTemperature / data.length;
    return Number(average.toFixed(2));
  }
}

export function checkCurrentTemperature(data) {
  if (data) {
    return data[0];
  }
}
