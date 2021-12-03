const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log('It did not work!', error);
  }

  printFlyOverTimes(passTimes);
});

const printFlyOverTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It did not work!', error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);

// });

// fetchCoordsByIP('24.226.110.68', (error, data) => {
//   if (error) {
//     console.log('It did not work!', error);
//     return;
//   }

//   console.log('It worked! Coords:', data);

// });

// fetchISSFlyOverTimes({ latitude: 43.3802, longitude: -79.7627 }, (error, data) => {
//   if (error) {
//     console.log('It did not work!', error);
//     return;
//   }

//   console.log('It worked! Fly Over Times:', data);

// });