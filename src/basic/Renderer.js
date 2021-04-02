import scene from './Scene.js'
import camera from './Camera.js'
import machine from './Machine.js'
import { DoubleSide, WebGLRenderer } from 'three';

let renderer = null
let init = () => {

    let c = document.createElement('canvas')
    c.id = 'c'
    document.body.insertBefore(c, document.querySelector('#container'))
    // document.querySelector('#container').after(c)
    renderer = new WebGLRenderer(
        {
            canvas: document.getElementById('c'),
            antialias: true,
            alpha: true
        }
    );
    renderer.outputEncoding = 3001; //THREE.sRGBEncoding;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = 2; //THREE.PCFSoftShadowMap;//THREE.BasicShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMappingExplosure = 8.3

    let resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', resize, false);
    resize()

    machine.addCallback(() => {
        renderer.render(scene, camera);
    })
}
export default init
export { renderer }