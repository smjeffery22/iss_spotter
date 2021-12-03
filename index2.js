// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, printFlyOverTimes } = require('./iss_promised');
const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printFlyOverTimes(passTimes);
  })
  // .catch((error) => {
  //   console.log(`It didn't work`, error.message);
  // });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(printFlyOverTimes)
//   .then(body => console.log(body));

const printFlyOverTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};