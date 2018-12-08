const inputData = require("./input.js").input;
let input = inputData;
const log = require("../global/format.js").indentedLog;
String.prototype.reverse = function(){
    const split = this.split("");
    const reversed = split.reverse();
    const string = reversed.join("");
    return string;
}
const React = (string, flags) => {
    let changes = false;
    while(1){
        let regex = new RegExp(string, flags);
        const oldLength = input.length;
        input = input.replace(regex, "");
        const newLength = input.length;
        if(newLength===oldLength) break; else changes = true;
    }
    return changes;
}
const firstPart = () => {
    for(let char = 97; char<123;)
    {
        const string = `${String.fromCharCode(char)}${String.fromCharCode(char).toUpperCase()}`;
        if(React(string, `g`)) {char=97; continue;}
        if(React(string.reverse(), `g`)) {char=97; continue;}
        char++;
    }
    return input.length;
}
const secondPart = () => {
    let min=inputData.length;
    for(let char = 97; char<123; char++)
    {
        input = inputData;
        React(String.fromCharCode(char), `gi`);
        const length = firstPart();
        if(length<min) min=length;
    }
    return min;
}
log("Dimension after reaction: ", firstPart());
log("Dimension after improved reaction: ", secondPart());