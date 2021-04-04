import box2 from '../objects/Box2.js'
import scene from '../basic/Scene.js'
import machine from '../basic/Machine.js'

class TowerDefenceSpawner {
    constructor() {
        this.q = 5
        this.NPCList = []
        this.callbacks = []
    }
    createNpc() {
        for (let index = 0; index < this.q; index++) {
            let npc = box2.clone()
            this.NPCList.push(npc)
            npc.position.set(50+index*2, .5, 0)
        }
    }
    start() {
        if (this.NPCList.length == 0) this.createNpc()
        let n = 0
        let t = setInterval(() => {
            //show
            scene.add(this.NPCList[n])
            let npc = this.NPCList[n]
            this.callbacks[n] = () =>{
                npc.position.x -= 0.3
            }
            let cb = this.callbacks[n]
            machine.addCallback(cb)
            n++
            if(n==this.q){
                clearInterval(t)
            }
        }, 5*1000);
    }
    stop() {
        this.NPCList.map(npm=>{
            if(npm.parent == null){
                npm.parent.remove(npm)
            }
        })
        this.callbacks.forEach(cb => {
            machine.removeCallback(cb)
        });
        
    }
}

let tdSpawner = new TowerDefenceSpawner()

export default tdSpawner