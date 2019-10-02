// Callback Hell - An Anti-Pattern

const request = require('request'); // importing HTTP request library

const cityId = 1; // Static ID for example

request('nps.gov/api/cities/' + cityId, function (error, response, body) {
    if(error) {
        // Handle Error.
        return;
    }

    const city = body;
    const landmarkId = city.landmarks[0]; // Grab the 1st city for example.

    request('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId, function(error, response, body) {
        if(error) {
            // Handle Error.
            return;
        }

        const landmark = body;
        const visitorId = landmark.vistors[0]; // Grab the 1st vistor for example.        

        request('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId + '/vistors/' + visitorId, function(error, response, body) {
            if(error) {
                // Handle Error.
                return;
            }

            console.log(body); // FINALLY!
        });        
    });
});
