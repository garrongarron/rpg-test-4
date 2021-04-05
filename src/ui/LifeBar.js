import { sound } from '../audios/AudioManager.js'
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
        this.life += number
        if (this.life < 0) {
            this.life = 0
            window._stop()
            sound.play('morty')
        }
        if (this.life > 100) {
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