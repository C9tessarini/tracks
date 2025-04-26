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
// script.js
let speed = 0.1; // Velocidade do carro
let direction = 0; // Direção do carro

function init() {
    // Código de inicialização existente...

    // Adicionar evento de teclado para controlar o carro
    window.addEventListener('keydown', controlCar);
}

function controlCar(event) {
    switch (event.key) {
        case 'ArrowUp':
            car.position.z -= speed; // Move para frente
            break;
        case 'ArrowDown':
            car.position.z += speed; // Move para trás
            break;
        case 'ArrowLeft':
            direction -= 0.1; // Gira para a esquerda
            car.rotation.y = direction;
            break;
        case 'ArrowRight':
            direction += 0.1; // Gira para a direita
            car.rotation.y = direction;
            break;
    }
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();