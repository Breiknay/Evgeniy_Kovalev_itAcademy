'use strict';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let form = document.forms.frm;
let btn = document.getElementById('button');
let diameter = frm.elements.Diameter;

btn.addEventListener('click', function (EO) {

    form.style.display = "none";
    let d = new Date();
    drawClock();
    displayAnalogTime(d);
    setInterval(function () {

        let d = new Date();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawClock(d);
        displayAnalogTime(d);
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let seconds = d.getSeconds();
        console.log(str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2));

    }, 1000);
});

function displayAnalogTime(d) {
    let clockCenterX = diameter.value / 2;
    let clockCenterY = diameter.value / 2;
    ctx.fillStyle = "black";
    ctx.font = `${diameter.value * 0.09}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(formatDateTime(d), clockCenterX, diameter.value / 3);

    let tSec = (6 * d.getSeconds() - 90) * Math.PI / 180;
    let tMin = (6 * (d.getMinutes() + (1 / 60) * d.getSeconds()) - 90) * Math.PI / 180;
    let tHour = (30 * (d.getHours() + (1 / 60) * d.getMinutes()) - 90) * Math.PI / 180;
    ctx.lineCap = 'round';
    let secShift = diameter.value / 5;
    let minShift = diameter.value / 4;
    let hourShift = diameter.value / 3;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = diameter.value / 40;
    ctx.beginPath();

    ctx.moveTo(clockCenterX, clockCenterY);
    let secTipX = clockCenterX + (diameter.value / 2 - secShift) * Math.cos(tSec);
    let secTipY = clockCenterY + (diameter.value / 2 - secShift) * Math.sin(tSec);
    ctx.lineTo(secTipX, secTipY);
    ctx.stroke();

    ctx.strokeStyle = 'blue';
    ctx.lineWidth = diameter.value / 40;
    ctx.beginPath();

    ctx.moveTo(clockCenterX, clockCenterY);
    let minTipX = clockCenterX + (diameter.value / 2 - minShift) * Math.cos(tMin);
    let minTipY = clockCenterY + (diameter.value / 2 - minShift) * Math.sin(tMin);
    ctx.lineTo(minTipX, minTipY);
    ctx.stroke();


    ctx.strokeStyle = 'red';
    ctx.lineWidth = diameter.value / 40;
    ctx.beginPath();

    ctx.moveTo(clockCenterX, clockCenterY);
    let hourTipX = clockCenterX + (diameter.value / 2 - hourShift) * Math.cos(tHour);
    let hourTipY = clockCenterY + (diameter.value / 2 - hourShift) * Math.sin(tHour);
    ctx.lineTo(hourTipX, hourTipY);
    ctx.stroke();

}


function drawClock(d) {

    let divClock = document.getElementById('divClock');
    divClock.style.margin = "50px";
    canvas.setAttribute("height", diameter.value);
    canvas.setAttribute("width", diameter.value);
    ctx.fillStyle = "orange";
    ctx.beginPath();
    ctx.ellipse(
        diameter.value / 2,
        diameter.value / 2,
        diameter.value / 2,
        diameter.value / 2,
        0,
        0,
        2 * Math.PI
    );
    ctx.fill();


    let clockRadius = diameter.value / 2.5;
    let clockCenterX = diameter.value / 2;
    let clockCenterY = diameter.value / 2;

    for (let i = 1; i <= 12; i++) {
        ctx.fillStyle = "green";
        ctx.beginPath();
        let angle = i * (Math.PI / 6);
        let diameterHour = diameter.value / 15;
        let hourNumberCenterX = clockCenterX + clockRadius * Math.sin(angle);
        let hourNumberCenterY = clockCenterY - clockRadius * Math.cos(angle);
        ctx.ellipse(
            hourNumberCenterX,
            hourNumberCenterY,
            diameterHour,
            diameterHour,
            0,
            0,
            2 * Math.PI
        );
        ctx.fill();

        ctx.fillStyle = "black";
        ctx.font = `${diameter.value * 0.07}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(i.toString(), hourNumberCenterX, hourNumberCenterY);
    }
}

function formatDateTime(dt) {
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
}

function str0l(val, len) {
    let strVal = val.toString();
    while (strVal.length < len)
        strVal = '0' + strVal;
    return strVal;
}
