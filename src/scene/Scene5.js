import AbstractScene from "./AbstractScene.js"
import { Box3 } from 'three'
import item from '../objects/Box2.js'
import cameraController from "../controllers/CameraController.js"

class Scene5 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        this.colliderDetector = () => {
            this.aabbBoxContainer.setFromObject(this.box)
            if (this.aabbBoxContainer.intersectsBox(this.aabbItemContainer)) {
                this.scene.remove(item)
            }
        }
        this.aabbBoxContainer = new Box3();
        this.aabbItemContainer = new Box3();
        
        //toggle system
        this.isColliderDetectorActive = false
        this.toggle = (e) => {
            if (e.keyCode != 13) return
            this.isColliderDetectorActive = !this.isColliderDetectorActive
            alert("The collider detector is "+((this.isColliderDetectorActive)?'enabled':'disabled'))
            if (this.isColliderDetectorActive) {
                this.machine.addCallback(this.colliderDetector)
            } else {
                this.machine.removeCallback(this.colliderDetector)
            }
        }
    }
    next() {
        this.goTo('scene1')
    }
    start() {
        super.start()
        this.scene.add(item)
        this.aabbItemContainer.setFromObject(item)

        //camera controller
        cameraController.start(this.box)

        document.addEventListener('keydown', this.toggle)
    }

    stop() {
        super.stop()
        this.scene.remove(item)
        // this.scene.remove(item)
        cameraController.stop()
        this.machine.removeCallback(this.colliderDetector)
        document.removeEventListener('keydown', this.toggle)
    }
}

export default Scene5