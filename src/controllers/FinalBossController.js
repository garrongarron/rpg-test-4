import machine from '../basic/Machine.js'
import { getDelta } from '../basic/Clock.js'
import { Vector3 } from 'three'

class FinalBossController {
    constructor() {
        this.target = null
        this.finalBoss = null
        this.speed = 3
        this.isShooting = false
    }
    follow() {
        if (this.isShooting) return
        let target = new Vector3(
            this.target.position.x,
            this.target.position.y + 1,
            this.target.position.z,
        )
        this.finalBoss.lookAt(target)
        if (this.finalBoss.position.distanceTo(target) < 1+1.5) {
            this.isShooting = true
            setTimeout(() => { this.isShooting = false }, 2 * 1000);
            return
        }

        let vOut = new Vector3()
        vOut = this.finalBoss.getWorldDirection(vOut)
        let movement = vOut.multiplyScalar(this.speed * getDelta())
        this.finalBoss.position.add(movement)
    }
    start(target, finalBoss) {
        this.target = target
        this.finalBoss = finalBoss
        machine.addCallback(this.follow.bind(this))
    }
    stop() {
        machine.removeCallback(this.follow.bind(this))
        this.target = null
        this.finalBoss = null

    }
}
let finalBossController = new FinalBossController()
export default finalBossController