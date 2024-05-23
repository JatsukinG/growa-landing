import {useGLTF} from '@react-three/drei'

export function TowerModel(props) {
    const {nodes} = useGLTF('/htw.glb')
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                // material={nodes.Cylinder.material}
                position={[0, 1.231, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                // material={nodes.Cylinder002.material}
                position={[0, 8.366, -0.888]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                // material={nodes.Cylinder003.material}
                position={[-0.688, 8.416, 0.686]}
                rotation={[1.2, 0.35, 0.484]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                // material={nodes.Cylinder004.material}
                position={[0.719, 8.158, 0.484]}
                rotation={[0.653, -1.114, -0.34]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder001.geometry}
                // material={nodes.Cylinder001.material}
                position={[0.906, 6.192, -0.309]}
                rotation={[0, -1.158, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005.geometry}
                // material={nodes.Cylinder005.material}
                position={[-0.813, 6.242, -0.308]}
                rotation={[1.095, -0.175, 1.533]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder006.geometry}
                // material={nodes.Cylinder006.material}
                position={[-0.062, 5.984, 0.9]}
                rotation={[2.767, -0.749, 1.938]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder007.geometry}
                // material={nodes.Cylinder007.material}
                position={[0.818, 4.198, 0.652]}
                rotation={[Math.PI, -0.957, Math.PI]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008.geometry}
                // material={nodes.Cylinder008.material}
                position={[-0.071, 4.247, -0.818]}
                rotation={[1.475, -0.496, 2.579]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009.geometry}
                // material={nodes.Cylinder009.material}
                position={[-0.717, 3.99, 0.449]}
                rotation={[2.863, 0.233, 2.266]}
            />
        </group>
    )
}

useGLTF.preload('/htw.glb')