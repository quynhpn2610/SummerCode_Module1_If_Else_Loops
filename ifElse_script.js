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

// let myArr = []
// for (let i=0; i<3; i++){
//     myArr[i] = parseInt(prompt("Enter an integer: "));
// }

function getMax() {
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
    let c = parseInt(document.getElementById("num3").value);
    document.getElementById("result").innerHTML = "<h4>Result: " + findMax(a, b, c) + "</h4>";
}


// if 2
// bai 6
// bai 7
// bai 12


