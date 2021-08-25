
const triangle =(num) =>{

    num = document.getElementById('number').value;
    let result = document.getElementById('result');

    result.innerHTML = "";
    sharpArr = [];
    count = 0;

        for (let i = 0; i < num; i++) {

            sharpArr.push("#");
            ++count;
            result.innerHTML += (count + " " + sharpArr + "<br \/>");
        }
}
