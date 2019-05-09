const fetch = require('node-fetch');
const SC_KEY = require('./config.js');

const search = (query, limit = 1, page = 0) => {
  return fetch(
    `https://api-v2.soundcloud.com/search/tracks?q=${query}&client_id=${SC_KEY}&limit=${limit}&offset=${page *
      limit}&linked_partitioning=1`
  )
    .then(res => res.json())
    .then(
      json =>
        new Promise((resolve, reject) => {
          console.log(json);
          resolve(json);
        })
    );
};

exports.stream = trackUrl => `${trackUrl}/stream?client_id=${SC_KEY}`;

search('kanye');
