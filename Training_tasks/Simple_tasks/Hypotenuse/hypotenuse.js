function hypotenuse(n,m){
    n = document.getElementById('number1').value;
    m = document.getElementById('number2').value;

    let result = document.getElementById('result');
        result.innerHTML = Math.sqrt(Math.pow(n,2) + Math.pow(m,2) );
}
