const fetch = require("node-fetch");

let cache = {};

const getCity = async (req, res) => {
  // api key 9d4a8079d4aeec6c5cf14769f8435f24
  //   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  let key = "9d4a8079d4aeec6c5cf14769f8435f24";
  let city = req.params.city;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  //   Ако cacheTime е поголемо од 1 мин, од локалното моментално време, тогаш ресетирај го cacheTime
  if (
    cache[req.params.city] &&
    cache[req.params.city].cacheTime !== null &&
    cache[req.params.city].cacheTime + 60 * 1000 < new Date().getTime()
  ) {
    cache[req.params.city].localCache = null;
  }

  if (cache[req.params.city] || cache[req.params.city].localCache === null) {
    let data = await fetch(url);
    cache[req.params.city] = {
      localCache: await data.json(),
      cacheTime: new Date().getTime(),
    };
  }
  return res.send(cache[req.params.city].localCache);
};

module.exports = {
  getCity,
};
