function square(height, width) {
    height = document.getElementById('number1').value;
    width = document.getElementById('number2').value;
    // 'Number' is not necessary we can use '+'
    height = Number(height);
    width = Number(width);

    let result = document.getElementById('result');
    result.innerHTML = +(height * width);

}
