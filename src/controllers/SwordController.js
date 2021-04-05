import sword from "../objects/Sword.js"
import machine from '../basic/Machine.js'

class SwordController {
    constructor() {
        this.character = null
        this.isAttacking = false
        this.attack = () => {
            if (this.isAttacking)
                sword.rotation.z += 0.2
        }
        this.down = () => { this.isAttacking = true }
        this.up = () => { this.isAttacking = false }
    }
    start(character) {
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
    }
}

let swordController = new SwordController()

export default swordController