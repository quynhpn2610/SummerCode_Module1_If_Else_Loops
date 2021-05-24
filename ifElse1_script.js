// if 1
// bai 4: Nhap 3 so nguyen, tim gia tri lon nhat.
let max = 0

function findMax(num1, num2, num3){
    if (num1 > num2){
        if (num1 > num3){
            max = num1;
        }
        else{
            max = num3;
        }
    }
    else {
        if (num2 > num3){
            max = num2;
        }
        else{
            max = num3;
        }
        }
    return max;
}

function getMax() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    document.getElementById("result").innerHTML = "<h4>Result: " + findMax(a, b, c) + "</h4>";
}

// if 2
// bai 6: Giai phuong trinh bac 1 dang ax + b = 0
let result = 0
function linearFuncSolver(a, b){
    if(a==0){
        if(b=0){
            
        }
    }
}


// bai 7
// bai 12


