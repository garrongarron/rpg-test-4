import finalBossController from "../controllers/FinalBossController.js"
import cameraController from "../controllers/CameraController.js"
import combatArea from "../objects/CombatArea.js"
import finalBoss from "../objects/FinalBoss.js"
import AbstractScene from "./AbstractScene.js"

import characterLifeBar from "../ui/CharacterLifeBar.js"
import enemyLifeBar from "../ui/EnemyLifeBar.js"
import swordController from "../controllers/SwordController.js"
import { sound } from "../audios/AudioManager.js"


class Scene2 extends AbstractScene {
    constructor(goTo) {
        super(goTo)
        this.slideBar = null
    }
    next() {
        this.goTo('scene3')
    }
    start() {
        super.start()
        this.scene.add(combatArea)
        this.scene.add(finalBoss)
        this.box.position.y = .5
        cameraController.start(this.box)

        enemyLifeBar.start()
        swordController.start(this.box, finalBoss)
        swordController.setHurtCallback(()=>{
            enemyLifeBar.update(-30)
            sound.play('golpe')
        })
        
        
        finalBossController.start(this.box, finalBoss)
        characterLifeBar.start()
        finalBossController.setHurtCallback(()=>{
            characterLifeBar.update(-40)
            sound.play('fu')
        })
    }
    stop(){
        super.stop()
        this.scene.remove(combatArea)
        this.scene.remove(finalBoss)
        swordController.stop()
        this.box.position.y = 0
        cameraController.stop()
        finalBossController.stop()
        characterLifeBar.stop()
        enemyLifeBar.stop()
        
    }
}

export default Scene2