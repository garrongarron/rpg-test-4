import { PlaneGeometry, MeshStandardMaterial, Mesh } from 'three'

const groundMat = new MeshStandardMaterial({
    color: 0x333333,
})
// groundMat.color.setHSL(0.095, 1, 0.75);
const sword = new Mesh(
    new PlaneGeometry(3, 3, 1, 1),
    groundMat
);

sword.castShadow = false;
sword.receiveShadow = true;
sword.rotation.x = -Math.PI / 2;

export default sword