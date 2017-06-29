var calculator = document.getElementById('calculator');
var screen = document.getElementsByTagName('input');
var numbersList = [];
var equation = [];
var operatorValue = 0;
var concatNumbers = 0;

calculator.addEventListener('click', function(event) {
	var valueOfClick = event.target.value;
	checkButtonValue(valueOfClick);
});


function checkButtonValue(valueOfClick) { 
    if (valueOfClick === '+' || valueOfClick == '-' || valueOfClick == '/' || valueOfClick == 'x' || valueOfClick == '.') {
        operators(valueOfClick);
	} else if (valueOfClick === 'C') {
        eraseAllInputs(valueOfClick);
    } else {
        storeNumbers(valueOfClick);
    }
}


function storeNumbers(valueOfClick) {
	if (operatorValue !== 0 || valueOfClick === '=') {
		concatNumbers = Number(numbersList.join(''));
		numbersList = [];
		addNumbersAndOperatorsToList(valueOfClick);
	} 
	
	numbersList.push(valueOfClick);
};


function operators(valueOfClick) {
	if (numbersList.length === 0) {
		return;
	} else {
		operatorValue = valueOfClick;
	}
};


function addNumbersAndOperatorsToList(valueOfClick) {
	equation.push(concatNumbers);
	
	if (operatorValue !== 0) {
		equation.push(operatorValue);
	}
	
	console.log(equation);
	operatorValue = 0;

	if (valueOfClick === '=') {
		mathOperations();
	}
};


function mathOperations() {
	var num1 = "";
	var num2 = "";
	var total = 0;
	var operatorSymbol;

	for (var i = 0; i < equation.length; i++) {
		if (!isNaN(equation[i])) {
			if (num1 === "") {
				num1 = equation[i];
			} else {
				num2 = equation[i];
			}
		} else {
			operatorSymbol = equation[i];
		}

		if (num1 !== "" && total !== 0) {
			if (operatorSymbol === '+') {
				total = total + num1;
			} else if (operatorSymbol === '-') {
				total = total - num1;
			} else if (operatorSymbol === 'x') {
				total = total * num1;
			} else {
				total = total / num1;
			}
			showResultToscreen(total);
			num1 = "";
		}


		if (num1 !== "" && num2 !== "") {
			if (operatorSymbol === '+') {
				total = num1 + num2;
			} else if (operatorSymbol === '-') {
				total = num1 - num2;
			} else if (operatorSymbol === 'x') {
				total = num1 * num2;
			} else {
				total = num1 / num2;
			}
			
			num1 = "";
			num2 = "";
		}
		showResultToscreen(total);
	}
};


function showResultToscreen(total) {
	screen[0].setAttribute('value', total);
};


function eraseAllInputs() {
	numbersList = [];
	equation = [];
	operatorValue = 0;
	concatNumbers = 0;
	screen[0].setAttribute('value', 0);
};










