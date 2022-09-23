import { useEffect } from "react";
import { Group } from "three";
import gsap from "gsap";

export const useAnimateScene = (scene: Group, isDone: boolean) => {
  useEffect(() => {
    if (isDone)
      gsap.to(scene.rotation, {
        y: Math.PI * 3,
        duration: 2,
      });
  }, [scene, isDone]);
};
