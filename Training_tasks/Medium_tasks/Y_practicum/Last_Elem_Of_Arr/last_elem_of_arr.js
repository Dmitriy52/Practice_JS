let result = document.getElementById('result');
let lastArrElem;

var words = ['Ночь', 'Улица', 'Фонарь', 'Аптека', 'Бессмысленный', 'Тусклый', 'Свет'];

getLastElementOfArrayVar_1(words); 

  //Variant_1
 function getLastElementOfArrayVar_1(array) {

   lastArrElem = array.find((item,index) =>{
       if(index == (array.length - 1)){
         lastArrElem = item;
         return lastArrElem;
       }
     })
     result.innerText += "Variant_1 - Answer: " + lastArrElem + '\n';
     return lastArrElem;
 }

  //Variant_2
  lastArrElem = words.find((item,index) =>{
      return item = index == (words.length - 1);   
    })
    result.innerText += "Variant_2 - Answer: " + lastArrElem + '\n';

  //Variant_3
  for(let i = 0; i <= words.length; i++){
    if(i == words.length - 1){
      lastArrElem = words[i];
    }
  }
  result.innerText += "Variant_3 - Answer: " + lastArrElem + '\n';


