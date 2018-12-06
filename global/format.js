const returnNumbers = input => {
    const tempArray = input.split("\n");
    return tempArray.map(element=>Number(element));
}
const returnStrings = input => {
    return input.split("\n");
}
const indentedLog = (format, ...args) => {
    let indent = ' '.repeat(new Error().stack.match(/\n/g).length - 2);
    if (typeof format === 'string') { 
        console.log(indent + format, ...args); 
    } else { 
        console.log(indent, format, ...args); 
    } 
}
module.exports = {
    Numbers: returnNumbers,
    Strings: returnStrings,
    indentedLog: indentedLog
}