class HashStorageClass {

    constructor(storageKey) {
        this.storageKey = storageKey;
        this.data = JSON.parse(localStorage.getItem(storageKey)) || {};
    }


    addValue = function (key, value) {
        this.data[key] = value;
        this.saveDataToLocalStorage();
    }

    getValue = function (key) {
        return this.data[key];

    }
    deleteValue = function (key) {
        if (key in this.data) {
            delete this.data[key];
            this.saveDataToLocalStorage();
            return true;
        }
        return false;
    };
    getKeys = function () {
        return Object.keys(this.data);
    }
    saveDataToLocalStorage = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
}

const drinkStorage = new HashStorageClass('drinks');

function makeDrink() {

    let nameDrink = prompt("Введите название напитка")
    let isAlcoholic = confirm("Он Алкогольный?")
    let info = prompt("Введите Рецепт его приготовления")
    let objectDrink = {
        isAlcoholic: isAlcoholic,
        info: info
    }

    drinkStorage.addValue(nameDrink, objectDrink)

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

const foodStorage = new HashStorageClass('food');


function makeFood() {

    let nameFood = prompt("Введите название блюда")
    let info = prompt("Введите Рецепт его приготовления")
    let isAlcoholic = confirm("Это блюдо диетическое?")
    let objectDrink = {
        isAlcoholic: isAlcoholic,
        info: info
    }

    foodStorage.addValue(nameFood, objectDrink)

}

function getFood() {
    let nameFood = prompt("Введите название блюда")
    let info = foodStorage.getValue(nameFood)
    alert(info ? (`блюдо: ${nameFood}
    диетическое: ${info['isAlcoholic'] ? "Да" : "Нет"}
    рецепт приготовления: ${info['info']}`) : "Такого блюда не найдено")
}

function deleteFood() {
    let nameFood = prompt("Введите название блюда")
    let isDelete = foodStorage.deleteValue(nameFood)
    alert(isDelete ? "Удалено успешно" : "Такого напитка не найдено")
}

function getAllFood() {
    let info = foodStorage.getKeys()
    alert(info.length > 0 ? info : "Блюд нет")
}