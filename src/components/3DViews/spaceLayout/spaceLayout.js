import React, { useCallback, useEffect, useRef } from 'react'
import "./spaceLayout.css"
import * as THREE from 'three'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import spaceImg from '../../../assets/img/space.jpg'
import avatarImg from '../../../assets/img/cube1.jpg'
import moonImg from '../../../assets/img/moon.jpg'
import normalImg from '../../../assets/img/normal.jpg'

export const SpaceLayout = props => {
    const mount = useRef(null)

    const configureLight = scene => {
        const pointLight = new THREE.PointLight(0xffffff)
        pointLight.position.set(5, 5, 5)

        const ambientLight = new THREE.AmbientLight(0xffffff)
        scene.add( pointLight, ambientLight )

        //const lightHelper = new THREE.PointLightHelper(pointLight)
        //const gridHelper = new THREE.GridHelper(200, 50)
        //scene.add( lightHelper, gridHelper )
    }

    const addTorusObject = scene => {
        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 )
        const material = new THREE.MeshStandardMaterial( { color: 0xff6347 } )
        const torus = new THREE.Mesh( geometry, material )
        torus.position.setZ(-2) // prev value was 0
        scene.add( torus )
        return torus
    }

    const addStarObject = scene => {
        const geometry = new THREE.SphereGeometry( 0.25, 24, 24 )
        const material = new THREE.MeshStandardMaterial( { color: 0xffffff } )
        const star = new THREE.Mesh( geometry, material )
        const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread( 100 ))

        star.position.set(x, y, z)
        scene.add( star )
        return star
    }

    const addAvatarObject = scene => {
        const avatarTexture = new THREE.TextureLoader().load(avatarImg)
        const avatarObject = new THREE.Mesh(
            new THREE.BoxGeometry(3, 3, 3),
            new THREE.MeshBasicMaterial( { map: avatarTexture } )
        )
        avatarObject.position.z = -5
        avatarObject.position.x = 3
        scene.add( avatarObject )
        return avatarObject
    }

    const addMoonObject = (scene, x, y, z) => {
        const moonTexture = new THREE.TextureLoader().load(moonImg)
        const normalTexture = new THREE.TextureLoader().load(normalImg)

        const moonObject = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial( { 
                map: moonTexture ,
                normalMap: normalTexture
            } )
        )
        moonObject.position.z = z
        moonObject.position.y = y
        moonObject.position.setX(x)

        scene.add( moonObject )
        return moonObject
    }

    const rotateMoon = moon => {
        moon.rotation.x += Math.random(0.1)*0.05
        moon.rotation.y += Math.random(0.1)*0.075
        moon.rotation.z += Math.random(0.1)*0.05
    }

     // === MOVE ON SCROLL
     const moveCamera = useCallback((moons, avatar, camera) => {
        const t = document.body.getBoundingClientRect().top
        // move moon
        moons.map(moon=> rotateMoon(moon))

        // move avatar
        avatar.rotation.y += 0.01
        avatar.rotation.z += 0.01

        camera.position.z = t * -0.01
        camera.position.x = t * -0.0002
        camera.position.y = t * -0.0002
    }, [])

    useEffect(() => {
         // === SCENE AND CAMERA ===
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 )
        camera.position.setZ(30)
        camera.position.setX(-6)

        // === RENDERER ===
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight )
        renderer.setPixelRatio( window.devicePixelRatio )
        mount.current.appendChild( renderer.domElement )
        //document.body.appendChild( renderer.domElement )
        
        // === LIGHT
        configureLight(scene)

        // === CONTROLS
        //const controls = new OrbitControls(camera, renderer.domElement)

        // === OBJECTS
            // Torus
        const torus = addTorusObject(scene)
            // Stars
        Array(200).fill().forEach(item=> addStarObject(scene))
            // Avatar
        const avatar = addAvatarObject(scene)
            // Moon
        const moons = [ addMoonObject(scene, -10, 0, 20),
                        addMoonObject(scene, 20, -5, -30)]
        
        // === BACKGROUND
        const spaceTexture = new THREE.TextureLoader().load(spaceImg)
        scene.background = spaceTexture
        
        window.addEventListener('scroll', e => moveCamera(moons, avatar, camera), true)
        moveCamera(moons, avatar, camera)

        // === LOOP FUNCTION
        const animate = function () {
            requestAnimationFrame( animate )

            torus.rotation.x += 0.01
            torus.rotation.y += 0.005
            torus.rotation.z += 0.01

            //moon.rotation.x += 0.005
            //controls.update()

            renderer.render( scene, camera )
        }
        animate()
        // === THREE.JS EXAMPLE CODE END ===
    }, [moveCamera])

    return  <div>
            <div id="canvas" ref={mount} />
            <div id="mainSpace">
                {props.children}
            </div>
        </div>
}
