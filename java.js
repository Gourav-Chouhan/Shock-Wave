/////////////////////////GLOBAL VARIABLE////////////////////////////////

const cvs = document.getElementById("cvs");
const ctx = cvs.getContext("2d");
let vel = 10;
let negativeVel = -vel;
let positiveVel = vel;


////////////////////////ARRAYS//////////////////////////

//OBJECT ARRAY

let color = ["purple"]; //["#FF9933", "#138808", "white", "#000080"];["red", "green", "pink", "brown", "darkorange", "silver", "gold", "white"];


let waveArray = [];
for (let i = 0; i < 1; i++) {
    waveArray[i] = new Waves(200, cvs.height / 2, 0); //Math.random() * cvs.width, Math.random() * cvs.height, 0);
}


//////////////OBJECTS/////////////////////////////



///////////////////////////DRAW FUNCTIONS///////////////////////////////

function draw() {
    canvas();
    for (let i = 0; i < waveArray.length; i++) {
        waveArray[i].draw();
        waveArray[i].expand();
        if (waveArray[i].r == 10) {
            waveArray[i + 1] = new Waves(waveArray[i].x + vel, cvs.height / 2, 0); //waveArray.push()
        }
        if (waveArray[i].r == 250) {
            waveArray.shift();
        }

        if (waveArray[i].x >= cvs.width) {
            vel = negativeVel;
        }
        if (waveArray[i].x < 0) {
            vel = positiveVel;
        }
        // if (waveArray[i].r >= 50 || waveArray[i].r <= 0) {
        //     waveArray[i].v *= -1;
        // }
        // if (waveArray[i].y + waveArray[i].r >= cvs.height) {
        //     waveArray[i].y -= 10;
        //     waveArray[i].vy *= -1;
        // }
        // if (waveArray[i].x + waveArray[i].r >= cvs.width || waveArray[i].x - waveArray[i].r <= 0) {
        //     //waveArray[i].y -= 10;
        //     waveArray[i].vx *= -1;
        // }
    }

}

/////////////////////////////FUNCTIONS///////////////////////////////////

function canvas() {
    ctx.fillStyle = "lightblue";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

function draw_waves() {

}

function Waves(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.v = 5;
    this.g = 0; //.2;
    this.vy = 0;
    this.vx = 0; //Math.random() * 6 - 3;
    this.color = color[Math.floor(Math.random() * color.length)];


    this.draw = function() {
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 3;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.stroke();
    }

    this.expand = function() {
        this.vy += this.g;
        this.y += this.vy;
        this.r += this.v;
        this.x += this.vx;

    }

}

/////////////////////////////SET INTERVAL////////////////////////////////

setInterval(draw, 1000 / 60);