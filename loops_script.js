// loop1
// bai 2
function Bai1_2(){
    let temp = Number(prompt("Enter a number: "));
    while (temp > 100 || temp < 20) {
        if (temp < 20) {
            alert("Too cold!")
            temp = Number(prompt("Enter a number: "));
        } else if (temp > 100) {
            alert("Too hot!")
            temp = Number(prompt("Enter a number: "));
        }
    }
    alert("Acceptable temperature!")
}

// bai 4
function checkFib_divby5(firstNum, secondNum){
    let currentNum = firstNum + secondNum;
    while (currentNum % 5 !== 0){
        return checkFib_divby5(secondNum, currentNum);
    }
    return currentNum;
}
function Bai1_4(){
    document.getElementById("result").innerHTML="<h4> Result: " + checkFib_divby5(0,1)
}

// bai 5
function sumFib(n){
    let firstNum = 0, secondNum = 1, currentNum = 0
    let sum = 0
    for (let i = 3; i <= n; i++) {
        currentNum = firstNum+secondNum
        secondNum = currentNum
        firstNum = secondNum
        sum += currentNum
    }
    return sum
}
function Bai1_5(){
    let n = parseInt(document.getElementById("n").value)
    document.getElementById("result1").innerHTML="<h4> Result: " + sumFib(n)
}

// bai 7 FizzBuzz
function FizzBuzz(){
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            document.write(i + " FizzBuzz <br>")
        }
        else if (i % 3 === 0){
            document.write(i + " Fizz <br>")
        }
        else if (i % 5 === 0) {
            document.write(i + " Buzz <br>")
        }
        else{
            document.write(i + "<br>")
        }
    }
}

// loop2
// bai 2: Tinh giai thua
function Factorial(n){
    while(n!==0 && n!==1){
        return n * Factorial(n-1)
    }
    return 1
}
function Bai2_2(){
    let n = parseInt(document.getElementById("tun").value)
    document.getElementById("result2").innerHTML="<h4> Result: " + Factorial(n)
}
// bai 3: In tam giac vuong -> nested loops, 1 cai cho row, 1 cai cho column
function printTriangle1(){
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            document.write("*");
        }
        document.write("<br>")
    }
}

function printTriangle2(){
    for (let i = 0; i < 5; i++) {
        for (let j = 4; j >= i ; j--) {
            document.write("*");
        }
        document.write("<br>")
    }
}

function printTriangle3() {
    let n = 5;
    for (let i = 1; i <= n; i++) {
        for (let j = n-1; j >= i; j--) {
            document.write("&nbsp &nbsp");
        }
        for (let k = 1; k <= i; k++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");
}


function printTriangle4() {
    let n = 5;
    for (let i = n; i >= 1; i--) {
        for (let j = n-1; j >= i; j--) {
            document.write("&nbsp &nbsp");
        }
        for (let k = 1; k <= i; k++) {
            document.write("* ");
        }
        document.write("<br>");
    }
    document.write("<br>");
}

