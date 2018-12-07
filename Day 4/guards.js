const inputData = require("./input.js").input;
const format = require("../global/format.js");
const log = format.indentedLog;
const array = format.Strings(inputData);
const data = {};
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
const chronologicalSort = () => {
    array.forEach((element, i)=>{
        let tempArr=element.split("] ");
        let time = tempArr[0].split(/[- :]+/);
        time.shift();
        time = time.join("");
        if(tempArr[1].includes('#'))
            array[i]=`${time} ${tempArr[1].split(" ")[1]}`;
        else
            array[i]=time;
    })
    array.sort();
}
const populateDataObject = () => {
    let key;
    array.forEach(element=>{
        if(element.includes("#")) {key = element.split(" ")[1]; data[key] = data[key]===undefined?[]:data[key]}
        else {
            data[key].push(Number(element.slice(-2)))}
    })
}
const calculateTotalTimeAsleep = () =>{
    let max = 0;
    let maxGuard;
    Object.keys(data).forEach(guard=>{
        let totalAsleep = 0;
        const times = data[guard];
        for(let i = 0; i<times.length-1; i+=2)
            totalAsleep += (times[i+1]-times[i])
        if(totalAsleep>max) {max = totalAsleep; maxGuard = guard;}
    })
    return maxGuard;
}
const asleepMost = (guardSleepTimes) => {
    const minutes = new Array(60).fill(0);
    for(let i = 0; i<guardSleepTimes.length-1; i+=2)
        {
            let startSleep = guardSleepTimes[i];
            const stopSleep = guardSleepTimes[i+1];
            for(let j = startSleep; j<stopSleep; j++)
                minutes[j]++;
        }
    return [minutes.indexOf(minutes.max()), minutes.max()];
}
const firstPart = () => {
    const sleepyGuard = calculateTotalTimeAsleep();
    const minute = asleepMost(data[sleepyGuard]);
    log("Strategy 1: ", Number(sleepyGuard.slice(1))*minute[0]);
}
const secondPart = () => {
    let max = 0, sleepyGuard = [];
    Object.keys(data).forEach(guard=>{
        const tempArr = asleepMost(data[guard]);
        if(tempArr[1]>max) {
            max = tempArr[1];
            sleepyGuard = [guard, tempArr[0]];
        }
    })
    log("Strategy 2: ", Number(sleepyGuard[0].slice(1))*sleepyGuard[1]);
}
chronologicalSort();
populateDataObject();
firstPart();
secondPart();