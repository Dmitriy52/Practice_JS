const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('post__wrapper');
let users = [];


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
                    <img src="${data.picture.thumbnail}"></div>
                    </div>
            `
}

function getPosts(url){
    fetch(url)
        .then(response => response.json())
        .then(json => {
            users = json.results;
            console.log(users);
             users.forEach(user => {
                 console.log(user);
                 postWrapper.innerHTML +=createUsersTable(user);
             })
        })
}

getPosts(requestUrl);