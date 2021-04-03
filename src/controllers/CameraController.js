import mouse, { acumulated } from '../basic/Mouse.js'
import machine from '../basic/Machine.js'
import camera from '../basic/Camera.js'
import keyListener from '../basic/KeyListener.js'
import { getDelta } from '../basic/Clock.js'
import { MathUtils } from 'three'

class CameraController{
    constructor(){
        this.interpolation = .99
        this.rotation = 0
        this.gap = 20
        this.rotationWithGap = 0
        this.radio = 10
        this.speed = 15
        this.lastN = []
        this.rotationSpeed = 20
        this.characterHeight = 3
        this.cameraAngle = 3
        this.target = null
        this.callback = null
        this.controller = () => {
            if (this.target) {
                
                let angleRotation = (acumulated.x / this.rotationSpeed)
                this.rotation = - (angleRotation) * Math.PI / 180
                this.rotationWithGap = - (angleRotation + this.gap) * Math.PI / 180
                let rotationWithGap2 = - (angleRotation + this.gap / 2) * Math.PI / 180
        
                let x = this.target.position.x - Math.sin(this.rotation) * this.radio;
                camera.position.x = MathUtils.lerp(camera.position.x, x, this.interpolation)
        
                let z = this.target.position.z - Math.cos(this.rotation) * this.radio;
                camera.position.z = MathUtils.lerp(camera.position.z, z, this.interpolation)
        
                this.cameraAngle = acumulated.y / 100
        
                camera.position.y = this.characterHeight + this.cameraAngle
        
                let opositeCamPosition = {
                    position: {
                        x: this.target.position.x + Math.sin(this.rotationWithGap) * this.radio,
                        z: this.target.position.z + Math.cos(this.rotationWithGap) * this.radio
                    }
                }
        
                camera.lookAt(opositeCamPosition.position.x, this.target.position.y - this.cameraAngle, opositeCamPosition.position.z)
        
                let n = getDelta()
                this.lastN.push(n)
                if (this.lastN.length > 10) {
                    n = this.lastN.reduce((a, b) => a + b, 0) / 11;
                    this.lastN.shift()
                    // console.log(11);
                }

                if (keyListener.isPressed(87)) {
                    this.target.rotation.y = rotationWithGap2
                    this.target.position.x += Math.sin(rotationWithGap2) * this.speed * n
                    this.target.position.z += Math.cos(rotationWithGap2) * this.speed * n
                    this.emit()
                }
                if (keyListener.isPressed(83)) {
                    this.target.rotation.y = rotationWithGap2
                    this.target.position.x -= Math.sin(rotationWithGap2) * this.speed * n
                    this.target.position.z -= Math.cos(rotationWithGap2) * this.speed * n
                    this.emit()
                }
            }
        }
    }
    start(t){
        mouse.start()
        this.target = t
        keyListener.start()
        machine.addCallback(this.controller)
    }
    stop(){
        mouse.stop()
        keyListener.stop()
        machine.removeCallback(this.controller)
        this.target = null
        this.callback = null
    }
    emit(){
        if(this.callback != null){
            this.callback()
        }
    }
    setCallback(callback){
        this.callback = callback
    }

    // setTarget(t){
    //     this.target = t
    // }
}

const cameraController = new CameraController()
export default cameraController