import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Text } from '@react-three/drei';
import { Link, useNavigate } from 'react-router-dom';

export default function Joker() {
  const adjustJokerForScreenSize = () => {
    let screenPosition;

    if (window.innerWidth < 768) {
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenPosition = [0, -6.5, -43.4];
    }

    return screenPosition;
  };

  const navigate = useNavigate();
  const jokerPosition = adjustJokerForScreenSize();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const headRef = useRef();
  const mouthRef = useRef();
  const groupRef = useRef();
  const ballRefs = [useRef(), useRef(), useRef()];
  const { viewport, camera } = useThree();

  const [isWaving, setIsWaving] = useState(false);
  const [isSmiling, setIsSmiling] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isNodding, setIsNodding] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.5);
  const [scaleFactor, setScaleFactor] = useState(
    Math.min(viewport.width, viewport.height) * camera.zoom * 1
  );
  const [freeze, setIsFreeze] = useState(false);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * rotationSpeed;

    if (isWaving) {
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(t) * 5;
      }
    }

    if (!freeze) {
      if (leftArmRef.current && rightArmRef.current) {
        leftArmRef.current.rotation.z = Math.sin(t) * 5;
        rightArmRef.current.rotation.z = -Math.sin(t) * 5;
        leftArmRef.current.rotation.x = Math.sin(t) * 0.5;
        rightArmRef.current.rotation.x = -Math.sin(t) * 0.5;
      }
    }

    if ((isWaving || isNodding) && headRef.current) {
      const pointerX = camera.position.x / viewport.width;
      const pointerY = camera.position.y / viewport.height;
      headRef.current.rotation.y = pointerX * Math.PI * 0.25;
      headRef.current.rotation.x = -pointerY * Math.PI * 0.1;
    }

    if (!freeze) {
      ballRefs.forEach((ref, index) => {
        if (ref.current) {
          const phase = t + (index * 2 * Math.PI) / 3;
          const radius = 1;
          const height = 1.5;
          ref.current.position.x = Math.sin(phase) * radius;
          ref.current.position.y = Math.abs(Math.cos(phase)) * height + 2;
          ref.current.position.z = 0.5;
        }
      });
    }

    if (mouthRef.current) {
      const torus = mouthRef.current.geometry;
      torus.parameters.arc = isSmiling ? Math.PI : Math.PI * 1.5;
      torus.parameters.thetaStart = Math.PI / 2;
    }

    if (isNodding && headRef.current) {
      const nodPhase = Math.sin(t * 5) * 0.3;
      headRef.current.rotation.x = nodPhase;
    }
  });

  const handleWave = () => {
    setIsWaving(true);
    setIsFreeze(true);
    setTimeout(() => {
      setIsFreeze(false);
      setIsWaving(false);
    }, 2000);
  };

  const handleNod = () => {
    setIsNodding(true);
    setIsFreeze(true);
    setTimeout(() => {
      setIsFreeze(false);
      setIsNodding(false);
    }, 2000);
  };

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 30000);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'w') handleWave();
      if (event.key === 'n') handleNod();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseMove = event => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = (event.clientY / window.innerHeight) * 2;

    if (headRef.current) {
      headRef.current.rotation.y = x * 0.5;
      headRef.current.rotation.x = y * 0.5;
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === '+') {
        setRotationSpeed(speed => Math.min(speed + 0.2, 5));
      } else if (event.key === '-') {
        setRotationSpeed(speed => Math.max(speed - 0.2, 0.2));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <group
      ref={groupRef}
      scale={[scaleFactor, scaleFactor, scaleFactor]}
      position={jokerPosition}
      onClick={handleNod}
    >
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 2]} />
        <meshStandardMaterial color="blue" />
      </mesh>

      <mesh ref={headRef} position={[0, 3, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="pink" />

        <mesh position={[0.15, 0.1, 0.45]} scale={[1, isBlinking ? 0.1 : 1, 1]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh
          position={[-0.15, 0.1, 0.45]}
          scale={[1, isBlinking ? 0.1 : 1, 1]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <mesh position={[0, 0, 0.5]}>
          <coneGeometry args={[0.05, 0.2, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>

        <mesh ref={mouthRef} position={[0, 0, 0.45]}>
          <torusGeometry args={[0.2, 0.05, 2, 50, -Math.PI]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </mesh>

      <mesh position={[0, 3.5, 0]}>
        <coneGeometry args={[0.5, 0.5, 30]} />
        <meshStandardMaterial color="red" />
      </mesh>

      <mesh
        ref={leftArmRef}
        position={[-0.7, 2, 0]}
        rotation={[0, 0, -Math.PI / 2]}
      >
        <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh
        ref={rightArmRef}
        position={[0.7, 2, 0]}
        rotation={[0, 0, Math.PI / 2]}
      >
        <cylinderGeometry args={[0.1, 0.1, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      {ballRefs.map((ref, index) => (
        <group key={index}>
          <mesh
            ref={ref}
            position={[0, 2, 0]}
            onClick={() => {
              const routes = ['/contact', '/about', '/projects'];
              navigate(routes[index]); // Navigate to the corresponding route
            }}
            onPointerMove={elem => {
              elem.object.material.emissiveIntensity = 1;
              setIsFreeze(true);
              setTimeout(() => {
                elem.object.material.emissiveIntensity = 0;
                setIsFreeze(false);
              }, 3000);
            }}
            pointerEvents="visible" // Ensures the text is clickable
          >
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshStandardMaterial
              color={['red', 'green', 'blue'][index]}
              emissive={['red', 'green', 'blue'][index]}
            />{' '}
            <Text
              position={[0, 0.3, 0]}
              fontSize={0.2}
              color="yellow"
              anchorX="center"
              anchorY="middle"
            >
              {['Contact', 'About', 'Projects'][index]}
            </Text>
          </mesh>
        </group>
      ))}
    </group>
  );
}
