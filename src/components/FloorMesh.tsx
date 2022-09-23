import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const FloorMesh: React.FC = ({}) => {
  const { gl, scene } = useThree();

  gl.physicallyCorrectLights = true;
  gl.outputEncoding = THREE.sRGBEncoding;

  scene.fog = new THREE.Fog(0xffffff, 1, 5);

  return (
    <mesh receiveShadow rotation={[-Math.PI * 0.5, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial color={0xeeeeee} shininess={30} />
    </mesh>
  );
};

export default FloorMesh;
