const $display = document.querySelector('#display');
const $steps = document.querySelector('#steps');
const $areaBtn = document.querySelector('#areaBtn');

const data = {
    prev : '',
    curr : '',
    operator: undefined
}

const OFF_KEY = 'off';

function onNum(operator, target){
    let prevOrcurr = operator ? 'curr' : 'prev';
    const val = target.dataset.val;
    if(val === '-1'){
        if(data.curr !== ''){
            data[prevOrcurr] = Number(data.curr) * -1;
        } else{
            data[prevOrcurr] = Number(data.prev) * -1;
        }
    } else{
        data[prevOrcurr] += val;
    }

    $steps.innerHTML = data[prevOrcurr];
}

function onOps(target){
    $display.classList.remove(OFF_KEY);
    onResult();
    const dataOp = target.dataset.val;
    data.operator = dataOp;

    if(data.prev === undefined) return;

    showMiddleStep();
}

function onResult(){
    if(data.prev === undefined || data.curr === undefined || data.operator === undefined) return;

    data.prev = calSum();
    $display.innerHTML = data.prev;
    data.curr='';
}

function showResult(){
    if(data.prev === undefined || data.curr === undefined || data.operator === undefined) return;

    $display.classList.add(OFF_KEY);
    data.prev = calSum();
    $steps.innerHTML = data.prev;
    data.curr='';
}

function calSum(){
    const {prev,curr,operator} = data;
    switch(operator){
        case "+":
            return Number(prev) + Number(curr);
        case "-":
            return Number(prev) - Number(curr);
        case "*":
            return Number(prev) * Number(curr);
        case "/":
            return Number(prev) / Number(curr);
    }
}

function operatorToString(){
    const {operator} = data;
    switch (operator){
        case "+" :
            return "+";
        case "-" :
            return "-";
        case "*" :
            return "×";
        case "/" :
            return "÷";
    }
}

function showMiddleStep(){
    const middleSteps = `${data.prev} ${operatorToString()}`;
    $steps.innerHTML = middleSteps;
}

function onReset(){
    data.prev = '';
    data.curr = '';
    $display.innerHTML = '0';
    $display.classList.add(OFF_KEY);
    $steps.innerHTML = '0';
    data.operator = undefined;
}

$areaBtn.addEventListener('click', (e) => {
    const target = e.target;
    if(target.tagName !== 'BUTTON') return;

    if(target.id === 'reset'){
        onReset();
        return;
    }

    if(target.className === 'num'){
        onNum(data.operator, target);
    }

    if(target.className === 'op'){
        onOps(target);
    }

    if(target.id === 'btnResult'){
        showResult();
    }
});