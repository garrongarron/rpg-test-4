import sword from "../objects/Sword.js"
import machine from '../basic/Machine.js'

class SwordController {
    constructor() {
        this.character = null
        this.isAttacking = false
        this.hurting = false
        this.hurtCallback = null
        this.attack = () => {
            if (this.isAttacking){
                sword.rotation.z += 0.2
                if (this.enemy.position.distanceTo(this.character.position) < 1 + 1) {
                    this.hurt()
                    this.hurting = true
                }
            }
        }
        this.down = () => { this.isAttacking = true }
        this.up = () => { this.isAttacking = false; this.hurting = false}
    }
    hurt(){
        if(!this.hurting && this.hurtCallback != null){
            this.hurtCallback()
        }
    }
    setHurtCallback(cb){
        this.hurtCallback = cb
    }
    start(character, enemy) {
        this.enemy = enemy
        this.character = character
        this.character.add(sword)
        machine.addCallback(this.attack)
        document.addEventListener('mousedown', this.down)
        document.addEventListener('mouseup', this.up)
    }
    stop() {
        this.character.remove(sword)
        this.character = null
        machine.removeCallback(this.attack)
        document.removeEventListener('mousedown', this.down)
        document.removeEventListener('mouseup', this.up)
        this.hurting = false
    }
}

let swordController = new SwordController()

export default swordController