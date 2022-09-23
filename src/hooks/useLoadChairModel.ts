import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Mesh, MeshStandardMaterial, MeshPhongMaterial } from "three";

export const useLoadChairModel = () => {
  const { scene } = useGLTF("/models/chair.glb");

  useEffect(() => {
    if (scene) scene.rotation.y = Math.PI;
    scene.traverse((child) => {
      if (
        child instanceof Mesh &&
        child.material instanceof MeshStandardMaterial
      ) {
        const material = new MeshPhongMaterial({
          color: 0xf1f1f1,
          shininess: 1,
        });
        child.receiveShadow = true;
        child.castShadow = true;
        child.material = material;
      }
    });
  }, [scene]);

  return scene;
};
