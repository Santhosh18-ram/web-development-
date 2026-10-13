function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var days = yearsLeft * 365;
    var weeks = yearsLeft * 52;
    var months = yearsLeft * 12;

    return `You have ${days} days, ${weeks} weeks, and ${months} months left.`;
}

var result = lifeInWeeks(21);
console.log(result);
