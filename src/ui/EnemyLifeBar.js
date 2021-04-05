import LifeBar from "./LifeBar.js";

class EnemyLifeBar extends LifeBar{
    constructor(){
        super()
        this.slideBar.getContainer().style.top = `0px`
        this.slideBar.getContainer().style.right = `0px`
        this.color = `#ff0000`
    }
}

let enemyLifeBar = new EnemyLifeBar()

export default enemyLifeBar