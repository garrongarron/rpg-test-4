import dialogSystem from "../dialogSystem/DialogSystem.js";
import AbstractScene from "./AbstractScene.js"

class Scene4 extends AbstractScene {
    constructor(goTo){
        super(goTo)
        this.dialogConent = [
            ['Anciano', '4 Que bueno ver un guerrero en nuestras tierras'],
            ['Anciano', '4 Necesitamos alguien que nos defienda'],
            ['Anciano', '3 Que bueno ver un guerrero en nuestras tierras'],
            ['Anciano', '3 Necesitamos alguien que nos defienda'],
            ['Anciano', '2 Que bueno ver un guerrero en nuestras tierras'],
            ['Anciano', '2 Necesitamos alguien que nos defienda'],
            ['Anciano', '1 Que bueno ver un guerrero en nuestras tierras'],
            ['Anciano', '1 Necesitamos alguien que nos defienda'],
        ]
    }
    next() {
        this.goTo('scene5')
    }
    start() {
        super.start()
        dialogSystem.loadContent(this.dialogConent)
        dialogSystem.open()
        dialogSystem.colseCallback(()=>{
            setTimeout(() => {
                this.next()
            }, 3*1000);
        })
    }
    stop(){
        super.stop()
        dialogSystem.close()
    }
}

export default Scene4