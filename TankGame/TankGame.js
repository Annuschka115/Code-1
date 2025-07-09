"use strict";
var Tankrace;
(function (Tankrace) {
    window.addEventListener("load", handleload);
    let tank;
    let timePreviousFrame = 0;
    let Keypress;
    document.addEventListener("mousemove", handleMoveMouse);
    document.addEventListener("keydown", handleKeys);
    document.addEventListener("keyup", handleKeys);
    function handleload() {
        tank = {
            element: document.createElement("span"),
            position: { x: 100, y: 100 },
            velocity: { x: 0, y: 0 },
            rotation: 0
        };
        document.body.appendChild(tank.element);
        //start game loop
        update(0);
    }
    function handleMoveMouse(_event) {
        tank.rotation += _event.movementX;
    }
    function handleKeys(_event) {
        // const radians:number = Math.PI*tank.rotation /180;
        // if (_event.type == "keyup"){
        //     tank.velocity.x = 0;
        //     tank.velocity.y = 0;
        //     return;
        // }
        // switch (_event.key){
        //     case "w":
        //     case "ArrowUp":
        //         console.log("w")
        //         tank.velocity.x = 150 * Math.cos(radians);
        //         tank.velocity.y = 150 * Math.sin(radians);
        //         break;
        //     case "ArrowDown":
        //         tank.velocity.x = 150 * Math.cos(radians);
        //         tank.velocity.y = 150 * Math.sin(radians);
        // }
        if (_event.key == "w") {
            Keypress = true;
        }
        if (_event.type == "keyup") {
            Keypress = false;
            console.log("AAAAAAAAAAAAAAAAAAAA");
        }
    }
    function update(_time) {
        const timeCurrent = Date.now();
        let timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        processInput();
        move(timeDelta);
        timePreviousFrame = _time;
        requestAnimationFrame(update);
    }
    function processInput() {
        const radians = Math.PI * tank.rotation / 180;
        if (Keypress == true) {
            tank.velocity.x = 150 * Math.cos(radians);
            tank.velocity.y = 150 * Math.sin(radians);
        }
        if (Keypress == false) {
            tank.velocity.x = 0;
            tank.velocity.y = 0;
            console.log("fchcghfhf");
        }
    }
    function move(_timeDelta) {
        // tank.rotation += 1;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 });
        tank.element.style.transform = matrix;
        tank.position.x += tank.velocity.x * _timeDelta;
        tank.position.y += tank.velocity.y * _timeDelta;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
})(Tankrace || (Tankrace = {}));
//# sourceMappingURL=TankGame.js.map