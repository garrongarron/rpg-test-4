import { Mesh, SphereGeometry, MeshStandardMaterial } from 'three'

const bullet = new Mesh(
    new SphereGeometry(.05, 32, 32),
    new MeshStandardMaterial({
        color: 0x660000,
    }));


export default bullet