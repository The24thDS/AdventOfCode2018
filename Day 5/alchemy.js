let input = require("./input.js").input;
// let input = "dabAcCaCBAcCcaDAdabAcCaCBAcCcaDAdabAcCaCBAcCcaDA";
const log = require("../global/format.js").indentedLog;
String.prototype.reverse = function(){
    const split = this.split("");
    const reversed = split.reverse();
    const string = reversed.join("");
    return string;
}
const React = (string) => {
    let changes = false;
    while(1){
        let regex = new RegExp(string, `g`);
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
        if(React(string)) {char=97; continue;}
        if(React(string.reverse())) {char=97; continue;}
        char++;
    }
    log("Dimension after reaction: ", input.length);
}
firstPart()