import {DirectionalLight, HemisphereLight, AmbientLight, PointLight, SpotLight} from 'three'

let directionalLight = new DirectionalLight(0x888888, 1.01);
directionalLight.position.set(0, 100,0);
directionalLight.target.position.set(-30, 0, -30);//see Gravity.js
directionalLight.castShadow = true;
directionalLight.shadow.bias = -0.01;
directionalLight.shadow.mapSize.width = 2048*2;
directionalLight.shadow.mapSize.height = 2048*2;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 150.0;
let gap = 500
directionalLight.shadow.camera.left = gap;
directionalLight.shadow.camera.right = -gap;
directionalLight.shadow.camera.top = gap;
directionalLight.shadow.camera.bottom = -gap;
directionalLight.target.updateMatrixWorld();



let hemiLight = new HemisphereLight(0xffeeb1, 0xffeeb1, 1)

let ambientLight = new AmbientLight(0xffffff, 0.125);//0x303030

//spot
let pointLight = new PointLight( 0xcccccc, 4, 250 );
pointLight.position.set( 150, 20, 50 );
pointLight.intensity = 0 

//conica
let spotLight = new SpotLight( 0xffffff );
spotLight.position.set( 100, 1000, 100 );
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;
spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;
// scene.add( spotLight );
 

export {directionalLight, ambientLight, hemiLight, pointLight}