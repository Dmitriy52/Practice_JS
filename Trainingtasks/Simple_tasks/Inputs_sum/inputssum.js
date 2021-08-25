

const sumOfInp = (flag) =>{
    let num = document.getElementsByClassName('num');
    let result = document.getElementById('result');
    let sum = 0;

        for(let i = 0; i < num.length; i++){

                sum += +num[i].value;
        }
        console.log(sum);

        result.value = sum;

    if (flag === 0){
        for(let i = 0; i < num.length; i++){

            num[i].value = '';
        }
        result.value = '';
    }

}
