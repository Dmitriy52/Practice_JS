const minMax = (num1, num2) => {

    num1 = document.getElementById('number1').value;
    num2 = document.getElementById('number2').value;
    let result = document.getElementById('result');

    if (num1 > num2) {
        result.innerHTML = num1 + " - Max <br \/> " + num2 + " - Min";
        console.log(num1 + " - Max " + num2 + " - Min");

    } else if (num1 < num2) {
        result.innerHTML = num1 + " - Min <br \/> " + num2 + " - Max";
        console.log(num1 + " - Min " + num2 + " - Max");

    } else if (num1 === num2) {
        result.innerHTML = num1 + " = " + num2;
        console.log(num1 + " = " + num2)
    }
}
