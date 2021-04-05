import LifeBar from "./LifeBar.js";

class CharacterLifeBar extends LifeBar{
    constructor(){
        super()
        this.slideBar.getContainer().style.bottom = `0px`
        this.color = `#fbff00`
    }
}

let characterLifeBar = new CharacterLifeBar()

export default characterLifeBar