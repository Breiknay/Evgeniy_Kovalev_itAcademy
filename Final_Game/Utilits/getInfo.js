import {MAIN_AUDIO} from "./audio.js";

const urlParams = new URLSearchParams(window.location.search);


export let PLAYER_NAME = "";
export let DIFFICULTY = 0;
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
const stringName = 'KOVALEV_TABLE_LEADERS';
export let TABLE_LIDERS = []
await restoreInfo()
// storeInfo()

let difficulty


export async function getInfoForGame(MAIN_AUDIO) {
    MAIN_AUDIO.play()

    PLAYER_NAME = urlParams.get('name');
    difficulty = urlParams.get('difficulty');

    switch (difficulty) {
        case "easy":
            // Действия для уровня "Легко"
            DIFFICULTY = 10
            break;
        case "medium":
            // Действия для уровня "Средне"
            DIFFICULTY = 20
            break;
        case "hard":
            // Действия для уровня "Сложно"
            DIFFICULTY = 30
            break;
        default:
            break;
    }
    return {
        PLAYER_NAME, DIFFICULTY
    }
}


let messages; // элемент массива - {name:'Иванов',mess:'Привет'};

//
//
export function storeInfo() {
    updatePassword = Math.random();
    $.ajax({
            url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
            data: {f: 'LOCKGET', n: stringName, p: updatePassword},
            success: lockGetReady, error: errorHandler
        }
    );
}

//
function lockGetReady(callresult) {
    if (callresult.error !== undefined)
        alert(callresult.error);

    else {
        messages = [
            {
                player_name: PLAYER_NAME,
                difficulty: difficulty,
            }
        ]

        TABLE_LIDERS.forEach(function (obj) {
            console.log(obj)
            messages.push(obj);
        });

        $.ajax({
                url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
                data: {
                    f: 'UPDATE', n: stringName,
                    v: JSON.stringify(messages), p: updatePassword
                },
                success: updateReady, error: errorHandler
            }
        );
    }
}

//
function updateReady(callresult) {
    if (callresult.error != undefined)
        alert(callresult.error);
}

//


export function restoreInfo() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {f: 'READ', n: stringName},
            success: function (callresult) {
                readReady(callresult).then(result => {
                    let info
                    result.forEach(obj => {
                        if (obj['player_name'] !== undefined) {
                            info = {
                                player_name: obj['player_name'],
                                difficulty: obj['difficulty'],
                            }


                        }
                        TABLE_LIDERS.push(info)
                        console.log(TABLE_LIDERS)
                        console.log("dog")
                    });

                    resolve(TABLE_LIDERS)
                });

            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

export function readReady(callresult) {
    return new Promise(function (resolve, reject) {
        if (callresult.error !== undefined) {
            reject(new Error(callresult.error));
        } else if (callresult.result !== "") {
            resolve(JSON.parse(callresult.result));
        }
    });
}

//
function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
}
