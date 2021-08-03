const createArrangeBox = {

    start: function (flag) {

        const mainContainer = document.getElementById("mainContainer");

        //create mainArr, arrays "availible" & "selected", etc and fill containers
        const mainArr = {

            avalible: ["apple", "avocado", "banana", "papaya", "peach", "pear", "apricot", "bergamot"],

            selected: [],

            createContainers: function () {
                //create container1Wrap for convenience
                let container1Wrap = document.createElement("div");
                mainContainer.appendChild(container1Wrap);

                //create buttons here it is simple step
                let buttonsContainer = document.createElement("div");
                mainContainer.appendChild(buttonsContainer);
                buttonsContainer.className = "buttonContainer";

                let butRight = document.createElement("button");
                buttonsContainer.appendChild(butRight);
                butRight.className = "buttonCntnrElem";
                butRight.id = "right";
                butRight.textContent = " > ";
                this.right = butRight;

                let butLeft = document.createElement("button");
                buttonsContainer.appendChild(butLeft);
                butLeft.className = "buttonCntnrElem";
                butLeft.id = "left";
                butLeft.textContent = " < ";
                this.left = butLeft;

                let butRightAll = document.createElement("button");
                buttonsContainer.appendChild(butRightAll);
                butRightAll.className = "buttonCntnrElem";
                butRightAll.id = "rightAll";
                butRightAll.textContent = " >> ";
                this.rightAll = butRightAll;

                let butleftAll = document.createElement("button");
                buttonsContainer.appendChild(butleftAll);
                butleftAll.className = "buttonCntnrElem";
                butleftAll.id = "leftAll";
                butleftAll.textContent = " << ";
                this.leftAll = butleftAll;

                let butReset = document.createElement("button");
                buttonsContainer.appendChild(butReset);
                butReset.className = "buttonCntnrElem";
                butReset.id = "reset";
                butReset.textContent = "Reset";
                this.resetAll = butReset;

                let butCopy = document.createElement("button");
                buttonsContainer.appendChild(butCopy);
                butCopy.className = "buttonCopyObj";
                butCopy.id = "copy";
                butCopy.textContent = "CopyObject";
                this.copyAll = butCopy;

                //create container2Wrap for convenience
                let container2Wrap = document.createElement("div");
                mainContainer.appendChild(container2Wrap);

                //create divs with search inputs
                let firstSearchDiv = document.createElement("div");
                container1Wrap.appendChild(firstSearchDiv);

                let secondSearchDiv = document.createElement("div");
                container2Wrap.appendChild(secondSearchDiv);

                //create search inputs
                let firstSearchInp = document.createElement("input");
                firstSearchDiv.appendChild(firstSearchInp);
                firstSearchInp.className = "search";
                firstSearchInp.type = "text";
                firstSearchInp.placeholder = "What to look for?";

                let secondSearchInp = document.createElement("input");
                secondSearchDiv.appendChild(secondSearchInp);
                secondSearchInp.className = "search";
                secondSearchInp.type = "text";
                secondSearchInp.placeholder = "What to look for?";

                // create container for avalible elements
                let container1 = document.createElement("div");
                container1Wrap.appendChild(container1);
                container1.className = "container";
                container1.id = "cont1";

                // create container for selected elements
                let container2 = document.createElement("div");
                container2Wrap.appendChild(container2);
                container2.className = "container";
                container2.id = "cont2";
                container2.draggable = true;



                //create button for delete elements in 1st container
                let but1stContDelElem = document.createElement("button");
                container1Wrap.appendChild(but1stContDelElem);
                but1stContDelElem.className = "buttonCntnrElem";
                but1stContDelElem.id = "delete";
                but1stContDelElem.style.height = "25px";
                but1stContDelElem.style.width = "13%";
                but1stContDelElem.style.margin = "5px";
                but1stContDelElem.textContent = "Delete";
                this.del1stContElem = but1stContDelElem;

                //create button for delete elements in 2ns container
                let but2ndContDelElem = document.createElement("button");
                container2Wrap.appendChild(but2ndContDelElem);
                but2ndContDelElem.className = "buttonCntnrElem";
                but2ndContDelElem.id = "delete";
                but2ndContDelElem.style.height = "25px";
                but2ndContDelElem.style.width = "13%";
                but2ndContDelElem.style.margin = "5px";
                but2ndContDelElem.style.marginLeft = "20px";
                but2ndContDelElem.textContent = "Delete";
                this.del2ndContElem = but2ndContDelElem;


                let butForAdd = document.createElement("button");
                container1Wrap.appendChild(butForAdd);
                butForAdd.className = "buttonCntnrElem";
                butForAdd.id = "add";
                butForAdd.style.height = "25px";
                butForAdd.style.width = "10%";
                butForAdd.style.marginLeft = "30px";
                butForAdd.textContent = "Add";
                this.addElem = butForAdd;

                let inputForAdd = document.createElement("input");
                container1Wrap.appendChild(inputForAdd);
                inputForAdd.type = "text";
                inputForAdd.id = "addInp";
                inputForAdd.placeholder = "fruit";
                this.addInput = inputForAdd;

                let butCatchCurrentValue = document.createElement("button");
                container1Wrap.appendChild(butCatchCurrentValue);
                butCatchCurrentValue.className = "buttonCntnrElem";
                butCatchCurrentValue.id = "currtBut";
                butCatchCurrentValue.style.height = "25px";
                butCatchCurrentValue.style.width = "15%";
                butCatchCurrentValue.style.marginLeft = "20px";
                butCatchCurrentValue.textContent = "Current value";
                this.currentBut = butCatchCurrentValue;

                let contForCurrValue = document.createElement("div");
                container1Wrap.appendChild(contForCurrValue);
                contForCurrValue.style.display = "inline";
                contForCurrValue.style.margin = "10px";
                this.currentElem = contForCurrValue;


                let butForGetSelectedList = document.createElement("button");
                container2Wrap.appendChild(butForGetSelectedList);
                butForGetSelectedList.className = "buttonCntnrElem";
                butForGetSelectedList.id = "curtBut";
                butForGetSelectedList.style.height = "25px";
                butForGetSelectedList.style.width = "15%";
                butForGetSelectedList.style.marginLeft = "30px";
                butForGetSelectedList.textContent = "Selected list";
                this.selectedBut = butForGetSelectedList;

                let contFoSelectedList = document.createElement("div");
                container2Wrap.appendChild(contFoSelectedList);
                this.selectedList = contFoSelectedList

                //fill container1 with avalible elements
                if(flag === 0){
                    let countId = 0;
                    for (let elem of this.avalible) {
                        countId++;
                        elem = document.createElement("div");
                        container1.appendChild(elem);
                        elem.id = countId;
                        elem.className = "containerElem";
                        elem.innerHTML = this.avalible[elem.id - 1];// [elem.id - 1] because id != avalible.indexOf(elem)
                    }
                  //fill container 1 with random avalible elements
                } else if(flag === 1){
                    let countId = 0;
                    for (let elem of this.avalible) {
                        countId++;
                        elem = document.createElement("div");
                        container1.appendChild(elem);
                        elem.id = countId;
                        elem.className = "containerElem";
                        elem.innerHTML = this.avalible[elem.id - 1];// [elem.id - 1] because id != avalible.indexOf(elem)
                    }
                    //random swap divs in container1
                    let frag = document.createDocumentFragment();
                    while (container1.children.length){
                        frag.appendChild(container1.children[Math.floor(Math.random() * container1.children.length)]);
                    }
                    container1.appendChild(frag);
                }


                //create properties firstContainer & secondContainer & secondSearchDiv in mainArr for convenience
                this.firstContainer = container1;
                this.secondContainer = container2;
                this.firstSrcInp = firstSearchInp;
                this.secondSrcInp = secondSearchInp;
            },
        }

        //run createContainers
        mainArr.createContainers();

//create function for catch mouse click
        function handleClick(event) {
            if (event.target.classList.contains("containerElem")) {
                event.target.classList.toggle("active");

                const catched = mainArr.selected.find((item) => Number(item.id) === Number(event.target.dataset.id));

                if (catched) {
                    mainArr.selected = mainArr.selected.filter((item) => Number(item.id) !== Number(event.target.dataset.id));
                } else {
                    mainArr.selected.push(event.target);
                }
            }
        }

        //put listeners of mouse click on containers
        mainArr.firstContainer.addEventListener("click", handleClick);
        mainArr.secondContainer.addEventListener("click", handleClick);

        //create function for move elements, work with Events.
        //This function has problems with selected elements. It will be corrected later
        function handleMove(event) {
            const target = event.target.getAttribute('id');
            if (target === mainArr.right.id) {
                for (let item of mainArr.selected) {
                    if (item.parentElement === mainArr.firstContainer) {
                        mainArr.secondContainer.appendChild(mainArr.firstContainer.removeChild(item));
                        item.classList.toggle("active");
                    }
                }
                mainArr.selected = [];

            } else if (target === mainArr.leftAll.id) {
                Array.from(mainArr.secondContainer.querySelectorAll(".containerElem")).forEach((item) => {
                    mainArr.firstContainer.appendChild(mainArr.secondContainer.removeChild(item));
                    item.classList.remove("active");
                });
                mainArr.selected = [];
            } else if (target === mainArr.rightAll.id) {
                Array.from(mainArr.firstContainer.querySelectorAll(".containerElem")).forEach((item) => {
                    mainArr.secondContainer.appendChild(mainArr.firstContainer.removeChild(item));
                    item.classList.remove("active");
                });
                mainArr.selected = [];
            } else if (target === mainArr.left.id) {
                mainArr.selected.forEach((item) => {
                    if (item.parentElement === mainArr.secondContainer) {
                        mainArr.firstContainer.appendChild(mainArr.secondContainer.removeChild(item));
                        item.classList.remove("active");
                    }
                });
                mainArr.selected = [];
            }
        }

        //put listeners of mouse click on buttons
        mainArr.left.addEventListener("click", handleMove);
        mainArr.right.addEventListener("click", handleMove);
        mainArr.leftAll.addEventListener("click", handleMove);
        mainArr.rightAll.addEventListener("click", handleMove);

        //create function for search in 1-st container & put listener of keyUp on search input
        mainArr.firstSrcInp.onkeyup = function () {
            let items = mainArr.firstContainer.getElementsByClassName("containerElem");
            for (let i = 0; i < items.length; i++) {
                for (let item of items) {
                    if (item.innerHTML.toLowerCase().split('').slice(0, mainArr.firstSrcInp.value.length).join('') !== mainArr.firstSrcInp.value.toLowerCase()) {
                        item.style.display = 'none';
                    } else if (item.style.display !== 'block') {
                        item.style.display = 'block';
                    }
                }
            }
        }
        //create function for search in 2-nd container & put listener of keyUp on search input
        mainArr.secondSrcInp.onkeyup = function () {
            let items = mainArr.secondContainer.getElementsByClassName("containerElem");
            for (let i = 0; i < items.length; i++) {
                for (let item of items) {
                    if (item.innerHTML.toLowerCase().split('').slice(0, mainArr.secondSrcInp.value.length).join('') !== mainArr.secondSrcInp.value.toLowerCase()) {
                        item.style.display = 'none';
                    } else if (item.style.display !== 'block') {
                        item.style.display = 'block';
                    }
                }
            }
        }

        function refresh() {
            //we can use this cycle for clean containers
            while (mainArr.secondContainer.firstChild) {
                mainArr.secondContainer.removeChild(mainArr.secondContainer.firstChild);
            }
            //or we can use this cycle for clean containers
            mainArr.firstContainer.innerHTML = "";
            //clean different divs
            mainArr.selectedList.innerHTML = "";
            mainArr.currentElem.innerHTML = "";
            mainArr.selected = [];

            //we use this cycle but we can copy properties or use others methods
            let countId = 0;
            for (let elem of mainArr.avalible) {
                countId++;
                elem = document.createElement("div");
                mainArr.firstContainer.appendChild(elem);
                elem.id = countId;
                elem.draggable = "true";
                elem.className = "containerElem";
                elem.innerHTML = mainArr.avalible[elem.id - 1];
            }
        }

        // put listener of mouse click on button for refresh divs
        mainArr.resetAll.addEventListener("click", refresh);

        //create drag.drop
        //work with first container
      function dragAndDrop1stCont (){

          const containerWithElem = mainArr.secondContainer;
          const elements = mainArr.secondContainer.childNodes;

          for (const elem of elements) {
              elem.draggable = true;
          }

          containerWithElem.addEventListener(`dragstart`, (evt) => {
              evt.target.classList.add(`selected`);
          })

          containerWithElem.addEventListener(`dragend`, (evt) => {
              evt.target.classList.remove(`selected`);
          });

          containerWithElem.addEventListener(`dragover`, (evt) => {
              // Разрешаем сбрасывать элементы в эту область
              evt.preventDefault();

              // Находим перемещаемый элемент
              const activeElement = containerWithElem.querySelector(`.selected`);
              // Находим элемент, над которым в данный момент находится курсор
              const currentElement = evt.target;
              // Проверяем, что событие сработало:
              // 1. не на том элементе, который мы перемещаем,
              // 2. именно на элементе списка
              const isMoveable = activeElement !== currentElement &&
                  currentElement.classList.contains(`containerElem`);

              // Если нет, прерываем выполнение функции
              if (!isMoveable) {
                  return;
              }

              // Находим элемент, перед которым будем вставлять
              const nextElement = (currentElement === activeElement.nextElementSibling) ?
                  currentElement.nextElementSibling :
                  currentElement;

              // Вставляем activeElement перед nextElement
              containerWithElem.insertBefore(activeElement, nextElement);
          });

          const getNextElement = (cursorPosition, currentElement) => {
              // Получаем объект с размерами и координатами
              const currentElementCoord = currentElement.getBoundingClientRect();
              // Находим вертикальную координату центра текущего элемента
              const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

              // Если курсор выше центра элемента, возвращаем текущий элемент
              // В ином случае — следующий DOM-элемент
              const nextElement = (cursorPosition < currentElementCenter) ?
                  currentElement :
                  currentElement.nextElementSibling;

              return nextElement;
          };

          containerWithElem.addEventListener(`dragover`, (evt) => {
              evt.preventDefault();

              const activeElement = containerWithElem.querySelector(`.selected`);
              const currentElement = evt.target;
              const isMoveable = activeElement !== currentElement &&
                  currentElement.classList.contains(`containerElem`);

              if (!isMoveable) {
                  return;
              }

              // evt.clientY — вертикальная координата курсора в момент,
              // когда сработало событие
              const nextElement = getNextElement(evt.clientY, currentElement);

              // Проверяем, нужно ли менять элементы местами
              if (
                  nextElement &&
                  activeElement === nextElement.previousElementSibling ||
                  activeElement === nextElement
              ) {
                  // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
                  return;
              }

              containerWithElem.insertBefore(activeElement, nextElement);
          });

      }

        //work with second container
        function dragAndDrop2ndCont (){

            const containerWithElem = mainArr.firstContainer;
            const elements = mainArr.firstContainer.childNodes;

            for (const elem of elements) {
                elem.draggable = true;
            }

            containerWithElem.addEventListener(`dragstart`, (evt) => {
                evt.target.classList.add(`selected`);
            })

            containerWithElem.addEventListener(`dragend`, (evt) => {
                evt.target.classList.remove(`selected`);
            });

            containerWithElem.addEventListener(`dragover`, (evt) => {
                // Разрешаем сбрасывать элементы в эту область
                evt.preventDefault();

                // Находим перемещаемый элемент
                const activeElement = containerWithElem.querySelector(`.selected`);
                // Находим элемент, над которым в данный момент находится курсор
                const currentElement = evt.target;
                // Проверяем, что событие сработало:
                // 1. не на том элементе, который мы перемещаем,
                // 2. именно на элементе списка
                const isMoveable = activeElement !== currentElement &&
                    currentElement.classList.contains(`containerElem`);

                // Если нет, прерываем выполнение функции
                if (!isMoveable) {
                    return;
                }

                // Находим элемент, перед которым будем вставлять
                const nextElement = (currentElement === activeElement.nextElementSibling) ?
                    currentElement.nextElementSibling :
                    currentElement;

                // Вставляем activeElement перед nextElement
                containerWithElem.insertBefore(activeElement, nextElement);
            });

            const getNextElement = (cursorPosition, currentElement) => {
                // Получаем объект с размерами и координатами
                const currentElementCoord = currentElement.getBoundingClientRect();
                // Находим вертикальную координату центра текущего элемента
                const currentElementCenter = currentElementCoord.y + currentElementCoord.height / 2;

                // Если курсор выше центра элемента, возвращаем текущий элемент
                // В ином случае — следующий DOM-элемент
                const nextElement = (cursorPosition < currentElementCenter) ?
                    currentElement :
                    currentElement.nextElementSibling;

                return nextElement;
            };

            containerWithElem.addEventListener(`dragover`, (evt) => {
                evt.preventDefault();

                const activeElement = containerWithElem.querySelector(`.selected`);
                const currentElement = evt.target;
                const isMoveable = activeElement !== currentElement &&
                    currentElement.classList.contains(`containerElem`);

                if (!isMoveable) {
                    return;
                }

                // evt.clientY — вертикальная координата курсора в момент,
                // когда сработало событие
                const nextElement = getNextElement(evt.clientY, currentElement);

                // Проверяем, нужно ли менять элементы местами
                if (
                    nextElement &&
                    activeElement === nextElement.previousElementSibling ||
                    activeElement === nextElement
                ) {
                    // Если нет, выходим из функции, чтобы избежать лишних изменений в DOM
                    return;
                }

                containerWithElem.insertBefore(activeElement, nextElement);
            });

        }
        dragAndDrop1stCont();
        dragAndDrop2ndCont();

        // setInterval(function(){
        //
        //     let selectedArr = mainArr.selected.map(function(item,elem){
        //         return item;
        //     });
        //         console.log(selectedArr);
        // },100);
        function delete1stContElements() {

            //get collection children of mainArr.firstContainer
            let container1 = mainArr.firstContainer.children;
            //create arr of container1 collection
            container1 = Array.prototype.slice.call(container1);
            //get collection of active elements
            let selectedElements = document.querySelectorAll(".active");
            //create arr of selectedElements collection
            selectedElements = Array.prototype.slice.call(selectedElements);
            // delete selected element
            for (let elem of selectedElements) {
                for (let child of container1) {
                    if (elem.id === child.id) {
                        mainArr.firstContainer.removeChild(child);
                    }
                }
            }
        }

        function delete2ndContElements() {

            //get collection children of mainArr.secondContainer
            let container2 = mainArr.secondContainer.children;
            //create arr of container2 collection
            container2 = Array.prototype.slice.call(container2);
            //get collection of active elements
            let selectedElements = document.querySelectorAll(".active");
            //create arr of selectedElements collection
            selectedElements = Array.prototype.slice.call(selectedElements);
            // delete selected element
            for (let elem of selectedElements) {
                for (let child of container2) {
                    if (elem.id === child.id) {
                        mainArr.secondContainer.removeChild(child);
                    }
                }
            }
        }
        mainArr.del1stContElem.addEventListener("click", delete1stContElements);
        mainArr.del2ndContElem.addEventListener("click", delete2ndContElements);

        //create function for add elements
        function addElement(){

           let inputValue = mainArr.addInput.value;
           if(inputValue !== ""){
               inputValue = inputValue.toLowerCase();

               //get collection children of mainArr.firstContainer
               let container1 = mainArr.firstContainer.children;
               //create arr of container1 collection
               container1 = Array.prototype.slice.call(container1);
               //create arr with id of all containers elements
               let containerElemId = [];
               //get elements id in 1st container
               for (let child of container1) {
                   containerElemId.push(child.id);
               }

               //get collection children of mainArr.secondContainer
               let container2 = mainArr.secondContainer.children;
               //create arr of container2 collection
               container2 = Array.prototype.slice.call(container2);
               //get elements id in 2nd container
               for (let child of container2) {
                   containerElemId.push(child.id);
               }
               //create new element in 1st (avalible) container
               let elem = document.createElement("div");
               mainArr.firstContainer.appendChild(elem);
               elem.id = [Math.floor(Math.random() * (10 * 8 - 1) + 1)];
               elem.className = "containerElem";
               elem.innerHTML = inputValue;
               elem.draggable = "true";

               //check id for this element
               for (let item of containerElemId){

                   if (elem.id === item){
                       elem.id = [Math.floor(Math.random() * (897 * 8 - 1) + 1)];
                   }

               }

           }
            mainArr.addInput.value = "";
        }

        mainArr.addElem.addEventListener("click", addElement);

        function getSelectedList(){
            //get collection of active elements
            let selectedElements = document.querySelectorAll(".active");
            //create arr of selectedElements collection
            selectedElements = Array.prototype.slice.call(selectedElements);
            mainArr.selectedList.innerHTML = "List of selected elements: ";
            //sort arr for get element textContent
            let selectedElems = selectedElements.map(function (elem,index){
                mainArr.selectedList.innerHTML += elem.textContent + ", ";
                return elem.textContent;
            });
        }
        mainArr.selectedBut.addEventListener("click", getSelectedList);

        //create function for get current element
         function getCurrentElement(){

             mainArr.currentElem.innerHTML = "";
             mainArr.currentElem.innerHTML = "Current/last target element value: ";
             //get collection of active elements
             let selectedElements = document.querySelectorAll(".active");
             //create arr of selectedElements collection
             selectedElements = Array.prototype.slice.call(selectedElements);

                //catch current element textContent
             if (selectedElements.length === 1){
                 let selectedElems = selectedElements.map(function (elem,index){
                    console.log(elem.textContent);
                    mainArr.currentElem.innerHTML += elem.textContent;
                     return elem.textContent;
                 });
             } else {
              let currentElement = mainArr.selected[mainArr.selected.length - 1];
                 mainArr.currentElem.innerHTML += currentElement.textContent;
              console.log(currentElement.textContent);
            }
         }
         mainArr.currentBut.addEventListener("click", getCurrentElement);

        //create function for copy createArrangeBox object
        function copyArr(){
           // let newArr = document.createElement('object');
            let newArr = Object.assign({},createArrangeBox);
            newArr.start(1);
        }
        // put listener of mouse click on button for copy main object
        mainArr.copyAll.addEventListener("click", copyArr);
    },
}
createArrangeBox.start(0);
