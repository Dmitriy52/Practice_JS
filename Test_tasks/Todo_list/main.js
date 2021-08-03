const wrapper = document.querySelector('[data-name="mainContainer"]');
//18
wrapper.addEventListener("click", (e) => {
    //ловим нажатие кнопки
    if (e.target.tagName === "BUTTON") {
        //полусаем название кнопки из атрибута "data-name"
        const { name } = e.target.dataset;
        // если была нажата кнопка добавить
        if (name === "add-btn") {
            validateInputs();
            // определяем поле для ввода названия задачи
            const nameOfTask = wrapper.querySelector('[data-name="task-name"]');
            const taskInput = wrapper.querySelector('[data-name="todo-input"]');
            //если поле не пустое работаем с ним
            if (nameOfTask.value.trim() !== "" && taskInput.value.trim() !== "") {
                //получаем название задачи
                const taskName = nameOfTask.value;
                //получаем текст задачи
                const taskText = taskInput.value;
                const now = new Date().toLocaleDateString();
                //создаём шаблон задачи
                const template =
                    `<li class="list-group-item" data-id="${Date.now()}" draggable="true">
                <h4>${taskName}</h4></n> 
                <p>${taskText}</p></n>
                <div> 
                    <p> Создана:</p>
                    <p>${now}</p>
                    <span>Завершена:</span>
                    <span></span>
                </div>
                <button class="list-group-item-btn-del" data-name="remove-btn"> X </button> 
                </li>`;
                //находим список задач
                const todoList = wrapper.querySelector('[data-name="todos-list"]');
                //добавляем задачу
                todoList.insertAdjacentHTML("beforeend", template);
                // проверяем длинну слов в тексте задачи 
                // и изменяем при необходимости стиль переноса строки
                let checkArr = taskText.split(" ");
                checkArr.map(function(word){
                    if (word.length > 17){
                        console.log(word + "Это слово слишком длинное");
                        // получаем data-id элемента с длинным словом
                        let dataIdOfElem = template.split(" ").find(function(elem){
                            return elem.includes("data-id");
                        });
                        //находим елемент по data-id
                        let task = todoList.querySelector(`[${dataIdOfElem}]`);
                        task.style.wordBreak = "break-all";
                    }
                })
                //чистим поля ввода по задаче
                nameOfTask.value = "";
                taskInput.value = "";
            }
        } else if (name === "remove-btn") {
            //удаляем задачу
            e.target.parentElement.remove();
          }
    }
});

wrapper.onmouseover = wrapper.onmouseout = taskHover;
function taskHover(e) {
    if (e.target.classList.contains("list-group-item") && e.type == "mouseover") {
        e.target.classList.add("list-group-item_hover");
    }
    if (e.target.classList.contains("list-group-item_hover") && e.type == "mouseout") {
        e.target.classList.remove("list-group-item_hover");
    }
}

wrapper.addEventListener("dragenter", (e) => {
    //only for colomns
    if (e.target.classList.contains("list-group")) {
        e.target.classList.add("drop");
    }
});
wrapper.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("drop")) {
        e.target.classList.remove("drop");
    }
});
wrapper.addEventListener("dragstart", (e) => {
    //find the task
    if (e.target.classList.contains("list-group-item")) {
        //save "id" in object - "dataTransfer"
        e.dataTransfer.setData("text/plain", e.target.dataset.id);
        if (e.target.classList.contains("list-group-item_hover")) {
            e.target.classList.remove("list-group-item_hover");
        }
    }
});
//variable for "lower" element
let elemBelow = "";
wrapper.addEventListener("dragover", (e) => {
    //switch off standart of browser
    e.preventDefault();
    //e.target.classList.add("list-group-item");
    //put target elem in "elemBelow", later we will do validation
    elemBelow = e.target;
});
wrapper.addEventListener("drop", (e) => {
    //Find the current task by "id" in dataTransfer
    const todo = wrapper.querySelector(`[data-id="${e.dataTransfer.getData("text/plain")}"]`);

    //check the current task and variable, they should be different
    if (elemBelow === todo) {
        return;
    }
    //if the element is a "p" or a "button" etc , we need their parent element
    if (elemBelow.tagName === "P" || elemBelow.tagName === "BUTTON" || elemBelow.tagName === "DIV" || elemBelow.tagName === "H4") {
        elemBelow = elemBelow.parentElement;
    }
    //check that variable "elemBelow" equel to target task
    if (elemBelow.classList.contains("list-group-item")) {
        //work with position of eltments
        const centerOfElem =
            elemBelow.getBoundingClientRect().y +
            elemBelow.getBoundingClientRect().height / 2;
        if (e.clientY > centerOfElem) {
            if (elemBelow.nextElementSibling !== null) {
                elemBelow = elemBelow.nextElementSibling;
            } else {
                return;
            }
        }

        elemBelow.parentElement.insertBefore(todo, elemBelow);
        // рокировка элементов может происходить в разных колонках
        // необходимо убедиться, что задачи будут визуально идентичными
        todo.className = elemBelow.className;
    }
    // если целью является колонка
    if (e.target.classList.contains("list-group")) {
        // просто добавляем в нее перетаскиваемый элемент
        // это приведет к автоматическому удалению элемента из "родной" колонки
        e.target.append(todo);
        if (e.target.classList.contains("drop")) {
            e.target.classList.remove("drop");
        }
        // визуальное оформление задачи в зависимости от колонки, в которой она находится
        const { name } = e.target.dataset;
        if (name === "completed-list") {
            const completedDate = new Date().toLocaleDateString();
            let CompleteDateSpan = todo.getElementsByTagName("span");
            CompleteDateSpan[1].innerHTML = completedDate;
            if (todo.classList.contains("in-progress")) {
                todo.classList.remove("in-progress");
            }
            todo.classList.add("completed");
        } else if (name === "in-progress-list") {
            if (todo.classList.contains("completed")) {
                todo.classList.remove("completed");
            }
            todo.classList.add("in-progress");
        } else {
            todo.className = "list-group-item";
        }
    }
});

function validateInputs(){
    let parentOfInputs = document.querySelectorAll("[data-rule]");
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