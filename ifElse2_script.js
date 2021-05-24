// if 2
// bai 6: Giai phuong trinh bac 1 dang ax + b = 0
function linearSolver(a, b){
    if(a===0){
        if(b===0){
            return "Countless equations";
        }
        else{
            return "Impossible equation";
        }
    }
    else{
        return (-b/a).toString();
    }
}

function Solve1(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    document.getElementById("result1").innerHTML= "<h4>Result: " + linearSolver(a, b) + "</h4>";
}

// bai 7: Giai phuong trinh bac 2 dang ax^2+bx+c=0
function quadSolver(a1, b1, c){
    if (a1===0){
        if (b1===0 && c===0){
            return "Countless equations";
        }
        else if (b1===0 && c!==0){
            return "Impossible equation";
        }
        else {
            return (-c/b1).toString();
        }
    }
    else{
        let delta = 0
        let deltaSqrt = Math.pow(delta, 0.5)
        let x1 = (-b1+deltaSqrt)/2*a1
        let x2 = (-b1-deltaSqrt)/2*a1
        let resultString = "There are 2 roots: ";
        resultString += x1.toString();
        resultString += " and " + x2.toString();
        return resultString;
    }
}

function Solve2(){
    let a1 = parseInt(document.getElementById("a1").value)
    let b1 = parseInt(document.getElementById("b1").value)
    let c = parseInt(document.getElementById("c").value)
    document.getElementById("result2").innerHTML= "<h4>Result: " + quadSolver(a1, b1, c) + "</h4>";
}

// bai 12: Compound Interest Rate Calculator
function interestCalc(){
    let a = parseFloat(document.getElementById("amount").value)
    let user_input_rate = parseFloat(document.getElementById("rate").value)
    let r = user_input_rate/100
    let t = parseFloat(document.getElementById("years").value)
    let n = parseFloat(document.getElementById("n").value)
    let result = a*(Math.pow(1+(r/n), n*t))
    document.getElementById("result3").innerHTML= "<h4>Result: " + result + "</h4>";
}

