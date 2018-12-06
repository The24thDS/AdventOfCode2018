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
const secondPart = () => {
    const strL = array[0].length;
    const almostEqualBoxes = [];
    for(let index=0; index<array.length; index++){
        const element = array[index];
        almostEqualBoxes.push(element);
        for(let i=index+1; i<array.length; i++)
        {
            let differentLetters = 0;
            for(let c=0; c<strL; c++)
            {
                if(element.charCodeAt(c)!==array[i].charCodeAt(c))
                    differentLetters++;
                if(differentLetters>1) break;
            }
            if(differentLetters===1)
            {
                almostEqualBoxes.push(array[i]);
                break;
            }
        }
        if(almostEqualBoxes.length===2) break;
        else almostEqualBoxes.pop();
    }
    for(let c=0; c<strL; c++)
        if(almostEqualBoxes[0].charAt(c)===almostEqualBoxes[1].charAt(c)) console.log(almostEqualBoxes[1].charAt(c))
}
console.log(firstPart());
secondPart();