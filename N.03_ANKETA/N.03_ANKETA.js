function getUserCardAlert() {

    for (; ;) {
        name = prompt('Укажите пожалуйста свое имя');

        if ((name) !== "" && (name !== null) && isNaN(parseFloat(name))) {
            break;
        }
        let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
        if (!isTryAgain) {
            return
        }

    }
    let lastName;
    for (let i = 0; ; i++) {
        lastName = prompt('Укажите пожалуйста свою фамилию');
        if ((lastName) !== "" && (lastName !== null) && isNaN(parseFloat(lastName))) {
            break;
        }
        let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
        if (!isTryAgain) {
            return
        }
    }
    let surName;
    for (; ;) {
        surName = prompt('Укажите пожалуйста свое отчество');

        if ((surName) !== "" && (surName !== null) && isNaN(parseFloat(surName))) {
            break;
        }
        let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
        if (!isTryAgain) {
            return
        }
    }
    let userAge
    for (; ;) {
        userAge = prompt('Укажите пожалуйста возраст в годах');

        if (isFinite(Number(userAge)) && userAge !== null) {
            break;
        }
        let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
        if (!isTryAgain) {
            return
        }
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

getUserCardAlert()
