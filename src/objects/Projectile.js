import { MeshStandardMaterial, Mesh, BoxGeometry } from 'three';
let projectile = new Mesh(
    new BoxGeometry(.05, .05, 2),
    new MeshStandardMaterial({
        color: 0x6666ff,
    }));
let s = 1 / 1
projectile.scale.set(s, s, s)
projectile.position.set(0, 1, 0);
projectile.castShadow = true;
projectile.receiveShadow = true;
projectile.name = 'projectile'


// let cubeContainer = new Box3();
// cubeContainer.setFromObject(projectile);



export default projectile
// export { cubeContainer }