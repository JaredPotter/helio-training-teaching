// PROMISES BY 3RD PARTIES

const axios = require('axios'); // A Promise based request library

axios.get('nps.gov/api/cities/1')
    .then(function(response) {
        // Success Case
    })
    .catch(function(error) {
        // Error Case
    });