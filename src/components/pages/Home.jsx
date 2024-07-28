import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from '../Model'; // Check this path
import Background from '../Background'; // Check this path
import TypingAnimation from '../TypingAnimation';

const Home = () => {
    const textLines = [
        'Click on model to stop the rotation.'
      ];
  return (
    <>
        <Background />
        <div className="home-container">
        <Canvas className="canvas" camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Model url="/model/mm_project.glb" />
        </Canvas>
        <div className="ide-text">
          <p>Hi, I am Rishabh. Welcome!</p>
          <p>
            <TypingAnimation text={textLines} />
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;