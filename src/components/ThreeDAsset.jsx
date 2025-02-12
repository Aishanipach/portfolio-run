import { useWindowSize } from "@react-hook/window-size";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Model = () => {
  const { scene } = useGLTF("/assets/base_basic_pbr.glb");
  const modelRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [shiftedUp, setShiftedUp] = useState(false);
  const [lastHoverTime, setLastHoverTime] = useState(0);

  useFrame(() => {
    if (modelRef.current) {
      const now = Date.now();

      if (hovered && now - lastHoverTime > 2000) {
        // Apply shake effect
        modelRef.current.rotation.x = (Math.random() - 0.5) * 0.1;
        modelRef.current.rotation.y = (Math.random() - 0.5) * 0.1;

        // Move the model slightly up if not already shifted
        if (!shiftedUp) {
          modelRef.current.position.y += 0.2;
          setShiftedUp(true);
          setLastHoverTime(now); // Set the time when hover effect started
        }
      } else if (!hovered) {
        // Reset position and rotation after 5 seconds
        modelRef.current.rotation.set(0, 0, 0);
        modelRef.current.position.y = 0;
        setShiftedUp(false);
      }
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={3}
      onPointerEnter={() => {
        console.log("HEY HEY HEY");
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    />
  );
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
    <div style={{ height: "60vh", marginTop: "5vh" }}>
      <Canvas
        style={{ height: "65vh" }}
        frameloop="always"
        camera={{ position: cameraPosition }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 3, 3]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
