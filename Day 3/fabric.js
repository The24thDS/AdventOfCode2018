const inputData = require("./input.js").input;
const format = require("../global/format.js");
const log = format.indentedLog;
const array = format.Strings(inputData);
const zones = {}
const fabric = new Array(1000);
for (let i = 0; i < fabric.length; i++) {
    fabric[i] = new Array(1000).fill(0);
}
const insert = (element) => {
    const data = element.split(/[@\s,:x]+/); //split after @ , : x
    zones[data[0]] = {
                        "left": Number(data[1]),
                        "top" : Number(data[2]),
                        "width": Number(data[3]),
                        "height": Number(data[4])
                        }
}
const firstPart = () => {
    array.forEach(element => insert(element));
    Object.keys(zones).forEach(key=>{
        const {left, top, width, height} = zones[key];
        for(let i = top; i<top+height; i++)
            for(let j = left; j<left+width; j++)
                fabric[i][j]++;
    })
    const overlapingInches = fabric.map(arr=>arr.filter(element=>element>1)).filter(element=>element.length>0);
    let length = overlapingInches.length;
    while(length--)
    {
        const temp = overlapingInches.pop();
        temp.forEach(element=>overlapingInches.unshift(element)) 
    }
    log("Overlaping square inches: ", overlapingInches.length)
}
const secondPart = () => {
    for(let key of Object.keys(zones)){
        let onlyOne = true;
        const {left, top, width, height} = zones[key];
        for(let i = top; i<top+height; i++)
            for(let j = left; j<left+width; j++)
                if(fabric[i][j]>1) onlyOne = false;
        if(onlyOne){
            log("ID of the only claim that doesn't overlap: ",key);
            break;
        }        
    }
}
firstPart();
secondPart();