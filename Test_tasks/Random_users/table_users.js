const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('wrapper');
let users = [];
let fields = {
    first: '',
    last: ''
}; 
let trueRegistratedDate;


function createUsersTable(data){
    return  `
  
                    <div>
                            ${data.name.first}
                        </div>
                        <div>
                            ${data.name.last}
                        </div>
                        <div>                       
                        <img src="${data.picture.thumbnail}" class="table_avatar"></div>
                        <div>  
                            ${data.location.state}
                            ${data.location.city}
                        </div>
                        <div>                           
                            ${data.email}
                        </div>
                        <div>                          
                            ${data.phone}
                        </div>
                        <div>
                            ${trueRegistratedDate}
                        </div>
                    </div>
            `
}

function getPosts(url){
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
                 trueRegistratedDate = day.join("") + "." + month.join("") + "." + year.join("");
                 postWrapper.innerHTML +=createUsersTable(user);
             })
        })

}
getPosts(requestUrl);

//users
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
},3000); 

