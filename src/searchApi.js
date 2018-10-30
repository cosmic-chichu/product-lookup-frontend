var axios = require('axios');

var ROOT_URL = process.env.REACT_APP_API_URL

module.exports = function (options, callback) {

  var options = {
    method: 'GET',
    url: ROOT_URL,
    params: {
      keyword: options.term
    }
  }

  axios(options)
    .then(function(response) {
      if (callback) {
        callback(response.data);
      }
    })
    .catch(function(error) {
      console.error(error);
    });
};
