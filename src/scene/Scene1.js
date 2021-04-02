import { renderer } from "../basic/Renderer.js"
import cameraController from "../controllers/CameraController.js"
import shooterSystem from "../shooting/ShooterSystem.js"
import AbstractScene from "./AbstractScene.js"
import plane from '../objects/Plane.js'
import box2 from '../objects/Box2.js'

class Scene1 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        // this.rotation1 = () => {
        //     this.box.rotation.y += 0.01
        // }
    }
    next() {
        this.goTo('scene2')
    }
    start() {
        super.start()
        renderer.setClearColor(0x00ff00, 1);
        // this.machine.addCallback(this.rotation1)
        shooterSystem.start()
        setTimeout(() => {
            this.next()
        }, 1000 * 3);
        this.scene.add(plane)
        cameraController.start(this.box)
        this.scene.add(box2)
        console.log(box2);
    }
    stop(){
        super.stop()
        this.box.rotation.y = 0
        renderer.setClearColor(0x00000, 0);
        // this.machine.removeCallback(this.rotation1)
        shooterSystem.stop()
        cameraController.stop()
        this.scene.remove(plane)
        this.scene.remove(box2)
    }
}

export default Scene1