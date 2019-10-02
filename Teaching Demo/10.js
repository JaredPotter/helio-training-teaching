// ASYNC & AWAIT

// The next evolution of asynchronous programming

// Designed to work with Promises

async function getRequest(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(error, response, body) {
            if(error) {
                reject(error);
            }

            resolve(body);
        });
    });
}

const cityId = 1; // Static ID for example
const city = await getRequest('nps.gov/api/cities/' + cityId);

console.log('city: ' + city);