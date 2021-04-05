import { PlaneGeometry, MeshStandardMaterial, Mesh } from 'three'

const groundMat = new MeshStandardMaterial({
    color: 0x6666ff,
})
// groundMat.color.setHSL(0.095, 1, 0.75);
const bigSword = new Mesh(
    new PlaneGeometry(2, 2, 1, 1),
    groundMat
);

bigSword.castShadow = false;
bigSword.receiveShadow = true;
bigSword.rotation.x = -Math.PI / 2;
bigSword.position.y = -.75

export default bigSword