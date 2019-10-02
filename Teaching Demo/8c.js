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

// USING A PROMISE

const promise = getRequest('nps.gov/cities/1');

promise
    .then(function(body) {
        // Explicit Success Case.
        const landmark = body;
    })
    .catch(function(error) {
        // Explicit Fail Case.
        throw new 'Request Failed!';
    });