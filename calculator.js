let TOTALING;
let SECOND_NUM = "";
let operator = "";

function key_entry(num){
    if(num == "." && SECOND_NUM.includes(".")){
    }
    else {
        if (SECOND_NUM.length > 12) {

        }
        else {
            SECOND_NUM += num;
        }
        document.getElementById("current_operation").innerHTML = SECOND_NUM;
    }
}

function operator_entry(operation) {
    let enums = document.getElementById("last_operation");
    if (SECOND_NUM === "."){
        return;
    }
    if (!TOTALING && SECOND_NUM){
        operator = operation;
        enums.innerHTML = SECOND_NUM + " " + operator;
        TOTALING = Number(SECOND_NUM);
        SECOND_NUM = "";
        document.getElementById("current_operation").innerHTML = "";
    }
    else if (TOTALING && (SECOND_NUM.length > 0) && operation == "="){
        TOTALING = operate(operator, TOTALING, Number(SECOND_NUM));
        SECOND_NUM = "";
        enums.innerHTML = TOTALING + " " + "=";
        document.getElementById("current_operation").innerHTML = "";
    }
    else if (TOTALING && (SECOND_NUM.length > 0)){
        operator = operation;
        TOTALING = operate(operator, TOTALING, Number(SECOND_NUM));
        SECOND_NUM = "";
        enums.innerHTML = TOTALING + " " + operator;
        document.getElementById("current_operation").innerHTML = "";
    }
    else {
        operator = operation;
        enums.innerHTML = " " + operator;
    }
}

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operation, a, b) {
    switch(operation) {
        case "+": 
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "%":
            return divide(a,b);
    }
}

function clear_calc(){
    TOTALING = "";
    SECOND_NUM = "";
    document.getElementById("last_operation").innerHTML = "";
    document.getElementById("current_operation").innerHTML = "";
}

function delete_calc() {
    SECOND_NUM = SECOND_NUM.slice(0, -1);
    document.getElementById("current_operation").innerHTML = SECOND_NUM;
}