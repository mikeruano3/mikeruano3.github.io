import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei"
import { proxy, useProxy } from 'valtio'
import { HexColorPicker } from "react-colorful"
import './3DShoe.css'
import arrow from '../../../assets/img/compass.svg'

const state = proxy({
    current: null,
    items: {
        laces: "#ffffff",
        mesh: "#ffffff",
        caps: "#ffffff",
        inner: "#ffffff",
        sole: "#ffffff",
        stripes: "#ffffff",
        band: "#ffffff",
        patch: "#ffffff",
    },
    changed: false,
})

const Shoe = (props) => {
    const ref = useRef()
    const snap = useProxy(state)
    const { nodes, materials } = useGLTF('shoe-draco.glb')

    // Animate model
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        ref.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20
        ref.current.rotation.x = Math.cos(t / 4) / 8
        ref.current.rotation.y = Math.sin(t / 4) / 8
        ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10
    })

    // Cursor showing current color
    const [hovered, setClickedPart] = useState(null)

    useEffect(() => {
        const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
        if (hovered) {
            document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(hovered ? cursor : auto)}'), auto`
        } else {
            document.body.style.cursor = null
        }
    }, [hovered, snap.items])


    return (
        <group
            {...props} 
            ref={ref}
            dispose={null}
            onPointerOver={(e) => { e.stopPropagation(); setClickedPart(e.object.material.name) }}
            onPointerOut={(e) => { e.stopPropagation(); e.intersections.length === 0 && setClickedPart(null) }}
            onPointerMissed={(e) => { e.stopPropagation(); state.current = null }}
            onPointerDown={(e) => { e.stopPropagation(); state.current = e.object.material.name }}
        >
            <mesh material-color={snap.items.laces} material={materials.laces} geometry={nodes.shoe.geometry} />
            <mesh material-color={snap.items.mesh} material={materials.mesh} geometry={nodes.shoe_1.geometry} />
            <mesh material-color={snap.items.caps} material={materials.caps} geometry={nodes.shoe_2.geometry} />
            <mesh material-color={snap.items.inner} material={materials.inner} geometry={nodes.shoe_3.geometry} />
            <mesh material-color={snap.items.sole} material={materials.sole} geometry={nodes.shoe_4.geometry} />
            <mesh material-color={snap.items.stripes} material={materials.stripes} geometry={nodes.shoe_5.geometry} />
            <mesh material-color={snap.items.band} material={materials.band} geometry={nodes.shoe_6.geometry} />
            <mesh material-color={snap.items.patch} material={materials.patch} geometry={nodes.shoe_7.geometry} />
        </group>
    )
}

const Picker = (props) => {
    const snap = useProxy(state)
    return (
            <div style={{ display: snap.current ? "block" : "none"}} className="pickerArea">
                <h2 className="h1Custom">{snap.current}</h2>
                <HexColorPicker
                    color={snap.items[snap.current]}
                    onChange={(color) => { state.items[snap.current] = color; state.changed = true }}
                />
            </div>
    )
}

const ShoeDraw = props => {
    const snap = useProxy(state)
    const [showShoeArrow, setShowShoeArrow] = useState(true)
    const [showPickerArrow, setShowPickerArrow] = useState(false)
    const [showTutorial, setShowTutorial] = useState(false)
    
    const onClickOnShoe= () => {
        setShowShoeArrow(false)
        setShowPickerArrow(true)
        setShowTutorial(true)
    }

    const resetTutorial = () => {
        state.changed = false
        setShowShoeArrow(true)
        setShowPickerArrow(false)
        setShowTutorial(false)
    }

    const clickOnShoeArea = () => {
        if(snap.changed){
            setShowPickerArrow(false)
        }
    }

    return (
        <>
            <div className="title-container">
                <h2 className="title-label">Shoe customizer</h2>
            </div>
            { showTutorial && 
                <button onClick={resetTutorial} className="reset-button">Restart tutorial</button>
            }
            <div className="shoeArea" onClick={clickOnShoeArea}>
                { showPickerArrow && snap.current && 
                    <div className="picker-arrow-area-style">
                        <p className="picker-arrow-label">Select a color</p>
                        <img src={arrow} alt="arrow" className="picker-arrow-style"/>
                    </div>
                }

                <Picker/>
                <Canvas onClick={onClickOnShoe}
                    style={{ height: '95vh', marginTop: '-25vh'}}
                    concurrent pixelRatio={[1, 2]} camera={{ position: [0, 0, 2.75] }}>
                    <ambientLight intensity={0.6} />
                    <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 20]} />
                    <Suspense fallback={null}>
                        <Shoe/>
                        <Environment files="royal_esplanade_1k.hdr">
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={2} far={1} /> 
                        </Environment>
                    </Suspense>   
                    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
                </Canvas>
                { showShoeArrow && 
                    <div className="shoe-arrow-area-style">
                        <img src={arrow} alt="arrow" className="shoe-arrow-style"/>
                        <p className="shoe-arow-label">Click anywhere over the shoe</p>
                    </div>
                }
            </div>
        </>
    )
}

export default ShoeDraw