const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('post__wrapper');
let users = [];


function createUsersTable(data){
    return  `
                <div class="wrapper__post">
                    <div class="page">First name: ${data.name.first}</div>
                    <div class="per_page">Last name: ${data.name.last}</div>
                    <div class="total">Avatar: ${data.picture.thumbnail}</div>
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