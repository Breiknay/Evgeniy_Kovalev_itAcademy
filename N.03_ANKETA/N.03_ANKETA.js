function getUserCardAlert() {

    let name = prompt('Укажите пожалуйста свое имя');
    isEmpty(name)

    let lastName = prompt('Укажите пожалуйста свою фамилию');
    isEmpty(lastName)

    let surName = prompt('Укажите пожалуйста свое отчество');
    isEmpty(surName)

    let userAge = prompt('Укажите пожалуйста возраст в годах')
    switch (isFinite(Number(userAge)) && userAge !== null) {
        case true:
            break;
        case false:
            let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
            if (isTryAgain) return getUserCardAlert()
            else return
    }
    let isCheckGender = confirm("Ваш пол - мужской?");
    let isGender = "Женский";
    let isPension = "Нет";

    if (isCheckGender) {
        isGender = " Мужской"
    }
    if (isCheckGender && userAge >= 63) {
        isPension = "Да";
    } else if (!isCheckGender && userAge >= 58) {
        isPension = "Да";
    }

    let isUserAgeInDay = userAge * 365;
    alert(`ФИО: ${name} ${lastName} ${surName}
Возраст, лет: ${userAge}
Возраст, дней: ${isUserAgeInDay}
Пол: ${isGender}
Пенсионный возраст: ${isPension}`)

}

function checkString(str) {
    return isNaN(parseFloat(str));
}

function isEmpty(str) {
    str = checkString(str) === true ? str : "";
    switch (str !== "" && str !== null) {
        case true:
            break;
        case false:
            let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
            if (isTryAgain) return getUserCardAlert()
            else return
    }
}

getUserCardAlert()

