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
        let temparr=element.split("] ");
        if(temparr[1].charAt(6)==='#'){
            temparr[1]=temparr[1].split(" ")[1];
        }else if(temparr[1].includes("falls")) temparr[1]=1; else temparr[1]=0;
        const info = temparr[1];
        let time = temparr[0].split(/[- :]+/);
        time.shift();
        time = time.join("");
        array[i]=[time, info]
    })
    array.sort();
}
const populateDataObject = () => {
    let key;
    array.forEach(element=>{
        if(typeof element[1]==="string") {key = element[1];data[key] = data[key]===undefined?[]:data[key]}
        else {
            data[key].push(Number(element[0].slice(-2)))}
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
    return minutes.indexOf(minutes.max());
}
const firstPart = () => {
    chronologicalSort();
    populateDataObject();
    const sleepyGuard = calculateTotalTimeAsleep();
    const minute = asleepMost(data[sleepyGuard]);
    log(Number(sleepyGuard.slice(1))*minute);
}
firstPart()
// log(data)