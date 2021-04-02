import { renderer } from "../basic/Renderer.js"
import cameraController from "../controllers/CameraController.js"
import shooterSystem from "../shooting/ShooterSystem.js"
import AbstractScene from "./AbstractScene.js"
import plane from '../objects/Plane.js'
import box2 from '../objects/Box2.js'

class Scene1 extends AbstractScene {
    
    next() {
        this.goTo('scene2')
    }
    
    start() {
        super.start()
        renderer.setClearColor(0x00ff00, 1);
        shooterSystem.start()
        setTimeout(() => {
            this.next()
        }, 1000 * 5);
        this.scene.add(plane)
        cameraController.start(this.box)
        this.scene.add(box2)
    }

    stop(){
        super.stop()
        this.box.rotation.y = 0
        renderer.setClearColor(0x00000, 0);
        shooterSystem.stop()
        cameraController.stop()
        this.scene.remove(plane)
        this.scene.remove(box2)
    }
}

export default Scene1