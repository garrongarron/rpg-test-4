let canvas, requestPointerLockFunction

let delta = {
    x: 0,
    y: 0,
}
let acumulated = {
    x: 0,
    y: 0,
}

let setAcumulated = (newAcumulated) =>{
    acumulated = newAcumulated
}
let updatePosition = (e) => {
    delta.x = e.movementX;
    delta.y = e.movementY;
    acumulated.x += e.movementX;
    acumulated.y += e.movementY;
}

let lockChangeAlert = () => {
    if (document.pointerLockElement === canvas ||
        document.mozPointerLockElement === canvas) {
        // console.log('The pointer lock status is now locked');
        document.addEventListener("mousemove", updatePosition, false);
    } else {
        // console.log('The pointer lock status is now unlocked');
        document.removeEventListener("mousemove", updatePosition, false);
    }
}

let start = () => {
    canvas = document.querySelector('canvas');

    canvas.requestPointerLock = canvas.requestPointerLock ||
        canvas.mozRequestPointerLock;


    document.exitPointerLock = document.exitPointerLock ||
        document.mozExitPointerLock;

    requestPointerLockFunction = () =>{
        canvas.requestPointerLock();
    };


    canvas.addEventListener('click', requestPointerLockFunction)
    document.addEventListener('pointerlockchange', lockChangeAlert, false);
    document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
}

let stop = () => {
    canvas.removeEventListener('click', requestPointerLockFunction)
    document.removeEventListener("mousemove", updatePosition);
    document.removeEventListener('pointerlockchange', lockChangeAlert);
    document.removeEventListener('mozpointerlockchange', lockChangeAlert);
}

export default start
export { acumulated, delta , stop, setAcumulated}