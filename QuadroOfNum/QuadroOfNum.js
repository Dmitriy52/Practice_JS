
const createArr = (getArr) => {

    str = document.getElementById('text').value;
    getArr = str.toLowerCase().split(' ');
       console.log(getArr);
       Quadro(getArr);
}



const Quadro = (num) => {
   // num = [1 2 3 4 8 16];
    let quad = [];
    console.log(num);


    num.forEach(function (value) {
        if (value % 2 === 0) {

            quad.push(value * value);

        }

    });
    console.log(quad);
    sum(quad);
  }

//Quadro();

function sum(arr) {
    let resQuad = 0;
    for (i = 0; i < arr.length; i++) {

        resQuad += arr[i];

    }
    let resDom = document.getElementById('result');
    resDom.innerHTML = resQuad;
    console.log(resQuad);
}


     //secind variable

let num2 = [1, 4, 3, 0, 4, 5, 4];
let result;
     result = num2.filter(element => !(element % 2)).reduceRight((accumulator, element) => accumulator + Math.sqrt(element), 0);
 console.log(result);
