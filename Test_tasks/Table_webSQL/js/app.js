
//create App object for work with table
function App(baseName, tableName) {
    this.db = new DataBase(baseName);
    this.tbl = tableName;
    this.fields = {
        adddate: document.querySelector('#add-date'),
        addnameOfProvider: document.querySelector('#add-nameOfProvider'),
        addwarehouse: document.querySelector('#add-warehouse'),
        addnameOfProduct: document.querySelector('#add-nameOfProduct'),
        addquantity: document.querySelector('#add-quantity'),
        addtotal: document.querySelector('#add-total')
    };
    this.btn = {
        addDefault: document.querySelector('#addDefault'),
        add: document.querySelector('#add'),
        clear: document.querySelector('#btnClear'),
        del: document.querySelector('.table')
    };
};
//create the table
App.prototype.create = function () {
    this.db.create(this.tbl);

    //create default rows
    this.btn.addDefault.addEventListener('click', e => {
        if (e.target.tagName == 'INPUT') {
            this.db.pushDefault(this.tbl);
            this.db.load(this.tbl);
            this.btn.addDefault.remove();
        }
    });
    // add modified rows
    this.btn.add.addEventListener('click', e => {
        
        if (e.target.tagName == 'INPUT') {
            let emptyInput;
            let check;

            if ((this.fields.adddate.value != '' && check !== false) && this.fields.addnameOfProvider.value != '' && this.fields.addwarehouse.value != '' && this.fields.addnameOfProduct.value != '' && this.fields.addquantity.value != '' && this.fields.addtotal.value != '') {
                this.db.add(this.tbl);
                this.db.load(this.tbl);
                for(let key in this.fields){
                    emptyInput = this.fields[key];
                    //emptyInput.classList.remove("empty-input");
                }

                //clear inputs
            for (const key in this.fields) {
                this.fields[key].value = '';
            }
            }else{
                  //check inputs
                for(let key in this.fields){
                if(this.fields[key].value === ""){
                   
                   for(let key in this.fields){
                           emptyInput = this.fields[key];
                           //emptyInput.classList.add("empty-input");
                        }
                    }
                }
            }  
        }
    });
    //clear the table
    this.btn.clear.addEventListener('click', e => {
        if (e.target.tagName == 'BUTTON') {
            this.db.clear(this.tbl);
        }
    });
    //delete current row
    this.btn.del.addEventListener('click', e => {
        if (e.target.tagName == 'BUTTON') {
            this.db.del(this.tbl, parseInt(e.target.getAttribute('data-id')));
            this.db.load(this.tbl);
        }
    });
    //find and focus on element for update
    this.btn.del.addEventListener('dblclick', e => {
        if (e.target.tagName == 'DIV') {
            e.target.setAttribute('contenteditable', 'true');
            e.target.focus();
        }
    });
    // add modified element
    this.btn.del.addEventListener('keydown', e => {
        if (e.target.tagName == 'DIV' && e.target.getAttribute('contenteditable') == 'true') {
            if (e.keyCode == 13) {
                e.target.setAttribute('contenteditable', 'false');
                let fld = e.target.getAttribute('data-field');
                let vle = e.target.innerText;
                let id = parseInt(e.target.getAttribute('data-id'));
                this.db.update(this.tbl, fld, vle, id);
            }
        }
    });
};
