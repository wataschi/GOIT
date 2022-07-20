const inputValue = e => {
	inputOneValue = Number(inputOne.value);
	inputTwoValue = Number(inputTwo.value);
};

const operation = operator => {
	inputValue();
	if (operator === "+") {
		outputRes.value = inputOneValue + inputTwoValue;
	}
	if (operator === "-") {
		outputRes.value = inputOneValue - inputTwoValue;
	}
	if (operator === "*") {
		outputRes.value = inputOneValue * inputTwoValue;
	}
	if (operator === "/") {
		outputRes.value = inputOneValue / inputTwoValue;
	}
};
const sFn = e => {
	operation("+");
};
const nFn = e => {
	operation("-");
};
const mFn = e => {
	operation("*");
};
const dFn = e => {
	if (inputTwoValue === 0 || inputOneValue === undefined) {
		outputRes.value = "Bad input!";
	} else {
		operation("/");
	}
};
buttonS.addEventListener("click", sFn);
buttonN.addEventListener("click", nFn);
buttonM.addEventListener("click", mFn);
buttonD.addEventListener("click", dFn);
