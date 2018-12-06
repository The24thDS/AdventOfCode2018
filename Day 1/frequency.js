const inputData = require("./input.js").input;
const format = require("../global/format.js");
const log = format.indentedLog;
const array = format.Numbers(inputData);
const firstPart = () => {
    let freq = array.reduce((accumulator,element)=>accumulator+element);
    return freq; //returning the final frequency
}
const secondPart = () => {
    let freq = 0;
    let duplicate = false;
    let frequencies = [0,];
    while(!duplicate)
        for(let element of array) {
            freq += element; //changing frequency
            if(frequencies.includes(freq))  //if the resulted freq is inside the array
            {                               //then is the second time we get it
                duplicate = true;
                log("twice", freq);
                break;                      //break the for loop, because we only need the first duplicate
            } else frequencies.push(freq);  //push the resulted freq inside the array if it's not there already
        }
}
log("Final frequency:", firstPart());
secondPart();