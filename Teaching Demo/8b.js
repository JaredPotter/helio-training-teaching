// CREATING A PROMISE

const request = require('request'); // importing HTTP request library

function getRequest(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if(error) {
                reject(error);
            }

            resolve(body);
        });
    });
}