var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#calculator').submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($('#input1').val());
    var number2 = parseInt($('#input2').val());
    var operator = $("input:radio[name=operator]:checked").val();
    var simpleCalculator = new Calculator("hot pink");
    if (operator === "add") {
      result = simpleCalculator.add(number1, number2);
    } else if (operator === "subtract") {
      result = simpleCalculator.subtract(number1, number2);
    } else if (operator === "multiply") {
      result = simpleCalculator.multiply(number1, number2);
    } else if (operator === "divide") {
      result = simpleCalculator.divide(number1, number2);
    }
    $('#output').text(result);
  });
});
