import machine from '../basic/Machine.js'
import camera from '../basic/Camera.js'
import scene from '../basic/Scene.js'
import keyListener from '../basic/KeyListener.js'
import pointer from './Pointer.js'
import {Raycaster, Vector2, Mesh, SphereGeometry, MeshStandardMaterial} from 'three'


class ShooterSystem
{
    constructor(){
        this.shooting = false
        this.mousedown = () => { this.shooting = true }
        this.mouseup = () => { this.shooting = false }
        this.raycaster = new Raycaster();
        this.timeout = 0
        this.average = 8
        this.shooter = () => {
            if (this.shooting) {
                let now = new Date().getTime()
                if (keyListener.isPressed(69) && this.timeout < now) {
                    this.shooting = true
                    this.timeout = now + 1000 / this.average
                    this.shoot()
                }
            }
        }
    }
    start(){
        document.addEventListener('mousedown', this.mousedown)
        document.addEventListener('mouseup', this.mouseup)
        pointer.start()
        machine.addCallback(this.shooter)
        keyListener.start()
    }
    stop(){
        document.removeEventListener('mousedown', this.mousedown)
        document.removeEventListener('mouseup', this.mouseup)
        pointer.stop()
        machine.removeCallback(this.shooter)
        keyListener.stop()
    }
    shoot(){
        this.raycaster.setFromCamera(new Vector2(), camera);
        const intersects = this.raycaster.intersectObjects(scene.children, true)[0];
        if (intersects) {
            const bullet = new Mesh(
                new SphereGeometry(.05, 32, 32),
                new MeshStandardMaterial({
                    color: 0x660000,
                }));
            bullet.position.set(
                intersects.point.x,
                intersects.point.y,
                intersects.point.z,
            );
            intersects.object.attach(bullet)
        }
    }
}
const shooterSystem = new ShooterSystem()

export default shooterSystem