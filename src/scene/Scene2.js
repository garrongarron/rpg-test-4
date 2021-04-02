import AbstractScene from "./AbstractScene.js"

class Scene2 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        this.rotation1 = () => {
            this.box.rotation.y += 0.01
        }
    }
    next() {
        this.goTo('scene3')
    }
    start() {
        super.start()
        this.machine.addCallback(this.rotation1)
        setTimeout(() => {
            this.next()
        }, 1000 * 3);
    }
    stop(){
        super.stop()
        this.box.rotation.y = 0
        this.machine.removeCallback(this.rotation1)
    }
}

export default Scene2