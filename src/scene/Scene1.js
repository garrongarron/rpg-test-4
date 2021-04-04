import { renderer } from "../basic/Renderer.js"
import cameraController from "../controllers/CameraController.js"
import shooterSystem from "../shooting/ShooterSystemTowerDefence.js"//Warning
import AbstractScene from "./AbstractScene.js"
import plane from '../objects/Plane.js'
import box2 from '../objects/Box2.js'
import castle from '../objects/Castle.js'

class Scene1 extends AbstractScene {

    next() {
        this.goTo('scene2')
    }

    start() {
        super.start()
        renderer.setClearColor(0x00ff00, 1);
        shooterSystem.start()
        // setTimeout(() => {
        //     this.next()
        // }, 1000 * 15);
        this.scene.add(plane)
        this.box.position.set(0, 2.5, 0)
        cameraController.start(this.box)

        box2.position.set(20, .5, 0)
        this.scene.add(box2)
        this.scene.add(castle)
    }

    stop() {
        super.stop()
        this.box.rotation.y = 0
        this.box.position.set(0, 0, 0)
        this.camera.position.set(0, 2, -7);
        renderer.setClearColor(0x00000, 0);
        shooterSystem.stop()
        cameraController.stop()
        this.scene.remove(plane)
        box2.position.set(2, 0, 0)
        this.scene.remove(box2)
        this.scene.remove(castle)
    }
}

export default Scene1