let numOne = '';
let operator = '';
let numTwo = '';
const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

const onClickNumber = (number) => () => {
    if (operator) {
        numTwo += number;
    } else {
        numOne += number;
    }
    $result.value += number;
}

document
    .querySelector('#num-0')
    .addEventListener('click', onClickNumber('0'));
document
    .querySelector('#num-1')
    .addEventListener('click', onClickNumber('1'));
document
    .querySelector('#num-2')
    .addEventListener('click', onClickNumber('2'));
document
    .querySelector('#num-3')
    .addEventListener('click', onClickNumber('3'));
document
    .querySelector('#num-4')
    .addEventListener('click', onClickNumber('4'));
document
    .querySelector('#num-5')
    .addEventListener('click', onClickNumber('5'));
document
    .querySelector('#num-6')
    .addEventListener('click', onClickNumber('6'));
document
    .querySelector('#num-7')
    .addEventListener('click', onClickNumber('7'));
document
    .querySelector('#num-8')
    .addEventListener('click', onClickNumber('8'));
document
    .querySelector('#num-9')
    .addEventListener('click', onClickNumber('9'));

const onClickOperator = (op) => () => {
    if (numOne && !numTwo) {
        operator = op;
        $operator.value = op;
        $result.value = '';
    } else if (!numOne) {
        alert('먼저 숫자를 입력하세요.');
    }
}

const onClickClear = () => () =>{
    $operator.value = '';
    $result.value = '';
    numOne = operator = numTwo = '';
}

const onClickCalculator = () => () => {
if (operator =='+') {
    $result.value = parseInt(numOne) + parseInt(numTwo);
}else if (operator =='-') {
    $result.value = parseInt(numOne) - parseInt(numTwo);
}else if (operator =='*') {
    $result.value = parseInt(numOne) * parseInt(numTwo);
}else if (operator =='/') {
    $result.value = parseInt(numOne) / parseInt(numTwo);
}
}

document
    .querySelector('#plus')
    .addEventListener('click', onClickOperator('+'));
document
    .querySelector('#minus')
    .addEventListener('click', onClickOperator('-'));
document
    .querySelector('#divide')
    .addEventListener('click', onClickOperator('/'));
document
    .querySelector('#multiply')
    .addEventListener('click', onClickOperator('*'));

document.querySelector('#clear').addEventListener('click', onClickClear());
document.querySelector('#calculate').addEventListener('click', onClickCalculator());