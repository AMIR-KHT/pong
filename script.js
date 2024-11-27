let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;
let c = canvas.getContext("2d");

let BoxMove = false;
let BoxY = 50;
let BoxX = window.innerWidth / 2;
let BoxSP = 1;

let Boxtxt = ["Size +","Size -","back","ball +","ball -"];
let boxtxt2 = "";
let boxWhich = 0;

let sizeup = false;

// function SizeBox(){
//     c.fillStyle = "gold";
//     c.fillText("SizeUP",window.innerWidth / 2,BoxY);
// }

let score1 = 0, score2 = 0;
let speed = [-7, 7];

let paddle2X = window.innerWidth - 35;
let paddle2Y = window.innerHeight / 2 - 100;
c.fillStyle = "red";
let paddle1X = 20;
let paddle1Y = window.innerHeight / 2 - 100;
paddle1Color = "red";
paddle2Color = "aqua";

let paddle1H = 150;
let paddle2H = 150;
c.fillRect(paddle1X, paddle1Y, 20, paddle1H);

c.fillStyle = "aqua";
c.fillRect(paddle2X, paddle2Y, 20, paddle2H);


let ballX = window.innerWidth / 2;
let ballY = window.innerHeight / 2;
let ballColor = "white";

let r = 10;

c.beginPath();
c.arc(ballX, ballY, r, 0, Math.PI * 2);
c.fillStyle = "white";
c.fill();
c.closePath();

let paddle1Speed = 0, paddle2Speed = 0, ballSpeedY = speed[random(0, 1)], ballSpeedX = speed[random(0, 1)];

let goodHit1 = 0, goodHit2 = 0;


