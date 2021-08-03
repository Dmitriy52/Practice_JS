//create Database
function DataBase(name) {
    this.dbName = name;
    this.ucDbName = this.dbName = this.dbName[0].toUpperCase() + this.dbName.substring(1);
    this.db = openDatabase(this.dbName, '1.0', this.ucDbName, 100 * 1024 * 1024);
}

//create the table
DataBase.prototype.create = function (name) {
    let strFields = '';
    let fields = {
        date: 'TEXT',
        nameOfProvider: 'TEXT',
        warehouse: 'TEXT',
        nameOfProduct: 'TEXT',
        quantity: 'TEXT',
        total: 'TEXT'
    }

    for (const key in fields) {
        strFields += ", " + key + ' ' + fields[key];
    }

    this.db.transaction(function (tx) {
        tx.executeSql('create table if not exists ' + name + '(id integer primary key autoincrement' + strFields + ')');
    });
};

// add new rows by user
DataBase.prototype.add = function (name) {
    let q = new Array();
    let vars = new Array();
    let vals = new Array();
    let values = {
        date: document.getElementById('add-date').value,
        nameOfProvider: document.getElementById('add-nameOfProvider').value,
        warehouse: document.getElementById('add-warehouse').value,
        nameOfProduct: document.getElementById('add-nameOfProduct').value,
        quantity: document.getElementById('add-quantity').value,
        total: document.getElementById('add-total').value
    }
    let changeDateValue = values.date.split("");
    for(let elem of changeDateValue){
        if(elem == "-"){
            id = changeDateValue.indexOf(elem);
            changeDateValue[id] = ".";
        }
    }
    let year = [];
    let month = []; 
    let day = [];

    for( let i = 0; i <= changeDateValue.length; i++){
        if( i <= 3 ){
            year.push(changeDateValue[i]);
         }
        if( i == 5 || i == 6 ){
            month.push(changeDateValue[i]);
         }
        if( i == 8 || i == 9 ){
            day.push(changeDateValue[i]);
         }
    }

    changeDateValue = day.join("") + "." + month.join("") + "." + year.join("");

        //we need validate only the year, because in date or month "input date" has not mistake
        let check;
        let startDate = ["1990"];
        let endDate = ["2030"];

        if ((startDate[0] < year.join("")) && (year.join("") < endDate[0])) {
            check = true;
            } else {
                check = false;
            }
            //without cicle we have mistake
    for(let i = 0; i < 1; i++){
        if(check === true){
            values.date = changeDateValue;
                
            for (let i = 0; i < Object.keys(values).length; i++) {
                q.push('?');
            }
            
            for (const key in values) {
                vars.push(key);
            }
            
            for (const key in values) {
                vals.push(values[key]);
            }
        
            this.db.transaction(function (tx) {
                tx.executeSql('insert into ' + name + '(' + vars.join(", ") + ') values(' + q.join(", ") + ')', vals);
            });
            }else{
                alert("Введена некорректная дата! Введите дату в диапазоне между 1991г. и 2029г.");
            }
        }

};

//add default rows
DataBase.prototype.pushDefault = function (name) {


    let valuesArr = [
        {
            date: "12.09.2021",
            nameOfProvider: "BMW",
            warehouse: "Основной",
            nameOfProduct: "Двигатель",
            quantity: "1",
            total: "50000"
        },

        {
            date: "10.11.2020",
            nameOfProvider: "Audi",
            warehouse: "Запасной",
            nameOfProduct: "Свечи",
            quantity: "6",
            total: "3000"
        },

        {
            date: "09.03.2021",
            nameOfProvider: "Lada",
            warehouse: "Основной",
            nameOfProduct: "Катушка",
            quantity: "3",
            total: "1500"
        }
    ];

    for (let values of valuesArr) {
        console.log(values);
        let q = new Array();
        let vars = new Array();
        let vals = new Array();


        for (let i = 0; i < Object.values(values).length; i++) {
            q.push('?');
        }

        for (const key in values) {
            vars.push(key);
        }

        for (const key in values) {
            vals.push(values[key]);
        }
        this.db.transaction(function (tx) {
            tx.executeSql('insert into ' + name + '(' + vars.join(", ") + ') values(' + q.join(", ") + ')', vals);
        });

    }

};

//load the table
DataBase.prototype.load = function (name) {

    let sql = `select * from ${name}`;
    document.querySelector('.table').innerHTML = '';
    this.db.transaction(function (tx) {
        tx.executeSql(sql, [], function (tx, result) {
            let n = result.rows.length;
            for (let i = 0; i < n; i++) {
                let work = result.rows.item(i);
                let tbl_block = document.querySelector('.table');
                let cell_id = document.createElement('div');
                let cell_date = document.createElement('div');
                let cell_del_btn = document.createElement('div');
                let del_btn = document.createElement('button');
                cell_date.setAttribute('class', 'cell-table');
                cell_date.setAttribute('data-id', work.id);
                let cell_nameOfProvider = cell_date.cloneNode(true);
                let cell_warehouse = cell_date.cloneNode(true);
                let cell_nameOfProduct = cell_date.cloneNode(true);
                let cell_quantity = cell_date.cloneNode(true);
                let cell_total = cell_date.cloneNode(true);
                cell_id = cell_date.cloneNode(true);
                cell_id.setAttribute('data-field', 'id');
                cell_date.setAttribute('data-field', 'date');
                cell_nameOfProvider.setAttribute('data-field', 'nameOfProvider');
                cell_warehouse.setAttribute('data-field', 'warehouse');
                cell_nameOfProduct.setAttribute('data-field', 'nameOfProduct');
                cell_quantity.setAttribute('data-field', 'quantity');
                cell_total.setAttribute('data-field', 'total');
                cell_del_btn.setAttribute('class', 'cell-table');
                cell_del_btn.setAttribute('data-field', 'btn-wrp');
                cell_del_btn.setAttribute('data-id', work.id);
                del_btn.setAttribute('class', 'cell-table');
                del_btn.setAttribute('data-id', work.id);
                cell_id.innerText = work.id;
                cell_date.innerText = work.date;
                cell_nameOfProvider.innerText = work.nameOfProvider;
                cell_warehouse.innerText = work.warehouse;
                cell_nameOfProduct.innerText = work.nameOfProduct;
                cell_quantity.innerText = work.quantity;
                cell_total.innerText = work.total;
                del_btn.innerHTML = '&times;';
                cell_del_btn.appendChild(del_btn);
                tbl_block.appendChild(cell_id);
                tbl_block.appendChild(cell_date);
                tbl_block.appendChild(cell_nameOfProvider);
                tbl_block.appendChild(cell_warehouse);
                tbl_block.appendChild(cell_nameOfProduct);
                tbl_block.appendChild(cell_quantity);
                tbl_block.appendChild(cell_total);
                tbl_block.appendChild(cell_del_btn);
            }
        });
    });
};

//push modified values
DataBase.prototype.update = function (name, field, value, id) {
    let sql = `update ${name} set ${field} = '${value}' WHERE id = ${id}`;

    this.db.transaction(function (tx) {
        tx.executeSql(sql);
    });
};

//delite current row
DataBase.prototype.del = function (name, id) {
    let sql = `DELETE FROM ${name} WHERE id = ` + id;

    this.db.transaction((tx) => {
        tx.executeSql(sql);
    });
};

//clear the table
DataBase.prototype.clear = function (name) {
    let sql = `DROP TABLE ${name}`;
    this.db.transaction(function (tx) {
        tx.executeSql(sql);
    });
    document.querySelector('.table').innerHTML = '';
    
};
