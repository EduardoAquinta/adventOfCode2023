const collectCalibration = (input) => 
{
    let fullStringNumber = ""
    let total = 0;

    if(typeof(input) === "string")
    {
        fullStringNumber = createFullNumber(input)
        total += convertStringToNumber(fullStringNumber)
    }

    if(Array.isArray(input) === true)
    {
        input.forEach(elem => {
            fullStringNumber = createFullNumber(elem);
            total += convertStringToNumber(fullStringNumber)
        })
    }
    return total;
}

const createFullNumber = (input) => 
{
    let firstNumber = findFirstNumber(input)
    let lastNumber = findLastNumber(input)
    let fullNumber = firstNumber + lastNumber;

    return fullNumber;
}

const convertStringToNumber = (string) => 
{
    return Number(string)
}

const findFirstNumber = (string) => 
{
    const regex = /\d+/g
    let firstNumber = string.match(regex)[0].substring(0,1)

    return firstNumber
}

const findLastNumber = (string) => 
{
    const regex = /\d+/g
    let numbers = string.match(regex)
    let numbersString = numbers.join("")
    let lastNumber = numbersString.substring(numbersString.length - 1)

    return lastNumber
}

module.exports = collectCalibration, findFirstNumber, findLastNumber, convertStringToNumber;