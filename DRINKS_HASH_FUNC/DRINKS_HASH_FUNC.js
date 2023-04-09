function HashStorageFunc() {
    let myObject = {}

    this.addValue = function (key, value) {
        myObject[key] = value
        return this;
    }
    this.getValue = function (key) {
        console.log(myObject[key])
        return myObject[key];
    }
    this.deleteValue = function (key) {
        if (key in myObject) {
            delete myObject[key];
            return true;
        }
        return false;
    };
    this.getKeys = function () {
        console.log(Object.keys(myObject))
        return Object.keys(myObject);
    }
}


const drinkStorage = new HashStorageFunc();

function makeDrink() {

    let nameDrink = prompt("Введите название напитка")

    let isAlcoholic = confirm("Он Алкогольный?")
    let info = prompt("Введите Рецепт его приготовления")
    let objectDrink = {
        isAlcoholic: isAlcoholic,
        info: info
    }

    drinkStorage.addValue(nameDrink, objectDrink)
    document.getElementById("getDrink").style.visibility = "visible";
    document.getElementById("deleteDrink").style.visibility = "visible";
}


function getDrink() {
    let nameDrink = prompt("Введите название напитка")
    let info = drinkStorage.getValue(nameDrink)
    if (!info) alert("Такого напитка не найдено")
    alert(`напиток ${nameDrink}
    алкогольный: ${info['isAlcoholic'] ? "Да" : "Нет"}
    рецепт приготовления: ${info['info']}`)
}

function deleteDrink() {
    let nameDrink = prompt("Введите название напитка")
    let isDelete = drinkStorage.deleteValue(nameDrink)
    alert(`${isDelete ? "Удалено успешно" : "Такого напитка не найдено"}`)
}

function getAllDrink() {
    let info = drinkStorage.getKeys()
    alert(info.length > 0 ? info : "Напитков нет")
}

