const removeFromArray = function(array, ...args) {

    const numArr = []

    //use foreach method to go through each item in the array
    array.forEach((item) => {
        //if the arguments does not match any of the other arguments passed in then push to new array
    if (!args.includes(item)) {
        numArr.push(item);
    }
});
    //return the new array
    return numArr;

};

// Do not edit below this line
module.exports = removeFromArray;
