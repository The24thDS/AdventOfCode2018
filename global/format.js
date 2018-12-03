const returnNumbers = input => {
    const tempArray = input.split("\n");
    return tempArray.map(element=>Number(element));
}
module.exports = {
    Numbers: returnNumbers
}