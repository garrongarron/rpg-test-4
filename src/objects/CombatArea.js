import { PlaneGeometry, MeshStandardMaterial, Mesh } from 'three'

const groundMat = new MeshStandardMaterial({
    color: 0x009955,
})
groundMat.color.setHSL(0.095, 1, 0.75);
const combatArea = new Mesh(
    new PlaneGeometry(50, 50, 10, 10),
    groundMat
);

combatArea.castShadow = false;
combatArea.receiveShadow = true;
combatArea.rotation.x = -Math.PI / 2;

export default combatArea