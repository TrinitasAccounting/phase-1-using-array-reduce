const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


let totalBatteries = 0;
const reducer = batteryBatches.reduce((acc, val) => {
    totalBatteries = val + totalBatteries;
    return totalBatteries;
}, 0)

console.log(reducer);