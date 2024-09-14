const fetchWeather = () => new Promise((resolve) => setTimeout(() => resolve("Weather data"), 1000));
const fetchNews = () => new Promise((resolve) => setTimeout(() => resolve("News data"), 1500));
const fetchStocks = () => new Promise((_, reject) => setTimeout(() => reject("Stocks API failed"), 500)); // sengaja gagal

const getData = async () => {
  try {
    const [weather, news, stocks] = await Promise.all([
      fetchWeather(),
      fetchNews(),
      fetchStocks() // yang ini akan gagal
    ]);
    console.log('Weather:', weather);
    console.log('News:', news);
    console.log('Stocks:', stocks);
  } catch (error) {
    console.error('One of the requests failed:', error); // seluruh proses akan gagal di sini
  }
};

getData();
