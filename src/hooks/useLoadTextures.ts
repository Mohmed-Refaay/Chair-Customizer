import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export const useLoadTexture = () => {
  const textures = useLoader(TextureLoader, [
    "/textures/denim_.jpg",
    "/textures/fabric_.jpg",
    "/textures/pattern_.jpg",
    "/textures/quilt_.jpg",
    "/textures/wood_.jpg",
  ]);

  textures.forEach((texture) => {
    texture.magFilter = THREE.NearestFilter;
    texture.minFilter = THREE.NearestFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = 6;
    texture.repeat.y = 6;
  });

  return {
    denim: textures[0],
    fabric: textures[1],
    pattern: textures[2],
    quilt: textures[3],
    wood: textures[4],
  };
};
