let result = document.getElementById('result');

const data = 
                [
                {name: "Саша", age: 19},
                {name: "Катя", age: 21},
                {name: "Миша", age: 17},
                {name: "Федя", age: 23},
                {name: "Клава", age: 22}
                ];

    //variant-1
function calcAvgAgeVar1(array) {
  let midAge = 0;
  let initialValue = 0;

    let sumOfAges = array.reduce(function(accumulator,item){
      return accumulator + item.age;
      },initialValue);

  midAge = sumOfAges / 5;
  console.log(midAge,'Variant-1');
  result.innerText += "Variant_1 - Answer: " + midAge + '\n';
  return midAge;
}
    //variant-2
function calcAvgAgeVar2(array){
  let ageArr = [];
  let sumOfAges = 0;
  let midAge = 0;

    array.map((item)=>{
      ageArr.push(item.age);
      return ageArr;
    })

    for( let i = 0; i <= ageArr.length - 1; i++ ){
          sumOfAges += ageArr[i];
        }
  midAge = sumOfAges / 5;
  console.log(midAge,'Variant-2');
  result.innerText +=  "Variant_2 - Answer: " + midAge + '\n';
  return midAge;
}
    //variant-3
function calcAvgAgeVar3(array){
  let ageArr = [];
  let sumOfAges = 0;
  let midAge = 0;

    for(let i = 0; i < array.length; i++){
       ageArr.push(array[i].age);
    }
  
    for( let i = 0; i <= ageArr.length - 1; i++ ){
     sumOfAges += ageArr[i];
    }
  
   midAge = sumOfAges / 5;
   console.log(midAge,'Variant-3');
   result.innerText +=  "Variant_3 - Answer: " + midAge;
   return midAge;
}

calcAvgAgeVar1(data);
calcAvgAgeVar2(data);
calcAvgAgeVar3(data);