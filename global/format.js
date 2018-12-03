const returnNumbers = input => {
    const tempArray = input.split("\n");
    return tempArray.map(element=>Number(element));
}
const returnStrings = input => {
    return input.split("\n");
}
module.exports = {
    Numbers: returnNumbers,
    Strings: returnStrings
}