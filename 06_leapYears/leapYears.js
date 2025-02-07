const leapYears = function(year) {

    const century = year % 100 === 0;

    if (year % 4 === 0 && !century || year % 400 === 0) {
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
