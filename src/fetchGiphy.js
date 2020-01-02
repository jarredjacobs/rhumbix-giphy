const fetch = require('node-fetch');


const fetchGiphy = async (search, callback) => {
  try {
    let giphyApiURL = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1`
    const response = await fetch(giphyApiURL);
    const json = await response.json();
    console.log(json);
    callback(json);
  } catch (error) {
    console.log(error);
  }
};

//fetchGiphy("test");

export { fetchGiphy as default };