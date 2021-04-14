import { getDelta } from "../basic/Clock.js"
import { Vector3, Raycaster, ArrowHelper } from 'three';
import scene from "../basic/Scene.js";

let moveAhead = (projectile, speed) => {
    let gravity = 0.28
    let originalPosition = projectile.position.clone()
    if (projectile.verticalSpeed) {
        projectile.verticalSpeed -= (gravity * getDelta() + projectile.verticalSpeed * gravity * getDelta()) * getDelta()
            // projectile.position.y += projectile.verticalSpeed
    }

    let vOut = new Vector3()
    vOut = projectile.getWorldDirection(vOut)
    vOut.y += projectile.verticalSpeed
    let movement = vOut.multiplyScalar(speed * getDelta())
    projectile.lookAt(movement.clone().add(projectile.position))
    projectile.position.add(movement)
    let ray = new Raycaster(
        originalPosition,
        movement.normalize(),
        speed * getDelta(),
        speed * getDelta() * 2 + 0.1
    );
    return ray.intersectObjects(scene.children, true)[0];
}

export default moveAhead