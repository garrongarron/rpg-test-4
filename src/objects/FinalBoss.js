import { MeshStandardMaterial, Mesh, BoxGeometry } from 'three';

let finalBoss = new Mesh(
    new BoxGeometry(1, 3, 1),
    new MeshStandardMaterial({
        color: 0xFF0000,
    }));
let s = 1 / 1
finalBoss.scale.set(s, s, s)
finalBoss.position.set(10, 1.5, 0);
finalBoss.castShadow = true;
finalBoss.receiveShadow = true;
finalBoss.name = 'redBox'

export default finalBoss
