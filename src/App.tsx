// components
import FloorMesh from "./components/FloorMesh";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { parts } from "./constants";
import { useLoadChairModel } from "./hooks/useLoadChairModel";
import { Group, Mesh, MeshPhongMaterial } from "three";
import { useAnimateScene } from "./hooks/useAnimateScene";
import { useLoadTexture } from "./hooks/useLoadTextures";
import { CoverType, covers } from "./constants/colors";
import Intro from "./components/Intro";

function App() {
  const [selectedPart, setSelectedPart] = useState<string>("legs");
  const [isDone, setIsDone] = useState<boolean>(false);

  const textures = useLoadTexture();
  const chairModel = useLoadChairModel();
  useAnimateScene(chairModel, isDone);
  const chairRef = useRef<Group>(null!);

  const handleColorChange = (cover: CoverType) => {
    const part = chairRef.current.children.find(
      (child) => child.name === selectedPart,
    ) as Mesh;

    part.material = new MeshPhongMaterial({
      color: cover.type === "color" ? cover.color : 0xf1f1f1,
      map:
        cover.type === "texture"
          ? textures[cover.label as keyof typeof textures]
          : null,
      shininess: 10,
    });
  };

  return (
    <div className="h-screen relative">
      {!isDone && <Intro done={() => setIsDone(true)} />}

      <div className="z-20 absolute flex flex-col top-[50%] translate-y-[-55%] left-0 gap-3">
        {parts.map((part) => (
          <div key={part.label}>
            <img
              className={`part ${
                selectedPart === part.label && "translate-x-1 outline"
              } `}
              onClick={() => setSelectedPart(part.label)}
              src={part.img}
              alt={part.label}
            />
          </div>
        ))}
      </div>

      <div className="z-20 absolute flex md:bottom-0 left-0 overflow-x-scroll w-full scroll-smooth">
        {covers.map((texture) => (
          <div
            className="w-12 h-12 cursor-pointer drop-shadow-lg grow-0 shrink-0"
            style={{
              backgroundColor:
                texture.type === "color"
                  ? texture.color
                  : "transparent",
            }}
            onClick={() => handleColorChange(texture)}
            key={
              texture.type === "color" ? texture.color : texture.label
            }
          >
            {texture.type === "texture" && (
              <img
                className="w-full h-full"
                src={`/textures/${texture.image}`}
                alt={texture.image}
              />
            )}
          </div>
        ))}
      </div>

      <Canvas
        className="bg-white h-screen w-full"
        shadows
        camera={{
          position: [0, 2, 0],
        }}
      >
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          intensity={6}
          position={[8, 12, -1]}
          shadow-mapSize={[2040, 2040]}
        />
        <hemisphereLight intensity={0.13} position={[0, 50, 0]} />
        <primitive castShadow ref={chairRef} object={chairModel} />

        <FloorMesh />
        <OrbitControls
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI * 0.35}
        />
      </Canvas>
    </div>
  );
}

export default App;
