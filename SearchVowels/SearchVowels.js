const countLetters = (str) => {

    str = document.getElementById('text').value;

    let countVowels = 0;
    let countConsonant = 0;
    let result = document.getElementById('result');

    const engVowels = ['a', 'e', 'i', 'u', 'o'];
    const engConsonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
        'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
    const rusVowels = ['a', 'y', 'и', 'е', 'ё', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    const rusConsonant = ['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'];


    for (let char of str.toLowerCase()) {
        if (engVowels.includes(char) || rusVowels.includes(char)) {
            countVowels++;
        }
        if (engConsonant.includes(char) || rusConsonant.includes(char)) {
            countConsonant++;
        }
    }

    result.innerHTML = "В вашем слове " + countVowels + " гласных и " + countConsonant + " согласных!";
    console.log(countVowels);
    console.log(countConsonant);

}

