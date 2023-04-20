"use strict"

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
    document.getElementById(elemId).style.cssText = 'color: red;display: inline-block; text-align: right;';
}

const regexForWorkers = /^[\p{L}\s]+$/u;


form.workers.addEventListener("blur", function () {
    let workers = document.form.workers.value;
    if (!workers) {
        printError("workersErr", "Пожалуйста, введите ваше имя");
    } else {
        if (workers.length < 3) {
            printError("workersErr", "Пожалуйста, введите полное имя");
        } else if (regexForWorkers.test(workers) === false) {
            printError("workersErr", "Пожалуйста, введите правильное имя");
        } else {
            printError("workersErr", "");
        }
    }
})


form.sitename.addEventListener("blur", function () {
    let sitename = document.form.sitename.value;
    if (!sitename) {
        printError("sitenameErr", "Пожалуйста, введите название сайта");
    } else {
        printError("sitenameErr", "");
    }
})

form.siteUrlForYou.addEventListener("blur", function () {
    let siteUrlForYou = document.form.siteUrlForYou.value;
    if (!siteUrlForYou) {
        printError("siteUrlForYouErr", "Пожалуйста, введите название сайта");
    } else {
        if (siteUrlForYou.indexOf('https://') === -1) {
            printError("siteUrlForYouErr", "Пожалуйста, укажите действильный сайт");
        } else {
            printError("siteUrlForYouErr", "");
        }
    }
})


form.dateNowTime.addEventListener("blur", function (event) {
    let dateNowTime = document.form.dateNowTime.value;

    if (!dateNowTime) {
        printError("dateNowTimeErr", "Пожалуйста, укажите дату");
    } else {

        let targetDate = new Date(dateNowTime)
        let currentDate = new Date();
        if (targetDate.getTime() > currentDate.getTime()) {
            printError("dateNowTimeErr", "Пожалуйста, нормальную дату");
        } else {
            printError("dateNowTimeErr", "");
        }
    }
})


form.visitors.addEventListener("blur", function () {
    let visitors = document.form.visitors.value;
    if (!visitors) {
        printError("visitorsErr", "Пожалуйста, укажите количество посетителей");
    } else {
        if (visitors > '40') {
            printError("visitorsErr", "Ого");
        } else {
            printError("visitorsErr", "");
        }
    }
})
form.email.addEventListener("blur", function (event) {
    let email = document.form.email.value;
    if (!email) {
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
    } else {

        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
        } else {
            printError("emailErr", "");
        }
    }
})
form.description.addEventListener("blur", function (event) {
    let description = document.form.description.value;
    if (!description) {
        printError("descriptionErr", "Пожалуйста, заполните информацию о сайте");
    } else {

        if (description.length < 10) {
            printError("descriptionErr", "Пожалуйста, нужно больше информации");
        } else {
            printError("descriptionErr", "");
        }

    }
})


form.addEventListener('submit', function (event) {
    let workers = document.form.workers.value;
    let sitename = document.form.sitename.value;
    let siteUrlForYou = document.form.siteUrlForYou.value;
    let dateNowTime = document.form.dateNowTime.value;
    let visitors = document.form.visitors.value;
    let email = document.form.email.value;
    let description = document.form.description.value;
    let payment = document.form.payment.value;
    let votes = document.getElementsByName("votes");
    let typeSite = document.form.typeSite.value;

    let error = {
        workersErr: true,
        sitenameErr: true,
        siteUrlForYouErr: true,
        dateNowTimeErr: true,
        visitorsErr: true,
        emailErr: true,
        typeSiteErr: true,
        paymentErr: true,
        votesErr: true,
        descriptionErr: true,
    }

    let regexForWorkers = /^[\p{L}\s]+$/u;
    if (!workers) {

        printError("workersErr", "Пожалуйста, введите ваше имя");
    } else {

        if (workers.length < 3) {
            printError("workersErr", "Пожалуйста, введите полное имя");
        } else if (regexForWorkers.test(workers) === false) {
            printError("workersErr", "Пожалуйста, введите правильное имя");
        } else {
            printError("workersErr", "");
            error.workersErr = false;
        }
    }
    if (!sitename) {

        printError("sitenameErr", "Пожалуйста, введите название сайта");
    } else {
        printError("sitenameErr", "");
        error.sitenameErr = false;

    }


    if (!siteUrlForYou) {
        printError("siteUrlForYouErr", "Пожалуйста, введите название сайта");
    } else {
        if (siteUrlForYou.indexOf('https://') === -1) {
            printError("siteUrlForYouErr", "Пожалуйста, укажите действильный сайт");
        } else {
            printError("siteUrlForYouErr", "");
            error.siteUrlForYouErr = false;

        }
    }

    if (!dateNowTime) {
        printError("dateNowTimeErr", "Пожалуйста, укажите дату");
    } else {
        let targetDate = new Date(dateNowTime)
        let currentDate = new Date();
        if (targetDate.getTime() > currentDate.getTime()) {
            event.preventDefault()
            printError("dateNowTimeErr", "Пожалуйста, нормальную дату");

        } else {
            printError("dateNowTimeErr", "");
            error.dateNowTimeErr = false;
        }

    }


    if (!visitors) {
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

    if (!email) {
        printError("emailErr", "Пожалуйста, введите адрес вашей электронной почты");
    } else {

        let regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Пожалуйста, введите действительный адрес электронной почты");
        } else {
            printError("emailErr", "");
            error.emailErr = false;
        }
    }
    if (typeSite === "Select") {
        printError("typeSiteErr", "Пожалуйста, выберите типа сайта");
    } else {
        printError("typeSiteErr", "");
        error.typeSiteErr = false;
    }

    if (payment === "3") {
        if (!votes[0].checked) {
            printError("votesErr", "Если выбрано размещение VIP, то возможность оставлять отзывы, обязательно");
        } else {
            printError("votesErr", "");
            error.votesErr = false;
        }

    } else {
        printError("votesErr", "");
        error.votesErr = false;
    }

    if (payment === "") {

        printError("paymentErr", "Пожалуйста, укажите, где будет размещение");
    } else {
        printError("paymentErr", "");
        error.paymentErr = false;
    }

    if (!description) {
        printError("descriptionErr", "Пожалуйста, заполните информацию о сайте");
    } else {

        printError("descriptionErr", "");
        error.descriptionErr = false;
    }


    for (let key in error) {
        if (error.hasOwnProperty(key)) {
            if (error[key] === true) {
                event.preventDefault()
                const result = key.replace(/Err$/, "");
                let documentForFocus = document.getElementById(result)
                if (documentForFocus) {
                    event.preventDefault()
                    documentForFocus.focus()
                }
                break;
            }

        }
    }


})

