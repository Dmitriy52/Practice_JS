const requestUrl = 'https://randomuser.me/api/?results=15';
const postWrapper = document.getElementById('table_wrapper');
let users = [];
let phrase = document.getElementById('search-text');
let images = document.images;
let imagesCount;
let trueRegistratedDate;
let tooltipImg;
let message = document.getElementById("noUsersMessage");

//create main contant for table with users
function createUsersTable(data, id) {
    return `
  
                    <div class="table_content_div" data-name="first_name" data-id="${id}">
                            ${data.name.first}
                        </div>
                        <div class="table_content_div" data-name="second_name" data-id="${id}">
                            ${data.name.last}
                        </div>
                        <div data-id="${id}" data-name="elem">
                            
                            <div data-id="${id}" data-name="elem">                      
                                <img class="table_avatar" src="${data.picture.thumbnail}" data-tooltip ="Avatar" >
                                <img class="table_tooltip" id="tooltip ${id}" src="${data.picture.medium}">
                            </div>
                        </div>
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
//work with JSON
function getPosts(url) {
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
                for (let i = 0; i <= registratedDate.length; i++) {
                    if (i <= 3) {
                        year.push(registratedDate[i]);
                    }
                    if (i == 5 || i == 6) {
                        month.push(registratedDate[i]);
                    }
                    if (i == 8 || i == 9) {
                        day.push(registratedDate[i]);
                    }
                }
                item_id++;
                trueRegistratedDate = day.join("") + "." + month.join("") + "." + year.join("");
                postWrapper.innerHTML += createUsersTable(user, item_id);
            })
        })

}
getPosts(requestUrl);

//create table search
function tableSearch() {
    let flagForNotFoundedUsers = false;
    let flagForFoundedUser = true;
    let found_id = "";
    let items = document.getElementsByClassName("table_content_div");
    let itemRows = postWrapper.getElementsByTagName("div");

    for (let i = 0; i < items.length; i++) {
        // find current element and change display
        for (let item of items) {
            let id = item.getAttribute("data-id");
            //get cell content
            let cell = "";
            //for get first name + last name
            for (let item of items) {
                if (item.getAttribute("data-id") == id) {
                    cell += item.innerHTML.trim().toLowerCase() + " ";
                }
            }
            //if not found
            if (((cell.split('').slice(0, phrase.value.length).join('') !== phrase.value.toLowerCase()) && (item.innerHTML.trim().toLowerCase().split('').slice(0, phrase.value.length).join('') !== phrase.value.toLowerCase())) && (found_id !== id)) {
                item.style.display = 'none';
                //work  with elements without (class="table_content_div")
                for (elem of itemRows) {
                    if (elem.getAttribute("data-name") == "elem" && elem.getAttribute("data-id") == id) {
                        elem.style.display = 'none';
                    }
                }
                flagForNotFoundedUsers = true;
            } else if (phrase.value === "") {
                for (let item of items) {
                    item.style.display = 'inline';
                }
                for (let elem of itemRows) {
                    elem.style.display = 'inline';
                }
                closeMessage();
                //if found 
            } else {
                item.style.display = 'inline';
                //work  with elements without (class="table_content_div")
                found_id = item.getAttribute("data-id");
                for (elem of itemRows) {
                    if (elem.getAttribute("data-id") == found_id) {
                        elem.style.display = 'inline';
                    }
                }
                flagForFoundedUser = false;
            }
        }
    }
    //open PopUp Message
    if (flagForNotFoundedUsers === true) {
        message.style.display = "inline";

    }
    //close PopUp Message if we found only one user or more
    if (flagForFoundedUser === false) {
        message.style.display = "none";
    }
}
//close PopUp Message and open Users Table 
//We can create new function for clear "Search Input" but use this function
function closeMessage() {
    message.style.display = "none";
    phrase.value = "";
    tableSearch();
}
//debounce
const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    };
}
tableSearch = debounce(tableSearch, 200);

//preloader
setTimeout(function () {
    imagesCount = images.length;
    let imagesLoaded = 0;
    let preloader = document.getElementById("preloaderWindow");
    let percentDisplay = document.getElementById("percentsOfLoad");

    for (let i = 0; i < imagesCount; i++) {
        let image_clone = new Image();
        image_clone.onload = imageLoadedCount;
        image_clone.onerror = imageLoadedCount;
        image_clone.src = images[i].src;
    }
    function imageLoadedCount() {
        imagesLoaded++;
        percentDisplay.innerHTML = (((100 / imagesCount) * imagesLoaded) << 0) + "%";
        if (imagesLoaded >= imagesCount) {
            preloader.classList.add("preloader_done");
        }
    }
}, 3000);

postWrapper.onmouseover = postWrapper.onmouseout = imgHover;

//create tooltip with medium image
function imgHover(e) {

    if ((e.target.classList.contains("table_avatar")) && (e.type == "mouseover")) {
        let avatarWrap = e.target.parentNode;
        let images = avatarWrap.getElementsByTagName("IMG");

        for (let img of images) {
            if (getComputedStyle(img).display == "none") {
                img.style.display = "inline";
                tooltipImg = img;
            }
        }
    }
    if ((e.type == "mouseout")) {
        tooltipImg.style.display = "none";
    }
}
