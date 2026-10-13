function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

var result = bmiCalculator(65, 1.75);
console.log(result);
