import cache from '../basic/Cache.js'
import Slot from './Slots.js'

class Grid {
    constructor() {
        this.container = document.createElement('main')
        for (let index = 0; index < 9; index++) {
            let slot = new Slot()
            this.container.appendChild(slot.get())
        }
    }
    get(index) {
        return this.container.children[index]
    }
    show() {
        document.body.appendChild(this.container)
    }
    hide() {
        cache.appendChild(this.container)
    }
}

export default Grid
