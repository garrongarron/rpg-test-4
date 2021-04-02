import { MeshStandardMaterial, Mesh, BoxGeometry } from 'three';
let box = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshStandardMaterial({
        color: 0xFF0000,
    }));
let s = 1 / 1
box.scale.set(s, s, s)
box.position.set(2, 0, 0);
box.castShadow = true;
box.receiveShadow = true;
box.name = 'box'


// let cubeContainer = new Box3();
// cubeContainer.setFromObject(box);



export default box
// export { cubeContainer }