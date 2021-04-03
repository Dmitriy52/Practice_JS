
const fizzBuzz = num =>{

    //clean result
    let clean = document.getElementById('result');
    clean.innerHTML = ' ';

    //let's go
    num = document.getElementById('number').value;
    let result = document.getElementById('result');



    for (let i = 1; i <= num; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            result.innerHTML += 'FizzBuzz' + ',' + ' ';
            console.log('FizzBuzz');

        }else if (i % 3 === 0){
            result.innerHTML += 'Fizz' + ',' + ' ';
            console.log('Fizz');

        }else if (i % 5 === 0) {
            result.innerHTML += 'Buzz' + ',' + ' ';
            console.log('Buzz');

        }else{
            result.innerHTML += i + ',' + ' ';
            console.log(i);
        }
    }

    let textNum = document.getElementById('textNumber');
    textNum.innerHTML = ' ' + num + ' ';

}