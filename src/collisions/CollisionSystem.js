import { Box3 } from 'three'

class CollisionSystem {
    constructor(scene) {
        this.coordinates = []
        this.clonableObject = []
        this.list = []
        this.character = null
        this.aabbBoxContainer = new Box3();
        this.scene = scene
        this.callback = null
    }


    //one call from constructor method
    setData(coordinates, clonableObject) {
        this.coordinates = coordinates
        this.clonableObject = clonableObject
        this.placeThenIntoContainers()
    }

    placeThenIntoContainers() {
        for (let index = 0; index < this.coordinates.length; index++) {
            let container = new Box3();
            let item = this.clonableObject.clone()
            item.position.x = this.coordinates[index].x
            item.position.z = this.coordinates[index].z
            container.setFromObject(item)
            this.list.push([container, item])
        }
    }

    //THE VALIDATION
    run(character) {
        this.aabbBoxContainer.setFromObject(character)
        for (let index = 0; index < this.list.length; index++) {
            if (this.aabbBoxContainer.intersectsBox(this.list[index][0])) {
                this.scene.remove(this.list[index][1])
                this.list[index][1].position.x = 100
                this.list[index][0].setFromObject(this.list[index][1])
                this.emit()
            }
        }
    }

    emit(){
        if(this.callback != null){
            this.callback()
        }
    }
    setCallback(callback){
        this.callback = callback
    }

    show() {
        for (let index = 0; index < this.list.length; index++) {
            this.scene.add(this.list[index][1])
        }
    }

    hide() {
        for (let index = 0; index < this.list.length; index++) {
            this.scene.remove(this.list[index][1])
        }
        this.callback = null
    }
}

export default CollisionSystem