import cache from './Cache.js'
// import imageFactory from './ImageFactory.js'
// import createSlotNumber from './FactoryNumber.js'
// import tooltip from './Tooltip.js'
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
