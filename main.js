import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { TransformControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const orbit = new OrbitControls( camera, renderer.domElement );

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejs.org/examples/textures/crate.gif');

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const materialInside = new THREE.MeshBasicMaterial( { map: texture, side: THREE.BackSide } );
const cube = new THREE.Mesh( geometry, materialInside );
cube.position.set(0, 0, 0);
scene.add( cube );


orbit.enablePan = false;
orbit.enableZoom = false;

camera.position.z = 2.5
camera.position.y = 2.5
camera.position.x = 2.5





function animate() {
  requestAnimationFrame( animate );


	renderer.render( scene, camera );
}

animate();