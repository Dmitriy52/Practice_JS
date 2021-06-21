const createObj = (str) => {

    const charObj = {};

    for (let char of str.replace(/[^\w]/g).toLowerCase()) {

        charObj[char] = charObj[char] + 1 || 1;
    }

    return charObj;
}
result = createObj("wordw");

console.log(result);

const anagramma = (word1, word2) => {
    word1 = document.getElementById('word1').value;
    word2 = document.getElementById('word2').value;
    result = document.getElementById('result');

    arr1 = createObj(word1);
    arr2 = createObj(word2);
    console.log(arr1);
    console.log(arr2);

    if (Object.keys(arr1).length !== Object.keys(arr2).length) {
        result.innerHTML = " не анаграмма ";
        return false;
    }
    for (let char2 in arr1) {
        if (arr1[char2] !== arr2[char2]) {
            result.innerHTML = " не анаграмма ";
            return false;
        }
    }
    result.innerHTML = " анаграмма ";
    return true;


}
