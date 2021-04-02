import AbstractScene from "./AbstractScene.js"

class Scene2 extends AbstractScene {
    next() {
        this.goTo('scene1')
    }
    start() {
        super.start()
        setTimeout(() => {
            this.next()
        }, 1000 * 3);
    }
}

export default Scene2