"use strict"
let form = document.forms.frm
let btn = document.getElementById('button')
let diameter = frm.elements.Diameter
let clock = document.getElementById('second')


btn.addEventListener('click', function (EO) {
    EO = EO || window.event;
    form.style.display = "none"
    clock.style.width = diameter.value + 'px';
    clock.style.height = diameter.value + 'px';
    clock.style.borderRadius = '50%';
    clock.style.backgroundColor = "orange";
    clock.style.position = 'absolute';
    const l = 2.5 //для растояния от центра циферблата до границы зеленого круга
    let clockRadius = diameter.value / l;
    let clockCenterX = clock.offsetLeft + clock.offsetWidth / 2;
    let clockCenterY = clock.offsetTop + clock.offsetHeight / 2;

    let clockHand = document.createElement('div')
    clock.appendChild(clockHand)
    clockHand.style.position = 'absolute';
    clockHand.style.height = 0.8 * clockRadius + 'px'
    clockHand.style.width = 0.02 * clockRadius + 'px'
    clockHand.style.top = diameter.value / 5.7 + 'px'
    clockHand.style.left = diameter.value / 2 + 'px'
    clockHand.style.background = "black"
    clockHand.style.transformOrigin = "bottom center";
    clockHand.style.borderRadius = "10px";
    clockHand.style.zIndex = "10"


    let clockHand2 = document.createElement('div')
    clock.appendChild(clockHand2)
    clockHand2.style.position = 'absolute';
    clockHand2.style.height = 0.6 * clockRadius + 'px'
    clockHand2.style.width = 0.02 * clockRadius + 'px'
    clockHand2.style.top = diameter.value / 4 + 'px'
    clockHand2.style.left = diameter.value / 2 + 'px'
    clockHand2.style.background = "blue"
    clockHand2.style.transformOrigin = "bottom center";
    clockHand2.style.borderRadius = "10px";
    clockHand.style.zIndex = "11"

    let clockHand3 = document.createElement('div')
    clock.appendChild(clockHand3)
    clockHand3.style.position = 'absolute';
    clockHand3.style.height = 0.4 * clockRadius + 'px'
    clockHand3.style.width = 0.02 * clockRadius + 'px'
    clockHand3.style.top = diameter.value / 3 + 'px'
    clockHand3.style.left = diameter.value / 2 + 'px'
    clockHand3.style.background = "red"
    clockHand3.style.transformOrigin = "bottom center";
    clockHand3.style.borderRadius = "10px";
    clockHand.style.zIndex = "12"


    for (let i = 1; i <= 12; i++) {

        let hourDiv = document.createElement('div')
        let hourSpan = document.createElement('span')
        hourSpan.textContent = i.toString();
        hourSpan.style.position = "absolute"
        hourSpan.style.top = '50%';
        hourSpan.style.left = '50%';
        hourSpan.style.transform = 'translate(-50%, -50%)';
        hourSpan.style.fontSize = diameter.value * 0.06 + "px"
        clock.appendChild(hourDiv);
        hourDiv.appendChild(hourSpan)

        let angle = i * (Math.PI / 6);
        let hourNumberCenterX = clockCenterX + clockRadius * Math.sin(angle);
        let hourNumberCenterY = clockCenterY - clockRadius * Math.cos(angle);
        let diameterHour = diameter.value / 8;
        hourDiv.style.width = diameterHour + 'px';
        hourDiv.style.height = diameterHour + 'px';
        hourDiv.style.left = (hourNumberCenterX - hourDiv.offsetWidth / 1.2) + 'px';
        hourDiv.style.top = (hourNumberCenterY - hourDiv.offsetHeight / 1.2) + 'px';
        hourDiv.style.position = 'absolute';
        hourDiv.style.textAlign = 'center';
        hourDiv.style.backgroundColor = "green"
        hourDiv.style.borderRadius = '50%';
    }

    let lineClock = document.createElement('span')
    clock.appendChild(lineClock)
    lineClock.style.position = "absolute"
    lineClock.style.top = diameter.value / 4 + 'px'
    lineClock.style.left = diameter.value / 2.8 + 'px'
    lineClock.style.fontSize = diameter.value * 0.08 + "px"
    lineClock.id = "line"

    updateTime()
    setInterval(updateTime, 1000);

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
            const seconds = currTime.getSeconds();
            let rotateCount = 360 / 60 * seconds;
            clockHand.style.transform = 'rotate(' + rotateCount + 'deg)';
            const minutes = currTime.getMinutes();
            let rotateCount2 = 360 / 60 * minutes;
            clockHand2.style.transform = 'rotate(' + rotateCount2 + 'deg)';
            const hours = currTime.getHours();
            let rotateCount3 = 360 / 12 * (hours + minutes / 60)
            clockHand3.style.transform = 'rotate(' + rotateCount3 + 'deg)';
            console.log(str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2))
        }
    }
})