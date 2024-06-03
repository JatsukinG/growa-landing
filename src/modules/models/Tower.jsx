import {useGLTF} from '@react-three/drei'

export function TowerModel(props) {
    const {nodes, materials} = useGLTF('/HTOWER.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007.geometry}
                material={materials.base}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007_1.geometry}
                material={materials.Sticker}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007_2.geometry}
                material={materials['Material.001']}
            />
        </group>
    )
}

useGLTF.preload('/HTOWER.glb')