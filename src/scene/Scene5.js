import AbstractScene from "./AbstractScene.js"
import item from '../objects/Box2.js'
import cameraController from "../controllers/CameraController.js"
import CollisionSystem from "../collisions/CollisionSystem.js"

class Scene5 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        this.isColliderDetectorActive = false
        this.toggle = (e) => {
            if (e.keyCode != 13) return
            this.isColliderDetectorActive = !this.isColliderDetectorActive
            alert("The collider detector is " + ((this.isColliderDetectorActive) ? 'enabled' : 'disabled'))
        }

        this.collisionSystem = new CollisionSystem(this.scene)
        this.collisionSystem.setData([
            { x: 4, z: 4 },
            { x: 4, z: 0 },
            { x: 0, z: 4 },
            { x: 0, z: -4 },
            { x: -4, z: -4 },
            { x: -4, z: 0 },
        ], item)

    }

    next() {
        this.goTo('scene1')
    }

    start() {
        super.start()
        this.collisionSystem.show()
        cameraController.start(this.box)
        document.addEventListener('keydown', this.toggle)
        //the validation
        cameraController.setCallback(()=>{
            if (this.isColliderDetectorActive) {
                this.collisionSystem.run(this.box)
            }
        })
        
        setTimeout(() => {
            this.next()
        }, 1000*15);

    }

    stop() {
        super.stop()
        this.collisionSystem.hide()
        cameraController.stop()
        document.removeEventListener('keydown', this.toggle)
    }
}

export default Scene5