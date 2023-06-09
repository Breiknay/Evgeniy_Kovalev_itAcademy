import {MAIN_AUDIO} from "./audio.js";

const urlParams = new URLSearchParams(window.location.search);


export let PLAYER_NAME = "";
export let DIFFICULTY = 0;
const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
let updatePassword;
const stringName = 'KOVALEV_TABLE_LEADERS';
export let TABLE_LIDERS = []
await restoreInfo()
PLAYER_NAME = urlParams.get('name');
let difficulty = urlParams.get('difficulty');


// await storeInfo()
export function getInfoForGame() {
    return new Promise((resolve, reject) => {


        switch (difficulty) {
            case "easy":
                difficulty = "Легкая"
                DIFFICULTY = 30;
                break;
            case "medium":
                difficulty = "Средняя"
                DIFFICULTY = 40;
                break;
            case "hard":
                difficulty = "Сложная"
                DIFFICULTY = 50;
                break;
            default:
                break;
        }

        if (PLAYER_NAME && DIFFICULTY) {
            resolve({
                PLAYER_NAME,
                DIFFICULTY
            });
        } else {
            reject(new Error('Не удалось получить информацию для игры.'));
        }
    });
}


export function storeInfo() {
    return new Promise((resolve, reject) => {
        updatePassword = Math.random();
        $.ajax({
            url: ajaxHandlerScript,
            type: 'POST',
            cache: false,
            dataType: 'json',
            data: {f: 'LOCKGET', n: stringName, p: updatePassword},
            success: (callresult) => lockGetReady(callresult)
                .then((messages) => {
                    $.ajax({
                        url: ajaxHandlerScript,
                        type: 'POST',
                        cache: false,
                        dataType: 'json',
                        data: {
                            f: 'UPDATE',
                            n: stringName,
                            v: JSON.stringify(messages),
                            p: updatePassword
                        },
                        success: (result) => resolve(result),
                        error: (error) => reject(error)
                    });
                })
                .catch((error) => reject(error)),
            error: (error) => reject(error)
        });
    });
}

async function lockGetReady(callresult) {
    return new Promise((resolve, reject) => {
        if (callresult.error !== undefined) {
            alert(callresult.error);
            reject(callresult.error);
        } else {
            let final = {
                player_name: PLAYER_NAME,
                difficulty: difficulty,
            };
            let messages = [final];
            TABLE_LIDERS.forEach(function (obj) {
                messages.push(obj);
            });
            TABLE_LIDERS.push(final);

            resolve(messages)
        }
    });
}


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

