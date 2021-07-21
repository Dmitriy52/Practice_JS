const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('table_wrapper');
let users = [];
let fields = {
    first: '',
    last: ''
}; 
let trueRegistratedDate;


function createUsersTable(data,id){
    console.log(data.name.first.toLowerCase().split('').slice());
    return  `
  
                    <div class="table_content_div" data-name="first_name" data-id="${id}">
                            ${data.name.first}
                        </div>
                        <div class="table_content_div" data-name="second_name" data-id="${id}">
                            ${data.name.last}
                        </div>
                        <div data-id="${id}" data-name="elem">                       
                        <img src="${data.picture.thumbnail}" ></div>
                        <div data-id="${id}" data-name="elem">  
                            ${data.location.state}
                            ${data.location.city}
                        </div>
                        <div data-id="${id}" data-name="elem">                           
                            ${data.email}
                        </div>
                        <div data-id="${id}" data-name="elem">                          
                            ${data.phone}
                        </div>
                        <div data-id="${id}" data-name="elem">
                            ${trueRegistratedDate}
                        </div>
                    </div>
            `
}

function getPosts(url){
    let item_id = 0;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            users = json.results;
             users.forEach(user => {
                 let registratedDate = user.registered.date.split("", 10);
                 let year = [];
                 let month = [];
                 let day = [];
                 for(let i = 0; i <= registratedDate.length; i++){
                    if(i <= 3){
                        year.push(registratedDate[i]);
                    }
                    if(i == 5 || i == 6 ){
                        month.push(registratedDate[i]);
                    }
                    if( i == 8 || i == 9 ){
                        day.push(registratedDate[i]);
                     }
                 }
                 item_id++;
                 trueRegistratedDate = day.join("") + "." + month.join("") + "." + year.join("");
                 postWrapper.innerHTML +=createUsersTable(user,item_id);
             })
        })

}
getPosts(requestUrl);
 
//create table search
function tableSearch() {
    let found_id = "";
    let phrase = document.getElementById('search-text');
    let items = document.getElementsByClassName("table_content_div");
    let itemRows = postWrapper.getElementsByTagName("div");

    //main cycle
    for (let i = 0; i < items.length; i++) {

        // find current element and change display
        for (let item of items) {

            //get cell content
            let cell = item.innerHTML.trim().toLowerCase().split('').slice(0, phrase.value.length).join('');

            let id = item.getAttribute("data-id");
            //if not found
            if (((cell !== phrase.value.toLowerCase()) )&&(found_id!==id))  {
                // paint in red
                //item.style = 'background-color: white';
                item.style.display = 'none';
                for(elem of itemRows){
                    if(elem.getAttribute("data-name") == "elem" && elem.getAttribute("data-id") == id){
                        //elem.style = 'background-color: white';
                        elem.style.display = 'none';
                    }
                }
                
               //if found 
            }else if(phrase.value === ""){
                for(let item of items){
                    item.style.display = 'inline';
                }
                for(let elem of itemRows){
                    elem.style.display = 'inline';
                }

        }else{
                //item.style = 'background-color: #dbd02e';
                item.style.display = 'inline';
                found_id = item.getAttribute("data-id");
                    for(elem of itemRows){
                        
                        if(elem.getAttribute("data-id") == found_id){
                            console.log(id +"Я в цикле");
                            //elem.style = 'background-color: #dbd02e';
                            elem.style.display = 'inline';
                         }// else if(phrase.value === "") {
                        //     elem.style = 'background-color: white';
                        //     //elem.style.display = 'none';
                        // }
                    }
                console.log(id + item.innerHTML.trim().toLowerCase().split('').slice(phrase.value.length).join(''));
            }
        }
    }
}

//preloader
let images = document.images;
let imagesCount;
console.log(images);

setTimeout(function(){
    imagesCount = images.length;
    console.log(imagesCount);
    let imagesLoaded = 0;
let preloader = document.getElementById("preloaderWindow");
let percentDisplay = document.getElementById("percentsOfLoad");

 for(let i = 0; i < imagesCount; i++){
     let image_clone = new Image();
     image_clone.onload = imageLoadedCount;
     image_clone.onerror = imageLoadedCount;
     image_clone.src = images[i].src;
     console.log(i);
 }

 function imageLoadedCount(){
    imagesLoaded++;
    console.log(imagesLoaded);
    percentDisplay.innerHTML = (( (100 / imagesCount)*imagesLoaded) << 0)+ "%";
    if(imagesLoaded >= imagesCount){
        console.log("already");
        preloader.classList.add("preloader_done");
    }else{
        console.log("No");
    }
 }
},1000); 

