class HashStorageClass {

    constructor() {
        this.object = {}
    }

    addValue = function (key, value) {
        this.object[key] = value
        return this;
    }
    getValue = function (key) {
        return this.object[key];
    }
    deleteValue = function (key) {
        if (key in this.object) {
            delete this.object[key];
            return true;
        }
        return false;
    };
    getKeys = function () {
        return Object.keys(this.object);
    }
}

const drinkStorage = new HashStorageClass();

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
    alert(info ? (`напиток: ${nameDrink}
    алкогольный: ${info['isAlcoholic'] ? "Да" : "Нет"}
    рецепт приготовления: ${info['info']}`) : "Такого напитка не найдено")
}

function deleteDrink() {
    let nameDrink = prompt("Введите название напитка")
    let isDelete = drinkStorage.deleteValue(nameDrink)
    alert(isDelete ? "Удалено успешно" : "Такого напитка не найдено")

}

function getAllDrink() {
    let info = drinkStorage.getKeys()
    alert(info.length > 0 ? info : "Напитков нет")
}