import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Html,
  useProgress,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";
import { Suspense } from "react";

type Props = { speed?: number; scale?: number };

THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const Scene = ({ scale = 30 }: { scale: number }) => {
  //   const materials = useLoader(MTLLoader, "Poimandres.mtl");
  const obj = useLoader(OBJLoader, "models/rr.obj", (loader) => {
    // materials.preload();
    // loader.setMaterials(materials);
  });

  console.log(obj);
  return <primitive object={obj} scale={scale} />;
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>{progress === 100 ? <></> : <>{progress} % loaded</>}</Html>
  );
};

const Model = (props: Props) => {
  const { speed = 30, scale } = props;
  return (
    <>
      <Canvas style={{ height: "50vh" }}>
        <Loader />
        {/* <ambientLight /> */}
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Scene scale={scale!} />
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={speed}
            enableZoom={false}
          />
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
    </>
  );
};
export default Model;
