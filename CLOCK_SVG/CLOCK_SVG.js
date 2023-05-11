"use strict"
let form = document.forms.frm
let btn = document.getElementById('button')
let diameter = frm.elements.Diameter

btn.addEventListener('click', function (EO) {
    form.style.display = "none"
    let divClock = document.getElementById('divClock')
    divClock.style.margin = "50px";
    let clock = document.getElementById('clock');
    clock.setAttribute("height", diameter.value);
    clock.setAttribute("width", diameter.value);
    let circle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    clock.appendChild(circle);

    circle.setAttribute("fill", "orange");
    circle.setAttribute("rx", diameter.value / 2);
    circle.setAttribute("ry", diameter.value / 2);
    circle.setAttribute("cx", diameter.value / 2);
    circle.setAttribute("cy", diameter.value / 2);

    let clockRadius = diameter.value / 2.5;
    let clockCenterX = diameter.value / 2;
    let clockCenterY = diameter.value / 2;

    let clockHand = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    clock.appendChild(clockHand)
    clockHand.setAttribute("fill", "black");
    clockHand.setAttribute("rx", '2.5');
    clockHand.setAttribute("ry", '2.55');
    clockHand.setAttribute("x", diameter.value / 2.01);
    clockHand.setAttribute("y", diameter.value / 5.7);
    clockHand.setAttribute('height', 0.82 * clockRadius)
    clockHand.setAttribute('width', 0.02 * clockRadius)

    let clockHand2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    clock.appendChild(clockHand2)
    clockHand2.setAttribute("fill", "blue");
    clockHand2.setAttribute("rx", '2.5');
    clockHand2.setAttribute("ry", '2.55');
    clockHand2.setAttribute("x", diameter.value / 2);
    clockHand2.setAttribute("y", diameter.value / 3.7);
    clockHand2.setAttribute('height', 0.6 * clockRadius)
    clockHand2.setAttribute('width', 0.02 * clockRadius)

    let clockHand3 = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    clock.appendChild(clockHand3)
    clockHand3.setAttribute("fill", "red");
    clockHand3.setAttribute("rx", '2.5');
    clockHand3.setAttribute("ry", '2.55');
    clockHand3.setAttribute("x", diameter.value / 2.05);
    clockHand3.setAttribute("y", diameter.value / 2.9);
    clockHand3.setAttribute('height', 0.4 * clockRadius)
    clockHand3.setAttribute('width', 0.02 * clockRadius)

    for (let i = 1; i <= 12; i++) {
        let hourDiv = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse')
        clock.appendChild(hourDiv);
        let angle = i * (Math.PI / 6);
        let diameterHour = diameter.value / 15;
        let hourNumberCenterX = clockCenterX + clockRadius * Math.sin(angle);
        let hourNumberCenterY = clockCenterY - clockRadius * Math.cos(angle);
        hourDiv.setAttribute("fill", "green");
        hourDiv.setAttribute("rx", diameterHour);
        hourDiv.setAttribute("ry", diameterHour);
        hourDiv.setAttribute("cx", hourNumberCenterX);
        hourDiv.setAttribute("cy", hourNumberCenterY)

        let hourSpan = document.createElementNS('http://www.w3.org/2000/svg', 'text')
        clock.appendChild(hourSpan);
        hourSpan.textContent = i;
        hourSpan.setAttribute("x", hourNumberCenterX);
        hourSpan.setAttribute("y", hourNumberCenterY);
        hourSpan.setAttribute("text-anchor", 'middle');

        hourSpan.setAttribute("font-size", diameter.value * 0.07);
    }

    let lineClock = document.createElementNS('http://www.w3.org/2000/svg', 'text')//////////линейные часы
    clock.appendChild(lineClock);
    lineClock.setAttribute("y", diameter.value / 3);
    lineClock.setAttribute("x", diameter.value / 2.8);
    lineClock.setAttribute("font-size", diameter.value * 0.08)
    lineClock.id = "line"

    updateTime()
    setInterval(updateTime, 1000)

    function updateTime() {
        const currTime = new Date();
        document.getElementById('line').innerHTML = formatDateTime(currTime);
        clocks()

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

        function clocks() {
            let hours = currTime.getHours();
            let minutes = currTime.getMinutes();
            let seconds = currTime.getSeconds();
            let rotateCount = 360 / 60 * seconds;
            let rotateCount2 = 360 / 60 * minutes;
            let rotateCount3 = 360 / 12 * (hours + minutes / 60)
            clockHand.setAttribute('transform', `rotate(${rotateCount} ${diameter.value / 2} ${diameter.value / 2} )`)
            clockHand2.setAttribute('transform', `rotate(${rotateCount2} ${diameter.value / 2} ${diameter.value / 2} )`)
            clockHand3.setAttribute('transform', `rotate(${rotateCount3} ${diameter.value / 2} ${diameter.value / 2} )`)
            console.log(str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2))
        }
    }


})