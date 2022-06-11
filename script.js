const home = document.getElementById('home');
const scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0,
  0o1,
  1000
);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(wind.innerWidth, window.innerHeight);
home.appendChild(renderer.domElement);

let loader = new GLTFLoader();

let obj;

loader.load('./3d/head.gltf', (gltf) => {
  obj = gltf.scene;
  scene.add(gltf.scene);
});
let light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(light);
camera.position.set(0, 0, 10);
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};
animate();
