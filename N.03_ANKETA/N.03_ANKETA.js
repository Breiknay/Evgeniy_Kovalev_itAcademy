function getUserCardAlert() {
    let name = prompt('Укажите пожалуйста свое имя');
    name = checkString(name) === true ? name : "";

    let lastName = prompt('Укажите пожалуйста свою фамилию');
    lastName = checkString(lastName) === true ? lastName : "";
    let surName = prompt('Укажите пожалуйста свое отчество');
    surName = checkString(surName) === true ? surName : "";
    switch ((name && lastName && surName) !== "" && (name && lastName && surName) !== null) {
        case true:
            break;
        case false:
            let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
            if (isTryAgain) return getUserCardAlert()
            else return
    }
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

getUserCardAlert()

