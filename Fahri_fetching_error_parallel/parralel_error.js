const fetchWeather = () => new Promise((resolve) => setTimeout(() => resolve("Weather data"), 1000));
const fetchNews = () => new Promise((resolve) => setTimeout(() => resolve("News data"), 1500));
const fetchStocks = () => new Promise((_, reject) => setTimeout(() => reject("Stocks API failed"), 500)); // sengaja gagal

const getData = async () => {
  const results = await Promise.allSettled([
    fetchWeather(),
    fetchNews(),
    fetchStocks() // yang ini akan gagal
  ]);

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      console.log(`Request ${index + 1} succeeded:`, result.value);
    } else {
      console.error(`Request ${index + 1} failed:`, result.reason);
    }
  });
};

getData();
