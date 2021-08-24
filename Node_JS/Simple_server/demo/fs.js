//File System
const fs = require('fs');
const path = require('path');

        //создаём папку
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err){
//         throw(err);
//     }
//     console.log("Папка создана");
    
// })

        //создаём файл и добавляем в него контекст
 const filePath = path.join(__dirname,'test','text.txt');
// fs.writeFile(filePath, 'Hello NodeJS', (err) => {
//     if(err){
//         throw(err);
//     }
//     console.log("Файл создан");

//         fs.appendFile(filePath, '\nHello from fs.js', (err) => {
//             if(err){
//                 throw(err);
//             }
//             console.log("Файл создан");
//         })
// })

//можем указать кодировку вторым параметром для преобразования объекта из буфера
//а можем как показано ниже в коде создав переменную data и преобразовав её к строке
fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err){
        throw(err);
    }
    console.log(content);
    //преобразуем объект из буфера в текст
    // const data = Buffer.from(content);
    // console.log("Content:", data.toString());

})