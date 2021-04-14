import cameraController from "../controllers/CameraController.js"
import finalBoss from "../objects/FinalBoss.js"
import bullet from "../objects/Sphere.js"
import projectileSystem from "../projectile/ProjectileSystem.js"
import AbstractScene from "./AbstractScene.js"

class Scene3 extends AbstractScene {
    next() {
        this.goTo('scene4')
    }
    start() {
        this.box.position.set(0, 2.5, 0)
        super.start()

        cameraController.start(this.box)
        bullet.position.set(-1, 0, 0)
        this.box.add(bullet)

        this.scene.add(finalBoss)
        finalBoss.position.set(0, 1, 8);
        projectileSystem.start(bullet)

        // setTimeout(() => {
        //     this.next()
        // }, 1000 * 5);
    }
    stop() {
        super.stop()

        cameraController.stop()
        projectileSystem.stop()
        this.scene.remove(finalBoss)
    }
}

export default Scene3