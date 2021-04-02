import AbstractScene from "./AbstractScene.js"

class Scene3 extends AbstractScene {
    next() {
        this.goTo('scene4')
    }
    start() {
        super.start()
        setTimeout(() => {
            this.next()
        }, 1000 * 5);
    }
}

export default Scene3