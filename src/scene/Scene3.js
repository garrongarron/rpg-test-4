import finalBoss from "../objects/FinalBoss.js"
import projectileSystem from "../projectile/ProjectileSystem.js"
import AbstractScene from "./AbstractScene.js"

class Scene3 extends AbstractScene {
    next() {
        this.goTo('scene4')
    }
    start() {
        super.start()
        this.scene.add(finalBoss)
        finalBoss.position.set(0, 1, 8);
        projectileSystem.start()
        this.camera.position.set(5, 2, -5)
        this.camera.lookAt(this.box.position)
            // setTimeout(() => {
            //     this.next()
            // }, 1000 * 5);
    }
    stop() {
        super.stop()
        projectileSystem.stop()
        this.scene.remove(finalBoss)
    }
}

export default Scene3