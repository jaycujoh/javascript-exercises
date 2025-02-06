const sumAll = function(num1, num2) {

    //if either argument isn't a number, return an error
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    //if both numbers are below, 0 return an error
    if (num1 < 0 || num2 < 0)  {
        return "ERROR";
    }

    //making sure num1 is always smallest number and num2 is highest
    // e.g if (15 > 10)
    if (num1 > num2) {
        //holding the higher number in a variable
        const tempNum = num1 //tempNum = 15
        //assigning the higher number to now be the lower number
        num1 = num2 // 15 is now the 10
        //taking the highest number back from the holder and assigning it to num2
        num2 = tempNum //10 is now the 15
    }

    let sum = 0;
    //making i = to the lowest and if lower or equal to the highest number it will add number currently at i
    //to the 'sum' variable
        //e.g i = 10, 10 is less than 15 so each iteration will be; sum = 10 + 11 + 12 + 13 + 14 + 15
    for (i = num1; i <= num2; i++) {
        sum += i
    }    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
