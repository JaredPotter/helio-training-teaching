// EXAMPLE

// Let's say we're building a web app that helps the National Park Service
// manage the vistors to their famous landmarks.

// First, we query the API to retrieve a particular city by ID.
//     nps.gov/api/cities/:cityId
// The City object returned will contain an array of landmark IDs for the city.

// Second, we query the API to retrieve a particular landmark by ID.
//     nps.gov/api/cities/:cityIdid/landmarks/:landmarkId
// The Landmark object returned will contain an array of of Vistor IDs for that landmark.

// Third, we query the API to retrieve a particular vistor to the park.
//     nps.gov/api/cities/:cityIdid/landmarks/:landmarkId/vistors/:vistorId


// KEY POINT: The second request depends on the result of the first. 
//            And the third request depends on the result of the second.