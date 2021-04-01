import scene from '../basic/Scene.js'
import { directionalLight, pointLight } from '../basic/Lights.js'
import {Raycaster, Vector3} from 'three'


let radio = 10

let lightPositioning = false
class Gravity {
    check(position) {
        let ray = new Raycaster(
            new Vector3(
                position.x,
                position.y + 1,
                position.z),
            new Vector3(0, -1, 0),
            0,
            10
        );
        if (lightPositioning) {
            lightPositioning = false
            directionalLight.position.x = position.x
            directionalLight.position.z = position.z
            directionalLight.target.position.set(position.x - 30, directionalLight.target.position.y, position.z - 30);
            directionalLight.target.updateMatrixWorld();
        }
        pointLight.position.x = position.x
        pointLight.position.z = position.z

        let sss = scene.children.filter(obj =>obj.name != "GRASS")
        let tmp = ray.intersectObjects(sss, true).filter(obj => {
           return  !obj.object.free &&  obj.object.type != "BoxHelper" && obj.object.name != "Paladin_J_Nordstrom" 
        })[0] 

        //"SkinnedMesh"
        
        let isGrounded = !!tmp && tmp.distance < 10
        return {
            isGrounded: isGrounded,
            radio: radio,
            tmp: tmp
        }
    }
}

setInterval(() => {
    lightPositioning = true
}, 1000 * 1);
let gravity = new Gravity()
export default gravity