
import Grid from "../inventoryUI/Grid.js"
import '../inventoryUI/InveontoryUI.scss'
import gold from '../images/gold.png'
import imageFactory from "../inventoryUI/ImageFactory.js"
import tooltip from "../inventoryUI/Tooltip.js"


class Inventory {
    constructor() {
        this.db = {}
        this.inverTypes = {}
        
        this.types = {
            gold: 1,
            food: 2
        }

        Object.assign(this.inverTypes, ...Object.entries(this.types).map(([a, b]) => ({ [b]: a })))
        //grid
        this.grid = new Grid()
        

        //css
        let style = document.createElement('style')
        style.innerHTML = `.fountain-of-resources{background-image: url(${gold});}`
        document.head.appendChild(style)

        this.n = 0
    }
    start(){
        this.grid.show()
    }
    stop(){
        this.grid.hide()
    }
    addItem(quantity, type) {
        if (!Object.keys(this.types).includes(this.inverTypes[type])) {
            console.error('Type does not exist');
            return
        }
        if (!Number.isInteger(quantity)) {
            console.error('Quantity is not an Integer');
            return
        }
        if (this.db[this.inverTypes[type]] == undefined) {
            this.db[this.inverTypes[type]] = 0
        }
        this.db[this.inverTypes[type]] += quantity
        console.log(this.db);

        //add element on UI
        let img = imageFactory.getOneImage(imageFactory.list().gold)
        tooltip.setDescription(img, imageFactory.list().gold.description)
        this.grid.get(this.n).appendChild(img);
        this.n++
    }
}

const inventory = new Inventory()

export default inventory
