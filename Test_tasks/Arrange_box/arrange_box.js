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

            //we use this cycle but we can copy properties or use others methods
            let countId = 0;
            for (let elem of mainArr.avalible) {
                countId++;
                elem = document.createElement("div");
                mainArr.firstContainer.appendChild(elem);
                elem.id = countId;
                elem.className = "containerElem";
                elem.innerHTML = mainArr.avalible[elem.id - 1];
            }
        }

        // put listener of mouse click on button for refresh divs
        mainArr.resetAll.addEventListener("click", refresh);

        //create function for copy createArrangeBox object
        function copyArr(){
           // let newArr = document.createElement('object');
            let newArr = Object.assign({},createArrangeBox);
            newArr.start(1)
        }
        // put listener of mouse click on button for copy main object
        mainArr.copyAll.addEventListener("click", copyArr);
    },
}
createArrangeBox.start(0);
