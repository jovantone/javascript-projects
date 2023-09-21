// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100 %';
let weatherStatus = 'clear';
let preparedForLiftOff = 'true';

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
console.log('Astronaut Count: ' + astronautCount)  
}
else (console.log('Shutting down launch sequence.'));

// add logic below to verify all astronauts are ready

if (astronautStatus === 'ready') {
console.log('Astronaut Status: ' + astronautStatus)  
}
else (console.log('Shutting down launch sequence.'));

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < maximumMassLimit) {
    console.log('Total mass: ' + totalMassKg)
}
else (console.log('Shutting down launch sequence.'));

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
    console.log('Fuel Temppuature: ' + fuelTempCelsius)
}
else (console.log('Shutting down launch sequence.'));

// add logic below to verify the fuel level is at 100%

if (fuelLevel === '100 %') {
    console.log('Fuel Level: ' + fuelLevel)
}
else (console.log('Shutting down launch sequence.'));

// add logic below to verify the weather status is clear

if (weatherStatus === 'clear') {
    console.log('Weather Status: ' + weatherStatus)
}
else (console.log('Shutting down launch sequence.'));

// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff === 'true') {
    console.log('Have a safe trip astronauts!')
}
else (console.log('Shutting down launch sequence.'));
