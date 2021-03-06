import AbstractScene from "./AbstractScene.js"
import item from '../objects/Box2.js'
import cameraController from "../controllers/CameraController.js"
import CollisionSystem from "../collisions/CollisionSystem.js"
import plim from "../audios/AudioManager.js"
import inventory from "../inventory/Inventory.js"


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
        inventory.start()
        cameraController.start(this.box)
        this.collisionSystem.show()
        document.addEventListener('keydown', this.toggle)
        cameraController.moveCallback(() => {
            if (this.isColliderDetectorActive) {
                this.collisionSystem.run(this.box)
            }
        })
        this.collisionSystem.setCallback(() => {
            plim()//audio
            inventory.addItem(1, inventory.types.gold)
        })

    }

    stop() {
        super.stop()
        this.collisionSystem.hide()
        cameraController.stop()
        document.removeEventListener('keydown', this.toggle)
        inventory.stop()
    }
}

export default Scene5