function frame() {
    draw();

    if(BoxMove == false){
        timeout();
    }

    if(BoxY >= window.innerHeight+50){
        BoxY = -30;
        BoxMove = false;
    }

    // if(boxtxt2 == "Size +"){
    //     if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
    //         BoxY = -30;
    //         BoxMove = false;
    //         if(paddle1H < 190){
    //              paddle1H += 40;
    //         }
    //     }

    if(boxWhich == 1){
        if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            if(paddle1H < 190){
                 paddle1H += 40;
            }
        }
    
        if(ballSpeedX <= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            if(paddle2H < 190){
                 paddle2H += 40;
            }
        }
    }

    // if(boxtxt2 == "Size -"){
    //     if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
    //         BoxY = -30;
    //         BoxMove = false;
    //         if(paddle1H > 110){
    //              paddle1H -= 40;
    //         }
    //     }

    if(boxWhich == 2){
        if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            if(paddle1H > 110){
                 paddle1H -= 40;
            }
        }
    
        if(ballSpeedX <= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            if(paddle2H > 110){
                 paddle2H -= 40;
            }
        }
    }

    if(boxWhich == 3){
        if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY =-30;
            BoxMove = false;
            ballSpeedX = -ballSpeedX;
            ballSpeedY = -ballSpeedY;
            boxWhich = 0;
        }
        if(ballSpeedX <= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            ballSpeedX = -ballSpeedX;
            ballSpeedY = -ballSpeedY;
            boxWhich = 0;
        }

        

    }

    if(boxWhich == 4){
        if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            r = 35;
        }
        if(ballSpeedX <= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            r = 35;
        }
    }else if(boxWhich != 5){
        r = 10;
    }

    if(boxWhich == 5){
        if(ballSpeedX >= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            r = 5;
        }
        if(ballSpeedX <= 0 && ballX > BoxX-10 && ballX <= BoxX+120 && ballY > BoxY-10 && ballY <= BoxY+20){
            BoxY = -30;
            BoxMove = false;
            r = 5;
        }
    }else if(boxWhich != 4){
        r = 10;
    }

    //(ballX <= paddle1X + 20 && ballY + r >= paddle1Y - 15 && ballY + r < paddle1Y + paddle1H+25)
    // Check collision with left paddle
    if (ballX - r <= paddle1X + 25 && ballY + r >= paddle1Y-5  && ballY - r <= paddle1Y + paddle1H+5 && ballSpeedX <0) {
        if(goodHit1 == 0){
            document.querySelector("#r").innerHTML = "";
            document.querySelector("#b").innerHTML = "";
        }
        if (Math.abs(ballSpeedX) < 30) { // Maximum speed is 30
            ballSpeedX *= 1.2; // increase speed
            ballSpeedY *= 1.05;
            // document.querySelector("#r").innerHTML = "";
            // document.querySelector("#b").innerHTML = "";
            // document.querySelector("#r").innerHTML = `x${goodHit1} Combo !`;
        }
        ballSpeedX = -ballSpeedX; // reverse direction
        
        if (paddle1Speed > 0 && ballSpeedY < 0) {
            ballSpeedY = -ballSpeedY;
        }
        if (paddle1Speed < 0 && ballSpeedY > 0) {
            ballSpeedY = -ballSpeedY;
        }

    //     if (Math.abs(ballSpeedX) >= 25) {
    //         if (ballX <= paddle1X + 20 && ballY > paddle1Y + 30 && ballY < paddle1Y + 110) {
    //             goodHit1++;
    //             document.querySelector("#r").innerHTML = `x${goodHit1} Combo !`;
    //             console.log('lo', goodHit1)
    //             if (goodHit1 >= 3) {
    //                 ballSpeedX *= 2;
    //                 ballSpeedY *= 1.6;
    //                 goodHit1 = 0;
    //                 document.querySelector("#r").innerHTML = "BOOOOOM!!!";
    //             }
    //     }
    //     else {
    //         goodHit1 = 0;
    //     }
    // }

    if (ballX <= paddle1X + 20 && ballY > paddle1Y + 30 && ballY < paddle1Y + 110) {
        if (Math.abs(ballSpeedX) >= 25) {
            goodHit1++;
            document.querySelector("#r").innerHTML = `x${goodHit1} Combo !`;
            console.log('lo', goodHit1)
            if (goodHit1 >= 3) {
                 ballSpeedX *= 2;
                 ballSpeedY *= 1.6;
                 goodHit1 = 0;
                 document.querySelector("#r").innerHTML = "BOOOOOM!!!";
            }
        }else{
            goodHit1 = 0;
            document.querySelector("#r").innerHTML = "";
        }
    }else{
        goodHit1 = 0;
        document.querySelector("#r").innerHTML = "";
    }
}

    if (ballY <= 0 + 10 || ballY >= window.innerHeight - 10) {
        ballSpeedY = -ballSpeedY
    }


    if (ballX >= paddle2X - 20 && ballY + r >= paddle2Y - 5 && ballY - r <= paddle2Y + paddle2H+5 && ballSpeedX > 0) {
        if(goodHit2 == 0){
            document.querySelector("#b").innerHTML = ""
            document.querySelector("#r").innerHTML = "";
        }
        if (ballSpeedX < 30 && ballSpeedX > -30) {
            ballSpeedX *= 1.2;
            ballSpeedY *= 1.05;
            // document.querySelector("#r").innerHTML = "";
            // document.querySelector("#b").innerHTML = "";
            // document.querySelector("#b").innerHTML = `x${goodHit1} Combo !`;
        }

        ballSpeedX = -ballSpeedX
        if (paddle2Speed > 0 && ballSpeedY < 0) {
            ballSpeedY = -ballSpeedY;
        }
        if (paddle2Speed < 0 && ballSpeedY > 0) {
            ballSpeedY = -ballSpeedY;
        }

        // if (Math.abs(ballSpeedX) >= 25) {
        //     if (ballX >= paddle2X - 10 && ballY > paddle2Y + 30 && ballY < paddle2Y + 110) {
        //         goodHit2++;
        //         document.querySelector("#b").innerHTML = `x${goodHit2} Combo !`;
        //     document.querySelector("#b").innerHTML = "";
        //         console.log('lo', goodHit2)
        //         if (goodHit2 >= 3) {
        //             ballSpeedX *= 2;
        //             ballSpeedY *= 1.6;
        //             goodHit2 = 0;
        //             document.querySelector("#b").innerHTML = "BOOOOOM!!!";
        //         }
        //     } else {
        //         goodHit2 = 0;
        //     }
        // }

        if (ballX + r >= paddle2X - 10 && ballY > paddle2Y + 30 && ballY < paddle2Y + 110) {
            if (Math.abs(ballSpeedX) >= 25) {
                goodHit2++;
                document.querySelector("#b").innerHTML = `x${goodHit2} Combo !`;
                console.log('lo', goodHit1)
                if (goodHit2 >= 3) {
                    ballSpeedX *= 2;
                    ballSpeedY *= 1.6;
                    goodHit2 = 0;
                    document.querySelector("#b").innerHTML = "BOOOOOM!!!";
                }
            }else{
                goodHit2 = 0;
                document.querySelector("#b").innerHTML = "";
            }

        }else{
            goodHit2 = 0;
            document.querySelector("#b").innerHTML = "";
        }
    }





    if (ballX <= 0) {

        score2++
        document.querySelector("#bs").innerHTML = score2
        ballX = window.innerWidth / 2;
        ballY = window.innerHeight / 2;
        ballSpeedY = speed[random(0, 1)];
        ballSpeedX = speed[random(0, 1)];
    }
    // y=window.innerWidth / 2;
    // x=window.innerWidth / 2;

    //     }
    if (ballX >= window.innerWidth) {
        score1++
        document.querySelector("#rs").innerHTML = score1;
        ballX = window.innerWidth / 2;
        ballY = window.innerHeight / 2;
        ballSpeedY = speed[random(0, 1)];
        ballSpeedX = speed[random(0, 1)];
    }






    if (paddle1Y + paddle1H < window.innerHeight && paddle1Speed > 0) {
        paddle1Y += paddle1Speed;
    } else if (paddle1Y > 0 && paddle1Speed < 0) {
        paddle1Y += paddle1Speed;
    }

    if (paddle2Y + paddle2H < window.innerHeight && paddle2Speed > 0) {
        paddle2Y += paddle2Speed;
    } else if (paddle2Y > 0 && paddle2Speed < 0) {
        paddle2Y += paddle2Speed;
    }

    requestAnimationFrame(frame);

    function draw() {

        // if(BoxMove == false){
        //     setTimeout(e=>{
        //         if(paddle1H > 150){
        //             paddle1H-=40;
        //         }
        //         BoxMove = true;
        //     },6000)
        // }

        c.clearRect(0, 0, canvas.width, canvas.height);

        if(BoxMove == null){
            c.fillStyle = "gold";
            c.fillText
            c.font = "30px Arial";
            c.fillText(boxtxt2,BoxX,BoxY+=1);
        }
        c.beginPath();
        c.arc(ballX += ballSpeedX, ballY += ballSpeedY, r, 0, Math.PI * 2); // circle

        if(document.querySelector("#r").innerHTML == "BOOOOOM!!!" || document.querySelector("#b").innerHTML == "BOOOOOM!!!"){
            c.shadowColor = "orange";
            c.shadowBlur = 25;
            ballColor = "yellow"
        }else{
            c.shadowColor = "black";
            c.shadowBlur = 0;
            ballColor = "white"
        }

        c.fillStyle = ballColor;
        c.fill();
        if(document.querySelector("#r").innerHTML == "BOOOOOM!!!"){
            c.shadowColor = "orange";
            c.shadowBlur = 25;
            ballColor = "yellow"
        }else{
            c.shadowColor = "black";
            c.shadowBlur = 0;
            ballColor = "white"
        }
        c.fillStyle = "red";
        c.fillRect(paddle1X, paddle1Y, 10, paddle1H);

        if(document.querySelector("#b").innerHTML == "BOOOOOM!!!"){
            c.shadowColor = "orange";
            c.shadowBlur = 25;
            ballColor = "yellow"
        }else{
            c.shadowColor = "black";
            c.shadowBlur = 0;
            ballColor = "white"
        }
        c.fillStyle = "aqua";
        c.fillRect(paddle2X, paddle2Y, 10, paddle2H)
    }
}




