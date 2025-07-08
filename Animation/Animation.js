"use strict";
// function.checkCollisionAll(): void {
// for (const a in balls){                                      for ... in vs for ... of anschauen
//     for (const b: number = a+1; b < balls.length; b++)
//         console.log(a, b);
// }
// }
window.addEventListener("load", handleLoad);
const NumberBalls = Number(prompt("How many balls do you want?"));
const speed = Number(prompt("How fast should the balls be able to move?")); //dass man die min/max geschwindigkeit einstellen kann
const ballSize = 10;
let timePreviousFrame = Date.now();
const balls = [];
function handleLoad() {
    document.body.addEventListener("click", handlerClick);
    animate();
}
function createBall() {
    const el = document.createElement("span");
    el.className = "ball";
    document.body.appendChild(el);
    const timeCurrent = Date.now();
    let timeDelta = timeCurrent - timePreviousFrame;
    timeDelta /= 1000;
    const x = Math.random() * (window.innerWidth - ballSize);
    const y = Math.random() * (window.innerHeight - ballSize);
    let vx = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vx === 0)
        vx = 1;
    let vy = (Math.random() - 0.5) * 2 * speed * timeDelta;
    if (vy === 0)
        vy = 1;
    //const vx = 3
    //const vy = 10
    return { element: el, x, y, vx, vy };
}
for (let i = 0; i < NumberBalls; i++) {
    balls.push(createBall());
}
function animate() {
    for (const ball of balls) {
        ball.x += ball.vx;
        ball.y += ball.vy;
        if (ball.x <= 0) {
            ball.x = 0;
            ball.vx *= -1;
        }
        else if (ball.x >= window.innerWidth - ballSize) {
            ball.x = window.innerWidth - ballSize;
            ball.vx *= -1;
        }
        if (ball.y <= 0) {
            ball.y = 0;
            ball.vy *= -1;
        }
        else if (ball.y >= window.innerHeight - ballSize) {
            ball.y = window.innerHeight - ballSize;
            ball.vy *= -1;
        }
        ball.element.style.transform = `matrix(2,0,0,2,${ball.x},${ball.y})`;
    }
    requestAnimationFrame(animate);
}
function handlerClick(_event) {
    console.log("It worked");
    let element = _event.target;
    console.log(element);
    for (let ball of balls) {
        if (ball.element == element) {
            //document.body.removeChild(element)
            element.remove();
        }
    }
}
/*Was zu tun ist:
1.Ball in Css machen
2.Ball als Span in HTML machen
3.Ball animation in ts machen
4.Positionen in ts definieren
5.Ball bewegen (Zeitbasiert nicht framebasiert)
6.Loop erstellen für Ball generieren


Step 2:
1. machen dass Ball bei klicken gelöscht wird/ danach generiert wird
2. machen dass Ball mit anderen Bällen kollidieren kann

*/ 
