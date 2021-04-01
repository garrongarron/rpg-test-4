import AbstractScene from "./AbstractScene.js"
import { directionalLight } from '../basic/Lights.js'

class Scene1 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        this.rotation1 = () => {
            this.box.rotation.y += 0.01
        }
    }
    next() {
        this.goTo('scene2')
    }
    start() {
        this.camera.position.set(0, 2, -5)
        this.camera.lookAt(this.box.position)
        this.scene.add(directionalLight)
        //Box
        this.scene.add(this.box)
        this.machine.addCallback(this.rotation1)

        setTimeout(() => {
            this.next()
        }, 1000 * 3);
    }
    stop(){
        super.stop()
        this.machine.removeCallback(this.rotation1)
    }
}

export default Scene1