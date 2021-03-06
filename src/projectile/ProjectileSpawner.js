import { Vector3 } from "three"
import { getDelta } from "../basic/Clock.js"
import machine from "../basic/Machine.js"
import scene from "../basic/Scene.js"
import moveAhead from "../displacement/Displacement.js"
import projectile from "../objects/Projectile.js"
import pointer from "../shooting/Pointer.js"

class ProjectileSpawner {
    constructor(projectile, q, speed) {
        this.projectile = projectile
        this.q = q
        this.speed = speed
        this.container = []
        this.pointer = 0
        this.callbacks = []

    }
    start() {
        if (this.container.length == 0) this.init()
    }

    stop() {
        this.container.forEach((element, index) => {
            scene.remove(element)
            machine.removeCallback(this.callbacks[index])
        });
    }

    init() {
        for (let index = 0; index < this.q; index++) {
            let p = this.projectile.clone()
            this.container.push(p)
            this.callbacks[index] = () => {
                let projectile = this.container[index]
                let colision = moveAhead(projectile, this.speed)
                if (colision) {
                    machine.removeCallback(this.callbacks[index])
                }
            }
        }
    }

    shoot(position, rotation) {
        let index = (this.container[++this.pointer]) ? this.pointer : 0
        this.pointer = index

        if (position) this.container[index].position.set(position.x, position.y, position.z)
        if (rotation) this.container[index].setRotationFromQuaternion(rotation)

        this.setVerticalSpeed(this.container[index])
        scene.add(this.container[index])
        machine.removeCallback(this.callbacks[index])
        machine.addCallback(this.callbacks[index])
    }
    setVerticalSpeed(projectile) {
        let vOut = new Vector3()
        vOut = projectile.getWorldDirection(vOut)
        projectile.verticalSpeed = vOut.y * getDelta()
    }



}

let projectileSpawner = new ProjectileSpawner(projectile, 5, 60)

export default projectileSpawner