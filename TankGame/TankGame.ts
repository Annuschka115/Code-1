namespace Tankrace {
    type Vector = { x: number, y: number };
    type Tank = {
        element: HTMLSpanElement,
        position: Vector,
        velocity: Vector,
        rotation: number,
    }

    window.addEventListener("load", handleload);
    let tank: Tank;
    let timePreviousFrame:number = 0;
    let Keypress: boolean;
    document.addEventListener("mousemove", handleMoveMouse);
    document.addEventListener("keydown", handleKeys);
    document.addEventListener("keyup", handleKeys);

    function handleload(): void {
        tank = {
            element: document.createElement("span"),
            position: { x: 950, y: 460},
            velocity: { x: 0, y: 0},
            rotation: 0
        }
        document.body.appendChild(tank.element);
        //start game loop
        update(0);
    }

function handleMoveMouse(_event: MouseEvent): void {
    tank.rotation += _event.movementX
}

function handleKeys(_event: KeyboardEvent): void {

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
    if (_event.key == "w" ){
        Keypress = true;
    }
    if (_event.type == "keyup"){
        Keypress = false;
        console.log("AAAAAAAAAAAAAAAAAAAA")
    }
}



function update(_time: number): void {
    
    const timeCurrent: number = Date.now();
    let timeDelta: number = _time - timePreviousFrame;
    timeDelta /= 1000;

     processInput();
    
    move(timeDelta);
    
    timePreviousFrame = _time;
    requestAnimationFrame(update);
}

function processInput(): void {
const radians:number = Math.PI*tank.rotation /180;
    if (Keypress == true){
        tank.velocity.x = 150 * Math.cos(radians);
        tank.velocity.y = 150 * Math.sin(radians);
    }
    if (Keypress == false) {
        tank.velocity.x = 0;
        tank.velocity.y = 0;
        console.log("fchcghfhf");
        
    }
}

    function move(_timeDelta: number): void {
        // tank.rotation += 1;
        const matrix: string = createMatrix(tank.position, tank.rotation, { x: 40, y: 20 }); 
        tank.element.style.transform = matrix;
        tank.position.x += tank.velocity.x * _timeDelta;
        tank.position.y += tank.velocity.y * _timeDelta;
    }

    function createMatrix(_translation: Vector, _rotation: number, _scale: Vector): string {
        const sin: number = Math.sin(Math.PI * _rotation / 180);
        const cos: number = Math.cos(Math.PI * _rotation / 180);
        const matrix: number[] = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];

        return "matrix(" + matrix.toString() + ")";
    }
}