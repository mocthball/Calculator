let TOTALING;
let SECOND_NUM = "";
let operator = "";
let first_operation = true;

function key_entry(num){
    if (SECOND_NUM.length > 12) {

    }
    else {
        SECOND_NUM += num;
    }
    document.getElementById("current_operation").innerHTML = SECOND_NUM;
}

function operator_entry(operation) {
    operator = operation;
    let enums = document.getElementById("last_operation");
    if (!enums.value && SECOND_NUM){
        enums.innerHTML = SECOND_NUM + " " + operator;
        TOTALING = Number(SECOND_NUM);
        SECOND_NUM = "";
        document.getElementById("current_operation").innerHTML = "";
    }
    else {
        if (TOTALING){
            console.log("test");
        }
        enums.innerHTML = TOTALING + " " + operator;
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
        case "add": 
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a,b);
    }
}

function clear_calc(){
    first_operation = true;
    FIRST_NUM = 0;
    SECOND_NUM = 0;
}