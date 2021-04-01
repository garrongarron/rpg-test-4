import AbstractScene from "./AbstractScene.js"
import { directionalLight } from '../basic/Lights.js'

class Scene2 extends AbstractScene {
    next() {
        this.goTo('scene1')
    }
    start() {
        this.scene.add(this.box)
        this.box.rotation.y = 0 * Math.PI / 180
        this.camera.position.set(0, 2, -5)
        this.camera.lookAt(this.box.position)
        this.scene.add(directionalLight)
        setTimeout(() => {
            this.next()
        }, 1000 * 3);
    }
}

export default Scene2