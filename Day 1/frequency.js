let array = [];
let startFreq = 0;
async function getFreq() {
    try{
        let input = await fetch("https://adventofcode.com/2018/day/1/input"); //fetching the input file
        let text = await input.text(); //getting the text from the response
        let array = text.split("\n"); //converting the text into an array
        array.pop() //removing the last element as it was empty
        return array;
    }
    catch(error)
    {
        console.log(error);
    }
}
async function firstPart() {
    let freq = startFreq; //initializing frequency with start freq
    array = await getFreq(); //waiting for promise resolve
    array.forEach(freqChange => {
        let number = Number(freqChange); //converting text to number
        freq += number; //changing frequency
    })
    return freq; //returning the final frequency
}
async function secondPart() {
    let freq = startFreq; //initializing frequency with start freq
    array = await getFreq(); //waiting for promise resolve
    console.log(array);
    let duplicate = false;
    let frequencies = [0,];
    while(!duplicate)
        for(let freqChange of array) {
            let number = Number(freqChange); //converting text to number
            freq += number; //changing frequency
            if(frequencies.includes(freq))  //if the resulted freq is inside the array
            {                               //then is the second time we get it
                duplicate = true;
                console.log("twice", freq);
                break;                      //break the for loop, because we only need the first duplicate
            } else frequencies.push(freq);  //push the resulted freq inside the array if it's not there already
        }
}
firstPart().then(response=>console.log(response));
secondPart();