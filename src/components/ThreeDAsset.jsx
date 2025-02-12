import { useWindowSize } from "@react-hook/window-size";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

const Model = () => {
  const { scene } = useGLTF("/assets/base_basic_pbr.glb"); // Load GLB file
  return <primitive object={scene} scale={3} />;
};
export default function ThreeDAsset() {
  const [width] = useWindowSize();
  const [cameraPosition, setCameraPosition] = useState([9, 7, 5]);

  useEffect(() => {
    if (width > 500) {
      setCameraPosition([9, 7, 5]);
    } else {
      setCameraPosition([21, 7, 5]);
    }
  }, [width]);

  return (
    <div style={{ height: "60vh", marginTop: "8vh" }}>
      <Canvas frameloop="always" camera={{ position: cameraPosition }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
