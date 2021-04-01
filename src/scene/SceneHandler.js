import machine from '../basic/Machine.js'
import init from '../basic/Renderer.js'
import Scene1 from './Scene1.js'
import Scene2 from './Scene2.js'


let currentScene = null 

let firstTime = true
let goTo = (sceneName) => {
    if (firstTime) {
        init()
        machine.on()    
        firstTime = false
    }
    if (currentScene != null) {
        scenes[currentScene].stop()
    }
    scenes[sceneName].start()
    currentScene = sceneName
    console.log(sceneName);
}
let scenes = {
    scene1: new Scene1(goTo),
    scene2: new Scene2(goTo),
}

export default goTo 