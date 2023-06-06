import {MAIN_AUDIO} from "./audio.js";

const urlParams = new URLSearchParams(window.location.search);


export let PLAYER_NAME = "";
export let DIFFICULTY = 0;

export function getInfoForGame(MAIN_AUDIO) {
    MAIN_AUDIO.play()
    // storeInfo()
    PLAYER_NAME = urlParams.get('name');
    let difficulty = urlParams.get('difficulty');

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

// const ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
// let messages; // элемент массива - {name:'Иванов',mess:'Привет'};
// let updatePassword;
// const stringName = 'KOVALEV_TABLE_LEADERS';
//
//
// function storeInfo() {
//     updatePassword = Math.random();
//     $.ajax({
//             url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
//             data: {f: 'LOCKGET', n: stringName, p: updatePassword},
//             success: lockGetReady, error: errorHandler
//         }
//     );
// }
//
// function lockGetReady(callresult) {
//     console.log(callresult)
//     if (callresult.error !== undefined)
//         alert(callresult.error);
//
//     else {
//         const info = {
//             name: PLAYER_NAME,
//             difficulty: DIFFICULTY
//         };
//         $.ajax({
//                 url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
//                 data: {
//                     f: 'UPDATE', n: stringName,
//                     v: JSON.stringify(info), p: updatePassword
//                 },
//                 success: updateReady, error: errorHandler
//             }
//         );
//     }
// }
//
// function updateReady(callresult) {
//     if (callresult.error != undefined)
//         alert(callresult.error);
// }
//
// function restoreInfo() {
//     $.ajax(
//         {
//             url: ajaxHandlerScript, type: 'POST', cache: false, dataType: 'json',
//             data: {f: 'READ', n: stringName},
//             success: readReady, error: errorHandler
//         }
//     );
// }
//
// function readReady(callresult) {
//     if (callresult.error !== undefined)
//         alert(callresult.error);
//     else if (callresult.result != "") {
//         const info = JSON.parse(callresult.result);
//         console.log(info)
//     }
// }
//
// function errorHandler(jqXHR, statusStr, errorStr) {
//     alert(statusStr + ' ' + errorStr);
// }
//
// restoreInfo();