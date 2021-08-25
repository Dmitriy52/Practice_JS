const fibonacci = (num) => {

    num = document.getElementById('number').value;
    let result = document.getElementById('result');
    const arr = [0, 1];

    for (let i = 2; i <= num; i++) {

        const firstNum = arr[i - 1];
        const secondNum = arr[i - 2];

        arr.push(firstNum + secondNum);
    }
    result.innerHTML = "На " + num + " позиции находится число: " + arr[num];
}

    // Variant with Recursion
    const fibonacci2 = (num2) =>{
        if(num2 < 2){
            return num2;
        }
        //recursion here
        return fibonacci2(num2 - 1) + fibonacci2(num2 - 2);

    }
    let recursionResult = fibonacci2(3);
    console.log(recursionResult);