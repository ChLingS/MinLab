<template>
    <div ref="container" class="scenePosition"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
// import TWEEN from 'three-tween';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const container = ref(null)

onMounted(() => {
    Init()
})

let scene, camera, renderer, controls, particles, mouse, raycaster, initialPositions
const buffArray = []
let restorationSpeed = 0.05 // Adjust this value to control the restoration speed

function Init() {
    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 5)
    camera.lookAt(new THREE.Vector3(0, 0, 0)) // Ensure the camera is looking at the origin

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    container.value.appendChild(renderer.domElement)

    // Controls
    // controls = new OrbitControls(camera, renderer.domElement)
    // controls.update()



    // Manager
    const manager = new THREE.LoadingManager()
    manager.onStart = (url, itemsLoaded, itemsTotal) => {
        console.log(`Started loading file: ${url}.\nLoaded ${itemsLoaded} of ${itemsTotal} files.`)
    }
    manager.onLoad = () => {
        console.log('Loading complete!')
    }
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
        console.log(`Loading file: ${url}.\nLoaded ${itemsLoaded} of ${itemsTotal} files.`)
    }
    manager.onError = (url) => {
        console.log(`There was an error loading ${url}`)
    }


    // Particles
    const particlesGeometry = new THREE.BufferGeometry()
    // particlesGeometry.tween = []
    const particlesCount = 1200
    let positions = new Float32Array(particlesCount * 3)
    initialPositions = new Float32Array(particlesCount * 3)


    // Text
    const loader = new GLTFLoader(manager)
    loader.load('/Model/text.glb', (gltf) => {
        const model = gltf.scene
        console.log('model', model)
        model.traverse((child) => {
            if (child.isMesh) {
                const childPositions = child.geometry.attributes.position.array;
                for (let i = 0; i < childPositions.length; i++) {
                    positions[i] = childPositions[i];
                    initialPositions[i] = childPositions[i];
                }
                // console.log('positions', positions)
            }
        });
    })
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        map: new THREE.TextureLoader().load('/Model/white-dot.png'),
        alphaTest: 0.1,
        opacity: 0.5,
        transparent: true,
        depthTest: true
    })

    particles = new THREE.Points(particlesGeometry, particlesMaterial)
    // console.log('particles', particles)
    scene.add(particles)

    // function praticlesTrans() {
    //     for (let i = 0, j = 0; i < 30000; i++, j++) {
    //         const item = particlesGeometry.tween[i]
    //         if (j >= buffArray[current].length) {
    //             j = 0
    //         }
    //         item.to({ position: buffArray[current][j] }, THREE.MathUtils.randFloat(1000, 4000)).onUpdate(function () {
    //             particlesGeometry.position.array[i] = this.position
    //             particlesGeometry.position.needsUpdate = true
    //         }).start()
    //     }



    // Mouse
    mouse = new THREE.Vector2()
    raycaster = new THREE.Raycaster()

    window.addEventListener('resize', onWindowResize, false)
    window.addEventListener('mousemove', onMouseMove, false)

    animate()
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}

function animate() {
    requestAnimationFrame(animate)

    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObject(particles)

    const positions = particles.geometry.attributes.position.array

    if (intersects.length > 0) {
        const intersect = intersects[0]

        for (let i = 0; i < positions.length; i += 3) {
            const dx = positions[i] - intersect.point.x
            const dy = positions[i + 1] - intersect.point.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 0.5) { // Adjusted distance threshold
                positions[i] += dx * 0.1
                positions[i + 1] += dy * 0.1
                // No need to update z as it is always 0
            }
        }
    }

    // Restore particles to their initial positions
    for (let i = 0; i < positions.length; i += 3) {
        positions[i] += (initialPositions[i] - positions[i]) * restorationSpeed
        positions[i + 1] += (initialPositions[i + 1] - positions[i + 1]) * restorationSpeed
    }

    particles.geometry.attributes.position.needsUpdate = true

    renderer.render(scene, camera)
}

</script>

<style>
.scenePosition {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
}
</style>
