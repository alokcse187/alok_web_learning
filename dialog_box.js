function exercise1OpenPromt() {
    let val1 = Number(prompt("Enter the Second Number"));
    let val2 = Number(prompt("Enter the Second Number"));
    let val3 = prompt("Enter the Operator(+,-,*,%)");
    let res = 0;
    if (isNaN(val1) || isNaN(val2)) {
        alert("Enter numbers only");
        return false;
    } 
    const allowedOperators = ["+", "-", "*", "/", "%"];
    if (val3.indexOf(allowedOperators) !== -1) {
        if (val3 === "+") {
            res = Number(val1) + Number(val2);
        }
        if (val3 === "-") {
            res = val1 - val2;
        }
        if (val3 === "*") {
            res = val1 * val2;
        }
        if (val3 === "%") {
            res = val1 % val2;
        }
        if (val3 === "/") {
            res = val1 / val2;
        }
    } else {
        alert("Invalid operator!!!");
        return false;
    }    
    res1 = val1 + val3 + val2 +" = " + res;
    alert(res1);
}