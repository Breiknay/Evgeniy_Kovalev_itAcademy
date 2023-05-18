"use strict";

let wrap = document.getElementById('wrapper'),
    messageGoal = document.getElementById("messageGoal"),
    messageGoalText = "Гол!";


let racquet1 = document.createElement("div")
let racquet2 = document.createElement("div")

racquet1.classList.add('racquet1');
racquet2.classList.add('racquet2');

racquet1 = wrap.appendChild(racquet1);
racquet2 = wrap.appendChild(racquet2);

let racquetH = {
    //левая ракетка
    racquet1PosX: wrap.getBoundingClientRect().left,
    racquet1PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height - racquet1.getBoundingClientRect().height,
    racquet1Speed: 0,
    // правая ракетка
    racquet2PosX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquet2.getBoundingClientRect().width,
    racquet2PosY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height - racquet2.getBoundingClientRect().height,
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
let racquetAreaH
racquetAreaH = {
    width: 10,
    height: wrap.getBoundingClientRect().height
};

racquetH.update();


let ball = document.createElement("div")
ball.classList.add('ball');
ball = wrap.appendChild(ball);

let ballH = {
    posX: wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2,
    posY: wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2,
    speedX: 0,
    speedY: 0,
    width: 30,
    height: 30,

    update: function () {
        let ballObj = ball;
        ballObj.style.left = this.posX + "px";
        ballObj.style.top = this.posY + "px";
    }
};

let areaH = {
    width: wrap.getBoundingClientRect().width,
    height: wrap.getBoundingClientRect().height
};

ballH.update();


window.addEventListener("keydown", function (eo) {
    eo = eo || window.event;
    eo.preventDefault();

    if (eo.keyCode === 17) {
        racquetH.racquet1Speed = 5;
    }

    if (eo.keyCode === 16) {
        racquetH.racquet1Speed = -5;
    }

    if (eo.keyCode === 40) {
        racquetH.racquet2Speed = 5;
    }

    if (eo.keyCode === 38) {
        racquetH.racquet2Speed = -5;
    }
});

window.addEventListener("keyup", function (eo) {
    eo = eo || window.event;
    eo.preventDefault();

    if (eo.keyCode === 17) {
        racquetH.racquet1Speed = 0;
    }

    if (eo.keyCode === 16) {
        racquetH.racquet1Speed = 0;
    }

    if (eo.keyCode === 40) {
        racquetH.racquet2Speed = 0;
    }

    if (eo.keyCode === 38) {
        racquetH.racquet2Speed = 0;
    }
});


let scoreBoard = document.getElementById("scoreBoard")
let score1 = 0;
let score2 = 0;

function scoreBoardInnerHTML() {
    scoreBoard.innerHTML = score1 + ":" + score2;
}

scoreBoardInnerHTML();




function tick() {
    racquetH.update();
    racquetH.racquet1PosY += racquetH.racquet1Speed;

    if (racquetH.racquet1PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
        racquetH.racquet1PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
    }


    if (racquetH.racquet1PosY < wrap.getBoundingClientRect().top) {
        racquetH.racquet1PosY = wrap.getBoundingClientRect().top;
    }

    racquetH.racquet2PosY += racquetH.racquet2Speed;

    if (racquetH.racquet2PosY + racquetH.height > (wrap.getBoundingClientRect().top + racquetAreaH.height)) {
        racquetH.racquet2PosY = wrap.getBoundingClientRect().top + racquetAreaH.height - racquetH.height;
    }


    if (racquetH.racquet2PosY < wrap.getBoundingClientRect().top) {
        racquetH.racquet2PosY = wrap.getBoundingClientRect().top;
    }


    ballH.posX -= ballH.speedX;

    if ((ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX + ballH.width >= (wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width)) {

        score1 += 1;
        scoreBoardInnerHTML();
        ballH.speedX = 0;
        ballH.speedY = 0;
        messageGoal.innerHTML = messageGoalText;

        ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - ballH.width - 1;

        stopGame()

    } else if (!(ballH.posY + ballH.height < racquetH.racquet2PosY || ballH.posY > (racquetH.racquet2PosY + racquetH.height)) && ballH.posX + ballH.width > (racquetH.racquet2PosX)) {
        ballH.speedX = -ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width - racquetH.width - ballH.width;
    }


    if ((ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX <= (wrap.getBoundingClientRect().left)) {

        score2 += 1;
        scoreBoardInnerHTML();
        ballH.speedX = 0;
        ballH.speedY = 0;
        messageGoal.innerHTML = messageGoalText;
        ballH.posX = wrap.getBoundingClientRect().left + 1;
        stopGame()

    } else if (!(ballH.posY + ballH.height < racquetH.racquet1PosY || ballH.posY > (racquetH.racquet1PosY + racquetH.height)) && ballH.posX < (racquetH.width + racquetH.racquet1PosX)) {
        ballH.speedX = -ballH.speedX;
        ballH.posX = wrap.getBoundingClientRect().left + racquetH.width;
    }

    ballH.posY -= ballH.speedY;

    if (ballH.posY + ballH.height > (wrap.getBoundingClientRect().top + areaH.height)) {
        ballH.speedY = -ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top + areaH.height - ballH.height;
    }


    if (ballH.posY < wrap.getBoundingClientRect().top) {
        ballH.speedY = -ballH.speedY;
        ballH.posY = wrap.getBoundingClientRect().top;
    }

    ballH.update();

    requestAnimationFrame(tick);
}

requestAnimationFrame(tick);

function stopGame() {
    messageGoal.innerHTML = "";
    ballH.speedX = 0;
    ballH.speedY = 0;
}

function startGame() {
    scoreBoardInnerHTML();
    ballH.posX = wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width / 2 - ball.getBoundingClientRect().width / 2
    ballH.posY = wrap.getBoundingClientRect().top + wrap.getBoundingClientRect().height / 2 - ball.getBoundingClientRect().height / 2
    ballH.update();
    ballH.speedX = 6;
    ballH.speedY = 3;
}

