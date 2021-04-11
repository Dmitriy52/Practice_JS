const chessBoard = () =>{
let result = document.getElementById('result');
result.innerHTML = "";
let count = 0;
    for (let i = 1; i <= 8; i++){
        let str = "#_#_#_#";
        ++count;
        if(i % 2 !== 0){
            str = count + " " + str + "_" + "<br \/>";
            result.innerHTML += str;
            console.log(str);
        }else{
            str = count + " " + "_" + str + "<br \/>";
            result.innerHTML += str;
                console.log(str);
            }
    }
}
