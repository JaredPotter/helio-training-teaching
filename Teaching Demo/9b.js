// CORRECT PROMISE DESIGN PATTERN

const cityId = 1; // Static ID for example
let landmarkId = null;
let visitorId = null;

getRequest('nps.gov/api/cities/' + cityId)
    .then(function(body) {
        landmarkId = body.landmarks[0];

        return getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId);
    })
    .then(function(body) {
        visitorId = body.vistors[0];

        return getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId + '/vistors/' + visitorId);
    })
    .then(function(body) {
        console.log('body: ' + body); // FINALLY!
    })
    .catch(function(error) {
        // Handle Error.
    });



