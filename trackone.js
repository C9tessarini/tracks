// script.js
let scene, camera, renderer, car, trackPoints = [];

function init() {
    // Criar cena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Adicionar luz
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 1, 1).normalize();
    scene.add(light);

    // Criar carro
    const geometry = new THREE.BoxGeometry(1, 0.5, 2);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    car = new THREE.Mesh(geometry, material);
    scene.add(car);

    // Configurar câmera
    camera.position.z = 5;

    // Adicionar evento de mouse para desenhar a pista
    window.addEventListener('click', drawTrack);

    animate();
}

function drawTrack(event) {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;

    // Adicionar ponto da pista
    trackPoints.push(new THREE.Vector3(x * 10, 0, y * 10));
    if (trackPoints.length > 1) {
        const geometry = new THREE.BufferGeometry().setFromPoints(trackPoints);
        const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
        const line = new THREE.Line(geometry, material);
        scene.add(line);
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

document.getElementById('testTrack').addEventListener('click', () => {
    // Lógica para testar a pista
    console.log('Testando a pista:', trackPoints);
});

init();