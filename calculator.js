// define global variables for num1, num2, operator, total
let num1 = ''; 
let num2 = ''; 
let operator = ''; 
let total = '';

const display = document.querySelector('.display');
display.innerHTML = 0;

const logic = e => {
  // assign clicked button to a variable
  let btn = e.target.innerHTML;
  // if I press a number, run handleNumber
  if (btn >= 0 && btn <= 9) {
    // if oper has not been pressed, keep 
    // adding numbers to input
    handleNumber(btn);
    return;
  } else if (btn === '*' || 
             btn === '/' || 
             btn === '+' || 
             btn === '-') { 
    // if I press an operator, run handleOperator
    handleOperator(btn);
    return;
  } else if (btn === 'C') {
    clearInputs();
    return;
  } else if (btn === '=') {
    handleTotal();
    resetNum();
    operator = '';
    return;
  }
};

const container = document.getElementById('container');
container.addEventListener('click', logic);

function handleNumber(num) {
  // if num1 is empty, assign clicked numbers to num1
  if (operator === '') {
    num1 += num;
  } else {
  // else assign to num2
    num2 += num;
  }
  displayInputs(num);
}

function handleOperator(oper) {
  // assigns clicked btn to the global operator variable
  operator = oper;
  
  // highlight selected operator;
}

function displayInputs(btn) {
  // debugger;
  if (display.innerHTML === '0') {
    display.innerHTML = btn;
  } else if (display.innerHTML.length !== num1) {
    if (operator === '') {
      display.innerHTML = num1;
    } else {
      display.innerHTML = num2;
    }
    return;
  }
}         

function clearInputs() {
  display.innerHTML = '0';
  num1 = '';
  num2 = '';
  operator = '';
  total = '';
}

function displayTotal() {
  display.innerHTML = total;
}

// actually do the math
function handleTotal () {
  switch (operator) {
    case '+': total = +num1 + (+num2); break;
    case '-': total = +num1 - +num2; break;
    case '/': total = +num1 / +num2; break;
    case '*': total = +num1 * +num2; break;
  }
  displayTotal();
}

function resetNum() {
  num1 = total;
  num2 = '';
}


// displays num1, num2, and total for logic debugging

const debug1 = document.querySelector('#num1');
const debug2 = document.querySelector('#num2');
const debugTot = document.querySelector('#total');
document.addEventListener('click', function() {
  debug1.innerHTML = num1;
  debug2.innerHTML = num2;
  debugTot.innerHTML = total;

});


// figure out how to choose number of decimals in parseFloat
// 'C' --> display = ;';
// '.' adds '.' to display
// alert an error if user tries to input two decimals
// if display contains '.', alert error if clicked or do nothing
