import SlideBar from './SlideBar.js'

class LifeBar {
    constructor() {
        this.slideBar = new SlideBar()
        this.life = 100
        // this.slideBar.getContainer().style.bottom = `0px`
        this.color = `#fbff00`
        
    }
    start() {
        this.slideBar.show()
        this.update(0)
    }
    update(number) {
        if (this.life + number < 0) {
            this.life = 0
        }
        if (this.life + number > 100) {
            this.life = 100
        }
        this.slideBar.setLabel(this.life)
        this.slideBar.getBar().style.background = `linear-gradient(90deg, ${this.color} ${this.life}%, ${this.color}00 0%)`
    }
    stop() {
        this.slideBar.hide()
    }
}

export default LifeBar