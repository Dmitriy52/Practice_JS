const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('post__wrapper');
let users = [];
let trueRegistratedDate;


function createUsersTable(data){
    return  `
                <div class="wrapper__post">
                    <div>
                        <h3>First name:</h3>
                        <span>${data.name.first}</span>
                    </div>
                    <div>
                        <h3>Last name:</h3>
                        <span>${data.name.last}</span>
                    </div>
                    <div>
                    <h5>Avatar:</h5>
                    <img src="${data.picture.thumbnail}""></div>
                    </div>
                    <div>
                        <h5>Location:</h5>
                         <span>${data.location.state}</span>
                         <span>${data.location.city}</span>
                    </div>
                    <div>
                        <h5>Email:</h5>
                        <span>${data.email}</span>
                    </div>
                    <div>
                        <h5>Phone:</h5>
                        <span>${data.phone}</span>
                    </div>
                    <div>
                        <h5>Registrated date:</h5>
                        <span>${trueRegistratedDate}</span>
                    </div>
                    <hr />
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