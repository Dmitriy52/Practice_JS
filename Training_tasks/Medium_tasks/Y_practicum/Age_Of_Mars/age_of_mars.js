let result = document.getElementById('result');


const agesOfMarsArr = [17, 23, 31, 44, 59];

doubleNumberVar1(agesOfMarsArr); // возвращает [34,46,62,88,118];
doubleNumberVar2(agesOfMarsArr); // возвращает [34,46,62,88,118];
doubleNumberVar3(agesOfMarsArr); // возвращает [34,46,62,88,118];

    //Variant_1
function doubleNumberVar1(array){

  let resultArr = array.map((item) =>{
      return item * 2;
    })
    
    result.innerText += "Variant_1 - Answer: " + resultArr.join(', ') + '\n';
    console.log('Variant_1',resultArr);
    return resultArr;
}

    //Variant_2
function doubleNumberVar2(array){
  
  let resultArr = [];

    array.forEach((elem) =>{
      resultArr.push(elem * 2);
      return resultArr;
  })
  result.innerText += "Variant_2 - Answer: " + resultArr.join(', ') + '\n';
  console.log('Variant_2',resultArr);
  return resultArr;
}

//Variant_3
function doubleNumberVar3(array){
  
  let resultArr = [];

    for(let i = 0; i < array.length; i++){

        resultArr.push(array[i] * 2);
    }

    result.innerText += "Variant_3 - Answer: " + resultArr.join(', ') + '\n';
    console.log('Variant_3',resultArr);
    return resultArr;
}