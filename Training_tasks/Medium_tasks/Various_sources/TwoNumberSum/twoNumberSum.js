// Сумма двух чисел
// Напишите функцию, которая принимает два аргумента: массив из уникальных целых чисел и сумму в виде целого числа.
// Если сумма двух любых чисел массива из аргумента равна числу, которое приходит вторым аргументом, функция должна вернуть новый массив из этих двух чисел в любом порядке.
// Если решения нет, вернуть пустой массив.
// Текущее число само с собой складывать нельзя.
//Пример входных данных:
// array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// На выходе:
// [-1, 11] или [11, -1], так как -1 + 11 = 10 = targetSum

// first variant
function twoNumberSumVar1(arr, targetSum) {
  for (let currentIndex = 0; currentIndex <= arr.length; currentIndex++) {
    let currentNumber = arr[currentIndex];
    for (
      let targetNumberIndex = currentIndex + 1;
      targetNumberIndex < arr.length;
      targetNumberIndex++
    ) {
      let targetCompareNumber = arr[targetNumberIndex];

      if (currentNumber + targetCompareNumber === targetSum) {
        return [currentNumber, targetCompareNumber];
      }
    }
  }
  return [];
}

// second variant
function twoNumberSumVar2(arr, targetSum) {
  const nums = {};

  for (let currentNumber of arr) {
    const potentialMatch = targetSum - currentNumber;
    if (potentialMatch in nums) {
      return [currentNumber, potentialMatch];
    } else {
      nums[currentNumber] = true;
    }
  }
  return [];
}

console.log(twoNumberSumVar1([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSumVar2([3, 5, -4, 8, 11, 1, -1, 6], 10));
