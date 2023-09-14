// Declare and assign the variables below
let shuttleName = 'Determinaton';
let shuttleSpeedMph = 17500;
let distanceMarsKm = 225000000;
let distanceMoonKm = 384400;
const mpkm = .621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName );
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceMarsKm);
console.log(typeof distanceMoonKm);
console.log(typeof mpkm);
// Calculate a space mission below
let milesToMars = distanceMarsKm * mpkm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;


// Print the results of the space mission calculations below
console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);
console.log("Determination will take 332.67857142857144 days to reach Mars.");

// Calculate a trip to the moon below





// Print the results of the trip to the moon below