document.body.addEventListener('keydown', e => {
    console.log(e.key)
    if (e.key == "w") {
        paddle1Speed = -12
    }
    if (e.key == "s") {
        paddle1Speed = +12
    }
    if (e.key == 'ArrowUp') {
        paddle2Speed = -12
    }
    if (e.key == 'ArrowDown') {
        paddle2Speed = +12
    }
})
document.body.addEventListener('keyup', e => {
    console.log(e.key)
    if (e.key == "w") {
        paddle1Speed = 0
    }
    if (e.key == "s") {
        paddle1Speed = 0
    }
    if (e.key == 'ArrowUp') {
        paddle2Speed = 0
    }
    if (e.key == 'ArrowDown') {
        paddle2Speed = 0
    }
})
requestAnimationFrame(frame);
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function timeout(){
    BoxMove = true;

    setTimeout(e=>{
        if(paddle1H > 150){
            paddle1H-=40;
        }
        if(paddle2H > 150){
            paddle2H-=40;
        }

        if(paddle1H < 150){
            paddle1H+=40;
        }
        if(paddle2H < 150){
            paddle2H+=40;
        }


        BoxMove = null;
        boxtxt2 = Boxtxt[random(0,4)];
        if(boxtxt2 == Boxtxt[0]){
            boxWhich = 1;
        }else if(boxtxt2 == Boxtxt[1]){
            boxWhich = 2;
        }else if(boxtxt2 == Boxtxt[2]){
            boxWhich = 3;
        }else if(boxtxt2 == Boxtxt[3]){
            boxWhich = 4;
        }else if(boxtxt2 == Boxtxt[4]){
            boxWhich = 5;
        }
        boxtxt2 = "take me";
    },10000)
}