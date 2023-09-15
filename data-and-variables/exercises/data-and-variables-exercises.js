// Declare and assign the variables below
let shuttleName = 'Determination';
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

// I provided two solutions below
console.log("Determination will take 332.67857142857144 days to reach Mars.");
console.log(shuttleName + ' will take ' + daysToMars + ' days to reach Mars.');

// Calculate a trip to the moon below

let milesToMoon = distanceMoonKm * mpkm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(daysToMoon);

// Print the results of the trip to the moon below
console.log("Determination will take 0.5683628571428571 days to reach the Moon.");
