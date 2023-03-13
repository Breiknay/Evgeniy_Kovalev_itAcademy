function getUserCardAlert() {
    let name = prompt('Укажите пожалуйста свое имя');

    let lastName = prompt('Укажите пожалуйста свою фамилию');
    let surName = prompt('Укажите пожалуйста свое отчество');

    switch (typeof ((name && lastName && surName) === 'string') && (name && lastName && surName)!==""&&(name&& lastName && surName)!==null&& isNaN(Number.parseFloat(name&&lastName&& surName))){
        case true:
            break;
        case false:
            let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
            if(isTryAgain) return getUserCardAlert()
            else return
    }
    let userAge = prompt('Укажите пожалуйста возраст в годах')
    switch(isFinite(Number(userAge))){
        case true:
            break;
        case false:
            let isTryAgain = confirm("Вы ввели некорректные данные, попробовать еще раз?");
            if(isTryAgain) return getUserCardAlert()
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

    alert('ФИО: ' + name + ' ' + lastName + ' ' + surName + "\n" +
        "Возраст, лет: " + userAge + "\n" +
        "Возраст, дней: " + isUserAgeInDay + "\n" +
        "Пол: " + isGender + "\n" +
        "Пенсионный возраст: " + isPension)
}
getUserCardAlert()