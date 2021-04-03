function palindrome(str) {
    str = document.getElementById("text").value;

    str = str.toLowerCase();

    let result;
    result = str === str.split('').reverse().join('');
    console.log(result);

    if (result === true){
        let answerMessage = document.getElementById('result');
        answerMessage.innerHTML = "Палиндром";
        answerMessage.style = "color:green";
    }else{
        let answerMessage = document.getElementById('result');
        answerMessage.innerHTML = "Не палиндром";
        answerMessage.style = "color:red";
    }

}





