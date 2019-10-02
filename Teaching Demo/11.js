// ASYNC & AWAIT

const cityId = 1; // Static ID for example
const city = await getRequest('nps.gov/api/cities/' + cityId);

const landmarkId = city.landmarks[0];
const landmark = await getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId);

const visitorId = landmark.vistors[0];
const vistor = await getRequest('nps.gov/api/cities/' + cityId + '/landmarks/' + landmarkId + '/vistors/' + visitorId);

console.log('vistor: ' + vistor);