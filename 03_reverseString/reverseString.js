//at first i used a for loop after splitting the string into an array to go backwards through the array and re-add the letters 
// into an empty string to recreate the string backwards
//  i remembered there was some kind of reverse function that exists for strings or arrays then did some googling for my final outcome to be this:

const reverseString = function(string) {

    //CODE NOT WORKING BUT THIS IS HOW I BEGAN
    // stringArr = string.split('')
    // let reversedString = '';
    // for (i = stringArr.length; i > 0; i--) {
    //     reversedString += stringArr[i]
    // }

    // return reversedString;

    //REMEMBERED I COULD ALSO APPLY SINGLE-LINE CODE LIKE THIS TO THE RETURN 
    // stringArr = string.split('').reverse().join('');

    return string.split('').reverse().join('');

};

// Do not edit below this line
module.exports = reverseString;
