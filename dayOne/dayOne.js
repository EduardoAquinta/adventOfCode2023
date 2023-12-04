const collectCalibration = (input) => 
{
    let firstNumber = findFirstNumberInString(input)
    let numberFromString = convertStringToNumber(firstNumber) 

    return numberFromString;
}

const convertStringToNumber = (string) => 
{
    return Number(string)
}

const findFirstNumberInString = (string) => 
{
    const regex = /[0-9]+/
    return string.match(regex)
}

module.exports = collectCalibration;