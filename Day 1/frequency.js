let array = [];
let startFreq = 0;
async function getFreq() {
    try{
        let input = await fetch("https://adventofcode.com/2018/day/1/input"); //fetching the input file
        let text = await input.text(); //getting the text from the response
        return text.split("\n"); //converting the text into an array
    }
    catch(error)
    {
        console.log(error);
    }
}
async function resolve() {
    let freq = startFreq; //initializing frequency with start freq
    array = await getFreq(); //wainting for promise resolve
    array.forEach(freqChange => {
        let number = Number(freqChange); //converting text to number
        freq += number; //changing frequency
    })
    return freq; //returning the final frequency
}
resolve().then(response=>console.log(response));