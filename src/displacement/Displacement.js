import { getDelta } from "../basic/Clock.js"
import { Vector3, Raycaster, ArrowHelper } from 'three';
import scene from "../basic/Scene.js";

let moveAhead = (object, speed) => {
    let originalPosition = object.position.clone()
    let vOut = new Vector3()
    vOut = object.getWorldDirection(vOut)
    let movement = vOut.multiplyScalar(speed * getDelta())
    object.position.add(movement)
    let ray = new Raycaster(
        originalPosition,
        movement.normalize(),
        speed * getDelta(),
        speed * getDelta() * 2 + 0.1
    );

    return ray.intersectObjects(scene.children, true)[0];
}

export default moveAhead