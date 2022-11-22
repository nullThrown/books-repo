const axios = require('axios');
axios
  .get('https://www.googleapis.com/books/v1/volumes/KtrATnRZOlMC')
  .then((res) => console.log(JSON.stringify(res.data)))
  .catch((err) => console.log(err));
