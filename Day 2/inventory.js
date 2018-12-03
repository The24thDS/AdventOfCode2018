const inputData = require("./input.js").input;
const format = require("../global/format.js");
const array = format.Strings(inputData);
const firstPart = () => {
    let twice = 0, threeX = 0;
    array.forEach( element => {
        const letters = element.split("");
        let evidence = {};
        letters.forEach( letter => {
            if(Object.keys(evidence).includes(letter))
                evidence[letter]++;
            else evidence[letter] = 1;
        });
        const values = Object.values(evidence).filter(element => element>1);
        if(values.includes(2)) twice++;
        if(values.includes(3)) threeX++;
    })
    return twice*threeX;
}
console.log(firstPart());