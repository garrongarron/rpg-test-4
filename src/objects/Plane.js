import { PlaneGeometry, MeshStandardMaterial, Mesh } from 'three'

const groundMat = new MeshStandardMaterial({
    color: 0x009955,
})
groundMat.color.setHSL(0.095, 1, 0.75);
const plane = new Mesh(
    new PlaneGeometry(1000, 1000, 10, 10),
    groundMat
);

plane.castShadow = false;
plane.receiveShadow = true;
plane.rotation.x = -Math.PI / 2;

export default plane