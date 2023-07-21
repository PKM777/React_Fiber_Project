import * as React from "react";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh rotation={[10, 15, 6]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}
