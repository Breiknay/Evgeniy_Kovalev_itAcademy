"use strict"

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    document.getElementById(elemId).style.cssText = 'color: red;display: inline-block; text-align: right;';
}


let error = {
    workersErr: true,
    sitenameErr: true,
    siteurlErr: true,
    dateErr: true,
    visitorsErr: true,
    emailErr: true,
    descriptionErr: true
}


function toggleDisabled(_checked) {
    document.form.description.disabled = _checked ? false : true;
}


form.addEventListener('submit', function (event) {
    let workers = document.form.workers.value;
    let sitename = document.form.sitename.value;
    let siteUrlForYou = document.form.siteUrlForYou.value;
    let dateNowTime = document.form.dateNowTime.value;
    let visitors = document.form.visitors.value;
    let email = document.form.email.value;
    let description = document.form.description.value;


    let workersFocus = document.form.workers
    let regexForWorkers = /^[\p{L}\s]+$/u;
    if (!workers) {
        workersFocus.focus();
        event.preventDefault()
        printError("workersErr", "Пожалуйста, введите ваше имя");
    } else {

        if (workers.length < 3) {
            workersFocus.focus();
            printError("workersErr", "Пожалуйста, введите полное имя");
        } else if (regexForWorkers.test(workers) === false) {
            workersFocus.focus();
            printError("workersErr", "Пожалуйста, введите правильное имя");
        } else {
            printError("workersErr", "");
            error.workersErr = false;
        }
    }
    let sitenameFocus = document.form.sitename
    if (!sitename) {
        sitenameFocus.focus();
        event.preventDefault()
        printError("sitenameErr", "Пожалуйста, введите название сайта");
    } else {
        printError("sitenameErr", "");
        error.sitenameErr = false;

    }


    let siteurlFocus = document.form.siteUrlForYou

    if (!siteUrlForYou) {
        siteurlFocus.focus();
        event.preventDefault()
        printError("siteurlErr", "Пожалуйста, введите название сайта");
    } else {
        if (siteUrlForYou.indexOf('https://') === -1) {
            siteurlFocus.focus();
            event.preventDefault()
            printError("siteurlErr", "Пожалуйста, укажите действильный сайт");
        } else {
            printError("siteurlErr", "");
            error.siteurlErr = false;

        }
    }

    let dateFocus = document.form.dateNowTime
    if (!dateNowTime) {
        dateFocus.focus();
        event.preventDefault()
        printError("dateErr", "Пожалуйста, укажите дату");
    } else {

        let targetDate = new Date(dateNowTime)

        let currentDate = new Date();

        if (targetDate.getTime() > currentDate.getTime()) {
            dateFocus.focus();
            event.preventDefault()
            printError("dateErr", "Пожалуйста, нормальную дату");

        } else {
            printError("dateErr", "");
            error.dateErr = false;
        }

    }


    let visitorsFocus = document.form.visitors

    if (!visitors) {
        visitorsFocus.focus();
        event.preventDefault()
        printError("visitorsErr", "Пожалуйста, укажите количество посетителей");
    } else {

        if (visitors > '40') {
            printError("visitorsErr", "Ого");
            error.visitorsErr = false;
        } else {
            printError("visitorsErr", "");
            error.visitorsErr = false;
        }
    }

    let emailFocus = document.form.email
    if (!email) {
        emailFocus.focus();
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
    } else {

        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            visitorsFocus.focus();
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
        } else {
            printError("emailErr", "");
            error.emailErr = false;
        }
    }
    if (!document.form.description.disabled) {
        let descriptionFocus = document.form.description

        if (!description) {
            descriptionFocus.focus();
            event.preventDefault()
            printError("descriptionErr", "Пожалуйста, заполните информацию о сайте");


        } else {

            printError("descriptionErr", "");
            error.descriptionErr = false;
        }
    } else {

        printError("descriptionErr", "");
        error.descriptionErr = false;
    }

    let sent = true
    for (var key in error) {
        if (error.hasOwnProperty(key)) {
            if (error[key] === true) {
                sent = false
            }

        }
    }

    if (!sent) {
        event.preventDefault()
    }

})

