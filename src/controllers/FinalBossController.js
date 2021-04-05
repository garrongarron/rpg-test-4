import machine from '../basic/Machine.js'
import { getDelta } from '../basic/Clock.js'
import { Vector3 } from 'three'
import bigSword from "../objects/BigSword.js"

class FinalBossController {
    constructor() {
        this.target = null
        this.finalBoss = null
        this.speed = 3
        this.isShooting = false
        this.impact = false
    }
    follow() {
        if (this.impact) {
            bigSword.rotation.z += 0.2
        }
        if (this.isShooting) return

        let target = new Vector3(
            this.target.position.x,
            this.target.position.y + 1,
            this.target.position.z,
        )
        this.finalBoss.lookAt(target)
        if (this.finalBoss.position.distanceTo(target) < 1 + 1.5) {
            this.isShooting = true
            setTimeout(() => {
                this.isShooting = false
                this.impact = false
                let big = 1
                bigSword.scale.set(big, big, big)
            }, 2 * 1000);
            setTimeout(() => {
                let big = 2
                bigSword.scale.set(big, big, big)
                this.impact = true
            }, 1 * 1000);
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
        this.finalBoss.add(bigSword)
        machine.addCallback(this.follow.bind(this))
    }
    stop() {
        this.finalBoss.remove(bigSword)
        machine.removeCallback(this.follow.bind(this))
        this.target = null
        this.finalBoss = null

    }
}
let finalBossController = new FinalBossController()
export default finalBossController