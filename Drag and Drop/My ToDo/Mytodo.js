const wrapper = document.querySelector('[data-name="mainContainer"]');
console.log(wrapper);

wrapper.addEventListener("click", (e) => {
    //ловим нажатие кнопки
    if(e.target.tagName === "BUTTON"){
        //полусаем название кнопки из атрибута "data-name"
        const { name } = e.target.dataset;
        // если была нажата кнопка добавить
        if(name === "add-btn"){
              // определяем поле для ввода названия задачи
            const nameOfTask = wrapper.querySelector('[data-name="task-name"]');
            const taskInput = wrapper.querySelector('[data-name="todo-input"]');
            //если поле не пустое работаем с ним
            if(taskInput.value.trim() !== ""){
                //получаем название задачи
                const taskName = nameOfTask.value;
                //получаем текст задачи
                const taskText = taskInput.value;
                const now = new Date().toLocaleDateString();
                //создаём шаблон задачи
                const template = `<li class="list-group-item" data-id="${Date.now()}" draggable="true">
                <h4>${taskName}</h4></n> 
                <p>${taskText}</p></n> 
                <p> Создана:</p>
                <p>${now}</p>
                <button class="but-del" data-name="remove-btn"> X </button> 
                </li>`;
                //находим список задач
                const todoList = wrapper.querySelector('[data-name="todos-list"]');
                //добавляем задачу
                todoList.insertAdjacentHTML("beforeend", template);
                //чистим поля ввода по задаче
                nameOfTask.value = "";
                taskInput.value = "";
            }

        } else if(name === "remove-btn"){
                //удаляем задачу
                e.target.parentElement.remove();
        }
    }
});

// wrapper.onmouseover = wrapper.onmouseout = taskHover;
// function taskHover(e){
//     if(e.target.classList.contains("list-group-item") && e.type == "mouseover"){
//         e.target.classList.add("list-group-item_hover");
//     }
//     if(e.target.classList.contains("list-group-item_hover") && e.type == "mouseout"){
//         e.target.classList.remove("list-group-item_hover");
//     }
// }

wrapper.addEventListener("dragenter", (e) => {
    //only for colomns
    if(e.target.classList.contains("list-group")){
        e.target.classList.add("drop");
        console.log("Dragenter works");
    }
});
wrapper.addEventListener("dragleave", (e) => {
    if(e.target.classList.contains("drop")){
        e.target.classList.remove("drop");
        console.log("Dragleave works")
    }
});
wrapper.addEventListener("dragstart", (e) => {
    //find the task
    if(e.target.classList.contains("list-group-item")){
        //save "id" in object - "dataTransfer"
        e.dataTransfer.setData("text/plain", e.target.dataset.id);
        console.log("Target.ID = " + e.dataTransfer.getData("text/plain") + " , Dragstart works");
        if(e.target.classList.contains("list-group-item_hover")){
            e.target.classList.remove("list-group-item_hover");
        }
    }
});
//variable for "lower" element
let elemBelow = "";
wrapper.addEventListener("dragover", (e) =>{
    //switch off standart of browser
    e.preventDefault();
    //e.target.classList.add("list-group-item");
    //put target elem in "elemBelow", later we will do validation
    elemBelow = e.target;
});
wrapper.addEventListener("drop", (e) => {
    //Find the current task by "id" in dataTransfer
    const todo = wrapper.querySelector(`[data-id="${e.dataTransfer.getData("text/plain")}"]`);
    console.log(todo);

    //check the current task and variable, they should be different
    if(elemBelow === todo){
        console.log("task and variable same");
        return;
    }
    //if the element is a "p" or a "button", we need their parent element
    if(elemBelow.tagName === "P" || elemBelow.tagName === "BUTTON"){
        elemBelow = elemBelow.parentElement;
    }
    //check that variable "elemBelow" equel to target task
    if(elemBelow.classList.contains("list-group-item")){
        //work with position of eltments
        const centerOfElem = 
        elemBelow.getBoundingClientRect().y +
        elemBelow.getBoundingClientRect().height / 2;
        if(e.clientY > centerOfElem){
            if(elemBelow.nextElementSibling !== null){
                elemBelow = elemBelow.nextElementSibling;
            }else{
                return;
            }
        }

    elemBelow.parentElement.insertBefore(todo, elemBelow);
       // рокировка элементов может происходить в разных колонках
        // необходимо убедиться, что задачи будут визуально идентичными
        todo.className = elemBelow.className;
    }
    // если целью является колонка
    if(e.target.classList.contains("list-group")){
        // просто добавляем в нее перетаскиваемый элемент
        // это приведет к автоматическому удалению элемента из "родной" колонки
        e.target.append(todo);
        if(e.target.classList.contains("drop")){
            e.target.classList.remove("drop");
        }
        // визуальное оформление задачи в зависимости от колонки, в которой она находится
        const { name } = e.target.dataset;

        if (name === "completed-list") {
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