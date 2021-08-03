
window.addEventListener('load', () => {
    let app = new App('dbusr', 'users');
    app.db.load(app.tbl);
    app.create();
});
//create table search
function tableSearch() {
    let phrase = document.getElementById('search-text');
    let items = document.getElementsByClassName("cell-table");
    //main cycle
    for (let i = 0; i < items.length; i++) {

        // find current element and change background color
        for (let item of items) {
            if ((item.tagName !== "BUTTON" && item.getAttribute("data-field") !== "btn-wrp") && (item.innerHTML.toLowerCase().split('').slice(0, phrase.value.length).join('') !== phrase.value.toLowerCase() || phrase.value === "") && item.style.display !== "none") {
                item.style = 'background-color: #f3e6e6';
                
            } else if (item.tagName !== "BUTTON" && item.getAttribute("data-field") !== "btn-wrp" && item.style.display !== "none") {
                item.style = 'background-color: #dbd02e';
                console.log(item.innerHTML.toLowerCase().split('').slice(0, phrase.value.length).join(''));
            }
        }
    }
}
//create table filter

function filter() {
    let phrase = document.getElementById('search-text');
    phrase.value = "";
    let items = document.getElementsByClassName('cell-table');
    let id = "";
    //main cycle
    for (let i = 0; i < items.length; i++) {

        //find current element and change "display" property
        for (let item of items) {

            // correct after tableSearch()
            if (item.tagName !== "BUTTON" && item.getAttribute("data-field") !== "btn-wrp" && item.style.display !== "none") {
                item.style = 'background-color: #f3e6e6';
            }
            // work with element "display" property
            if (this.value === "Все") {
                item.style.display = 'inline';

            } else if (item.innerHTML.toLowerCase() !== this.value.toLowerCase()) {
                item.style.display = 'none';

            } else {
                item.style.display = 'inline';
                id = item.getAttribute("data-id");
            }
            //work with element`s rows "display" property
            for (let currentItem of items) {
                if (currentItem.getAttribute("data-id") === id) {
                    currentItem.style.display = 'inline';
                }
            }
        }
    }
};

// print table
function printDiv(divId) {
    let originalContents = document.body.innerHTML;
    let tableBlock = document.getElementById("id-table-block");
        //add style for print
      tableBlock.classList.remove("table-block");
      tableBlock.classList.add("print");
      //delete "buttons for delite row"
    let tableBlockElements = tableBlock.querySelectorAll("div");
        for(let delBtnsWrp of tableBlockElements){
            if(delBtnsWrp.getAttribute("data-field") === "btn-wrp"){
                delBtnsWrp.innerHTML = "";
            }
        }
        //get content for print
    let printContents = document.getElementById(divId).innerHTML;
        document.body.innerHTML = printContents;
            window.print();
        //going back our content
        document.body.innerHTML = originalContents;
            window.location.reload();
};


function validateInputs(){
    let parentOfInputs = document.querySelectorAll("input[data-rule]");
        //check values of inputs
        for(let addInput of parentOfInputs){
            if (addInput.value !== ""){
                addInput.classList.remove("empty-input");
            }else{
                addInput.classList.add("empty-input");
        }
        //add listener on inputs
        addInput.addEventListener("blur", function(){
             if (addInput.value !== ""){
                 addInput.classList.remove("empty-input");
             }else{
                 addInput.classList.add("empty-input");
         }
             });
        }
    }
        //scan inputs at this interval
      setInterval(function(addBtn) {
          addBtn = document.getElementById("add");

          addBtn.addEventListener("click", e => {
              if (e.target.id === "add"){
                  validateInputs();
              }
          })  
        }, 100);

let filter_select_el = document.getElementById('filter');
filter_select_el.addEventListener('change', filter);