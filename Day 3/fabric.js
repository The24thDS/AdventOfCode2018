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
    Object.values(zones).forEach(zone=>{
        for(let i = zone.top; i<zone.top+zone.height; i++)
            for(let j = zone.left; j<zone.left+zone.width; j++)
                fabric[i][j]++;
    })
    const overlapingInches = fabric.map(arr=>arr.filter(element=>element>1)).filter(element=>element.length>0);
    let length = overlapingInches.length;
    while(length--)
    {
        const temp = overlapingInches.pop();
        temp.forEach(element=>overlapingInches.unshift(element)) 
    }
    log(overlapingInches.length)
}
firstPart();