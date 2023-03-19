const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 10);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas") });
renderer.setSize(window.innerWidth, window.innerHeight);

const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sunMesh);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
const planets = [
  { name: "Mercury", distance: 2, color: 0x999999 },
  { name: "Venus", distance: 3, color: 0xeeeecc },
  { name: "Earth", distance: 4, color: 0x0000ff },
  { name: "Mars", distance: 5, color: 0xff6600 },
  { name: "Jupiter", distance: 7, color: 0xffcc99 },
  { name: "Saturn", distance: 9, color: 0xffcc66 },
  { name: "Uranus", distance: 11, color: 0x66ccff },
  { name: "Neptune", distance: 13, color: 0x000099 }
];
const planetMeshes = [];
planets.forEach((planet, index) => {
  const planetGeometry = new THREE.SphereGeometry(0.3, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: planet.color });
  const planetMesh = new THREE.Mesh(planetGeometry, planetMaterial);
  planetMesh.position.set(planet.distance, 0, 0);
  planetMesh.rotation.y = Math.PI / 2;
  scene.add(planetMesh);
  planetMeshes.push(planetMesh);
});

function animate() {
  requestAnimationFrame(animate);
  planetMeshes.forEach((planet, index) => {
    planet.rotation.y += 0.01 * (index + 1);
  });
  renderer.render(scene, camera);
}
animate();