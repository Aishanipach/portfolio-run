import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./App.css";

const Model = () => {
  const { scene } = useGLTF("/assets/base_basic_pbr.glb"); // Load GLB file
  return <primitive object={scene} scale={3} />;
};
function App() {
  return (
    <div style={{ height: "40vh" }}>
      <Canvas frameloop="demand" camera={{ position: [8, 7, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default App;
