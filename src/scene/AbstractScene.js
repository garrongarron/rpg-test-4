import scene from '../basic/Scene.js'
import camera from '../basic/Camera.js'
import box from '../objects/Box.js'
import machine from '../basic/Machine.js'
import { directionalLight } from '../basic/Lights.js'

class AbstractScene{
    constructor(goTo){
        this.scene = scene
        this.goTo = goTo
        this.camera = camera
        this.machine = machine
        this.box = box
    }
    next(){
        this.goTo('scene1')
    }
    start(){
        this.scene.add(this.box)
        this.camera.position.set(0, 2, -5)
        this.camera.lookAt(this.box.position)
        this.scene.add(directionalLight)
        if(false) this.next()
    }
    stop(){
        this.scene.remove(this.box)
        this.scene.remove(directionalLight)
    }
}

export default AbstractScene