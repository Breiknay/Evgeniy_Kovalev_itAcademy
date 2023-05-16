"use strict";

let wrap = document.getElementById('wrapper'),
    racquetAreaH, //создаём переменную racquetAreaH для дальнейшей работы с ракетками
    ballH, //создаём переменную ballH для дальнейшей работы с мячиком
    areaH, //создаём переменную areaH для дальнейшей работы с мячиком
    // работаем с таймером------------------------------------------------------------------------------------
    settimeout, //создаём переменную settimeout для дальнейшей работы с таймером

    // работаем с сообщением----------------------------------------------------------------------------------
    messageGoal = document.getElementById("messageGoal"), //сoздаём div для текста которая будет отображаться когда будет гол
    messageGoalText = "Гол!";

//222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
// работаем с сообщением----------------------------------------------------------------------------------

// работаем с ракетками---------------------------------------------------------------------------------------
let racquet1 = document.createElement("div") //создаём div для первой(левой) ракетки
let racquet2 = document.createElement("div") //создаём div для второй(правой) ракетки

racquet1.classList.add('racquet1');//устанавливаем готовый CSS класс
racquet2.classList.add('racquet2');//устанавливаем готовый CSS класс

racquet1 = wrap.appendChild(racquet1); //созданную первую(левую) ракетку делаем дочерным элементом wrap
racquet2 = wrap.appendChild(racquet2); //созданную вторую(правую) ракетку делаем дочерным элементом wrap
let racquetH //создаём переменную racquetH для дальнейшей работы с ракетками
racquetH = {
    // первая(левая) ракетка
    racquet1PosX: wrap.getBoundingClientRect().left,
    racquet1PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height / 2 - racquet1.getBoundingClientRect().height / 2,
    racquet1Speed: 0,
    // вторая(правая) ракетка
    racquet2PosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet2.getBoundingClientRect().width,
    racquet2PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height / 2 - racquet2.getBoundingClientRect().height / 2,
    racquet2Speed: 0,
    width: 10,
    height: 120,

    update: function () {
        let racquet1Obj = racquet1,
            racquet2Obj = racquet2;

        racquet1Obj.style.left = this.racquet1PosX + "px";
        racquet1Obj.style.top = this.racquet1PosY + "px";

        racquet2Obj.style.left = this.racquet2PosX + "px";
        racquet2Obj.style.top = this.racquet2PosY + "px";
    }
};

racquetAreaH = {
    width: 10,
    height: wrap.getBoundingClientRect().height
};

racquetH.update();

// работаем с мячиком-----------------------------------------------------------------------------------------
let ball = document.createElement("div")
ball.classList.add('ball'); //устанавливаем готовый CSS класс
ball = wrap.appendChild(ball); //созданный мячик делаем дочерным элементом wrap

ballH = {
    posX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2,
    posY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2,
    speedX: 0, //ballH.speedX = 4
    speedY: 0, //ballH.speedY = 2
    width: 30,
    height: 30,

    update: function () {
        var ballObj = ball;
        ballObj.style.left = this.posX + "px";
        ballObj.style.top = this.posY + "px";
    }
};

areaH = {
    width: wrap.getBoundingClientRect().width,
    height: wrap.getBoundingClientRect().height
};

ballH.update();

// 1. Надо в обработчике keydown/keyup вызывать preventDefault.
window.addEventListener("keydown", function (EO) {
    EO = EO || window.event;
    EO.preventDefault();

    if (EO.keyCode === 17) {
        racquetH.racquet1Speed = 5;
    }

    if (EO.keyCode === 16) {
        racquetH.racquet1Speed = -5;
    }

    if (EO.keyCode === 40) {
        racquetH.racquet2Speed = 5;
    }

    if (EO.keyCode === 38) {
        racquetH.racquet2Speed = -5;
    }
});

window.addEventListener("keyup", function (EO) {
    EO = EO || window.event;
    EO.preventDefault();

    if (EO.keyCode === 17) {
        racquetH.racquet1Speed = 0;
    }

    if (EO.keyCode === 16) {
        racquetH.racquet1Speed = 0;
    }

    if (EO.keyCode === 40) {
        racquetH.racquet2Speed = 0;
    }

    if (EO.keyCode === 38) {
        racquetH.racquet2Speed = 0;
    }
});


let scoreBoard = document.getElementById("scoreBoard") //сoздаём div для табло
let score1, score2

function scoreBoardInnerHTML() {
    scoreBoard.innerHTML = score1 + ":" + score2;
}

scoreBoardInnerHTML();

function start() {
    ballH.speedX = 8;
    ballH.speedY = 3;
}


function tick() {
    // работаем с ракетками-----------------------------------------------------------------------------------
    racquetH.update();
    racquetH.racquet1PosY += racquetH.racquet1Speed;
    // вылетела ли ракетка ниже пола?
    if (racquetH.racquet1PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
        racquetH.racquet1PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
    }

    // вылетела ли ракетка выше потолка?
    if (racquetH.racquet1PosY < wrap.getBoundingClientRect().top) {
        racquetH.racquet1PosY = wrap.getBoundingClientRect().top;
    }

    racquetH.racquet2PosY += racquetH.racquet2Speed;
    // вылетела ли ракетка ниже пола?
    if (racquetH.racquet2PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
        racquetH.racquet2PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
    }

    // вылетела ли ракетка выше потолка?
    if (racquetH.racquet2PosY < wrap.getBoundingClientRect().top) {
        racquetH.racquet2PosY = wrap.getBoundingClientRect().top;
    }

    // работаем с мячиком-------------------------------------------------------------------------------------
    ballH.posX -= ballH.speedX;
    // вылетел ли мяч правее стены?
    if ((ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX + ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width)) {

        score1 += 1;
        scoreBoardInnerHTML();
        ballH.speedX = 0;
        ballH.speedY = 0;
        messageGoal.innerHTML = messageGoalText;

        ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;

        settimeout = window.setTimeout(function () {
            messageGoal.innerHTML = "";
            ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
            ballH.posY = racquetH.racquet1PosY + racquetH.height / 2;
            start();
        }, 2000);

    } else if (!(ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX + ballH.width > (racquetH.racquet2PosX)) {
        ballH.speedX = -ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width - ballH.width;
    }

    // вылетел ли мяч левее стены
    if ((ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX <= (wrap.getBoundingClientRect().left)) {

        score2 += 1;
        scoreBoardInnerHTML();
        ballH.speedX = 0;
        ballH.speedY = 0;
        messageGoal.innerHTML = messageGoalText;

        ballH.posX = wrap.getBoundingClientRect().left + 1;

        settimeout = window.setTimeout(function () {
            messageGoal.innerHTML = "";
            ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width;
            ballH.posY = racquetH.racquet2PosY + racquetH.height / 2;
            start();
        }, 2000);

    } else if (!(ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX < (racquetH.width + racquetH.racquet1PosX)) {
        ballH.speedX = -ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
    }

    ballH.posY -= ballH.speedY;
    // вылетел ли мяч ниже пола?
    if (ballH.posY + ballH.height > (wrap.getBoundingClientRect().top + areaH.height)) {
        ballH.speedY = -ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top + areaH.height - ballH.height;
    }

    // вылетел ли мяч выше потолка?
    if (ballH.posY < wrap.getBoundingClientRect().top) {
        ballH.speedY = -ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top;
    }

    ballH.update();

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);