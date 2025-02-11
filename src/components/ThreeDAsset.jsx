import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model = () => {
  const { scene } = useGLTF("/assets/base_basic_pbr.glb"); // Load GLB file
  return <primitive object={scene} scale={3} />;
};
export default function ThreeDAsset() {
  return (
    <div style={{ height: "80vh" }}>
      <Canvas frameloop="demand" camera={{ position: [1, 7, 5] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
