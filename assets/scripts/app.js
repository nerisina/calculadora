const defaultResult  = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumberInput(){
    return parseInt(userInput.value);
}
function createAndWriteLog(operator, resultBefore, calcNumber){
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationId, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: operationId,
        preventResult: prevResult,
        number: operationNum,
        result: newResult
    };
    logEntries.push(logEntry)
}
function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();

    if(
        calculationType !== 'add' &&
        calculationType !== 'subtract' &&
        calculationType !== 'Multiply' &&
        calculationType !== 'Divide' ||
        !enteredNumber
    ){
        return;
    }
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType === 'add'){
        currentResult = currentResult + enteredNumber;
        mathOperator = '+'
    }else{
        createAndWriteLog('-', initialResult, enteredNumber);
        mathOperator = '-'
    }
    createAndWriteLog(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}
function add(){
    calculateResult('add');
}
function subtract(){
  calculateResult('subtract')
}
function multiply(){
  calculateResult('multiply')
}
function divide(){
  calculateResult('divide')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


