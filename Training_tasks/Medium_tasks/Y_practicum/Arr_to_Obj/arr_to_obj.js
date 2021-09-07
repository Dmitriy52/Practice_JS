let result = document.getElementById('result');

const numbers = [1, 2, 3, 4, 5, 6];
let filterObj = {
  even: [],
  odd: []
};

separateArray(numbers);
  //Variant_1
function separateArray(array) {
  
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      filterObj.even.push(array[i]);
    }else{
      filterObj.odd.push(array[i]);
    }
  }
  result.innerText += "Variant_1 - Answer: " + "\n { \n" + " even: [" + filterObj.even + "]" + "\n odd: [" + filterObj.odd + "]" + '\n }';
  return filterObj;
}

filterObj.even = [];
filterObj.odd = [];

  //Variant_2
 numbers.forEach(element => {
   
   if(element % 2 == 0){
     filterObj.even.push(element);
   }else{
     filterObj.odd.push(element);
   } 
 });
result.innerText += "\n Variant_2 - Answer: " + "\n { \n" + " even: [" + filterObj.even + "]" + "\n odd: [" + filterObj.odd + "]" + '\n }';