import machine from "../basic/Machine.js"
import scene from "../basic/Scene.js"
import moveAhead from "../displacement/Displacement.js"
import projectile from "../objects/Projectile.js"

class ProjectileSystem {
    constructor(projectile) {
        this.q = 5
        this.container = []
        this.pointer = 0
        this.callbacks = []
        this.projectile = projectile
    }
    start() {
        if (this.container.length == 0) this.fillContainer()
        setInterval(() => {
            this.shoot(this.projectile.position, this.projectile.rotation)
        }, 3 * 1000);
    }

    stop() {
        this.container.forEach((element, index) => {
            scene.remove(element)
            machine.removeCallback(this.callbacks[index])
        });
    }

    fillContainer() {
        for (let index = 0; index < this.q; index++) {
            let p = this.projectile.clone()
            this.container.push(p)
            this.callbacks[index] = () => {
                let projectile = this.container[index]
                let colision = moveAhead(projectile, 40)
                if (colision) {
                    // scene.remove(projectile)
                    console.log(colision.object.attach(projectile));
                    machine.removeCallback(this.callbacks[index])
                }
            }
        }
    }

    shoot(position, rotation) {
        let index = (this.container[++this.pointer]) ? this.pointer : 0
        this.pointer = index

        if (position) this.container[index].position.set(position.x, position.y, position.z)
        if (rotation) this.container[index].rotation.set(rotation.x, rotation.y, rotation.z)

        scene.add(this.container[index])
        machine.removeCallback(this.callbacks[index])
        machine.addCallback(this.callbacks[index])
    }
}

let projectileSystem = new ProjectileSystem(projectile)

export default projectileSystem