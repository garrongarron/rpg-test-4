import { MeshStandardMaterial, Mesh, BoxGeometry } from 'three';

let castle = new Mesh(
    new BoxGeometry(10, 2, 10),
    new MeshStandardMaterial({
        color: 0xCCCCCC,
    }));
let s = 1 / 1
castle.scale.set(s, s, s)
castle.position.set(0, 1, 0);
castle.castShadow = true;
castle.receiveShadow = true;
castle.name = 'castle'


export default castle
