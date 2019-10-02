// Promises can still be effected by callback hell...

const cityId = 1; // Static ID for example
getRequest('nps.gov/api/cities/' + cityId)
    .then(function(body) {
        // Success.
        const city = body;
        const landmarkId = city.landmarks[0]; // Grab the 1st city for example.

        getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId)
            .then(function(body) {
                // Success.
                const landmark = body;
                const visitorId = landmark.vistors[0]; // Grab the 1st vistor for example.   

                getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId + '/vistors/' + visitorId)
                    .then(function(body) {
                        // Success.
                        console.log(body); // FINALLY!
                    })
                    .catch(function(error) {
                        // Handle Fail.
                    });            
            })
            .catch(function(error) {
                // Handle Fail.
            });        
    })
    .catch(function(error) {
        // Handle Fail.
    });

