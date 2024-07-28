// src/components/Model.js
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';


const Model = ({ url }) => {
  const modelRef = useRef();
  const { scene } = useGLTF(url);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Rotate the model
  useFrame(() => {
    if (!clicked) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  const handleClick = () => {
    console.log('Model clicked'); // Debugging line to see if click is detected
    setClicked(clicked => !clicked);
  };

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={hovered ? 1.05 : 1}
      position={[0, -2, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={handleClick}
    />
  );
};

export default Model;
