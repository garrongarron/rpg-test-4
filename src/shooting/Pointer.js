import cache from '../basic/Cache.js'
import './pointer.scss'

class Pointer {
    constructor() {
        this.container = document.createElement('div')
        this.container.classList.add('pointer', 'hide')
        this.keydown = (e) => {
            if (e.keyCode == 69) {
                this.container.classList.remove('hide')
            }
        }
        this.keyup = (e) => {
            if (e.keyCode == 69) {
                this.container.classList.add('hide')
            }
        }
        this.instuction = document.createElement('div')
        this.instuction.classList.add('help')
        this.instuction.innerHTML = `W=>Up; S=>Down; E=>Aim; Click to shoot`

    }
    
    start() {
        document.body.appendChild(this.container)
        document.addEventListener('keydown', this.keydown)
        document.addEventListener('keyup', this.keyup)
        document.body.appendChild(this.instuction)
    }
    stop() {
        cache.appendChild(this.container)
        cache.appendChild(this.instuction)
        document.removeEventListener('keydown', this.keydown)
        document.removeEventListener('keyup', this.keyup)

    }
}

const pointer = new Pointer()

export default pointer
