const fetch = require("node-fetch");

let localCache = null;
let cacheTime = null;

const getCity = async (req, res) => {
  // api key 9d4a8079d4aeec6c5cf14769f8435f24
  //   https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  let key = "9d4a8079d4aeec6c5cf14769f8435f24";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${key}`;

  //   Ако cacheTime е поголемо од 1 мин, од локалното моментално време, тогаш ресетирај го cacheTime
  if (cacheTime !== null && cacheTime + 60 * 1000 > new Date().getTime()) {
    localCache = null;
  }

  if (localCache === null) {
    let data = await fetch(url);
    localCache = await data.json();
    cacheTime = new Date().getTime();
  }
  return res.send(localCache);
};

module.exports = {
  getCity,
};
