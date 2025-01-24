import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Text } from '@react-three/drei';
import { Link, useNavigate } from 'react-router-dom';
import { hover, motion } from 'framer-motion';
// import { Mail, User, Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

import {
  faUser,
  faAddressBook,
  faClipboardList,
  faBuilding,
  faFile,
} from '@fortawesome/free-solid-svg-icons';

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
  const icongroupRef = useRef();
  const ballRefs = [useRef(), useRef(), useRef()];
  const { viewport, camera } = useThree();

  const [isWaving, setIsWaving] = useState(false);
  const [isSmiling, setIsSmiling] = useState(true);
  const [isBlinking, setIsBlinking] = useState(false);
  const [isNodding, setIsNodding] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(1.5);
  const [scaleFactor, setScaleFactor] = useState(
    Math.min(viewport.width, viewport.height) * camera.zoom * 1
  );
  const [freeze, setIsFreeze] = useState(false);

  const iconRoutes = [
    {
      icon: (
        <FontAwesomeIcon
          icon={faAddressBook}
          style={{ color: 'voilet' }}
          size="lg"
        />
      ),
      route: '#contact',
      label: 'Contact',
      isExternal: false,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: 'indigo', margin: 'auto' }}
          size="lg"
        />
      ),
      route: '#about',
      label: 'About',
      isExternal: false,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faClipboardList}
          style={{ color: 'blue' }}
          size="lg"
        />
      ),
      route: '#projects',
      label: 'Projects',
      isExternal: false,
    },
    {
      icon: (
        <FontAwesomeIcon icon={faGithub} style={{ color: 'green' }} size="lg" />
      ),
      route: 'https://github.com/shreeup',
      label: 'GitHub',
      isExternal: true,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faBuilding}
          style={{ color: 'orange' }}
          size="lg"
        />
      ),
      route: '#work',
      label: 'Work',
      isExternal: false,
    },
    {
      icon: (
        <FontAwesomeIcon
          icon={faLinkedinIn}
          style={{ color: 'yellow' }}
          size="lg"
        />
      ),
      route: 'https://linkedin.com/in/shreeup',
      label: 'LinkedIn',
      isExternal: true,
    },
    {
      icon: (
        <FontAwesomeIcon icon={faFile} style={{ color: 'red' }} size="lg" />
      ),
      route: 'https://linkedin.com/in/shreeup',
      label: 'Resume',
      isExternal: true,
    },
  ];

  const handleIconClick = item => {
    setIsFreeze(true); // Optionally freeze the animation during the navigation
    if (item.isExternal)
      window.open(item.route, '_blank', 'noopener,noreferrer');
    else window.location.hash = item.route; // Update the hash in the URL
    setTimeout(() => setIsFreeze(false), 500); // Resume the animation
  };

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * rotationSpeed;
    const degToRad = degrees => (degrees * Math.PI) / 180;

    if (!freeze) {
      if (leftArmRef.current && rightArmRef.current) {
        const leftArmAngle = degToRad(90) - Math.sin(t) * degToRad(15);
        rightArmRef.current.rotation.z = leftArmAngle;

        // Right arm motion between 150° and 210°
        const rightArmAngle = degToRad(90) + Math.sin(t) * degToRad(15);
        leftArmRef.current.rotation.z = rightArmAngle;
      }
    }
    if (isWaving) {
      if (leftArmRef.current) {
        leftArmRef.current.rotation.z =
          degToRad(30) + Math.sin(t) * degToRad(15); // Wave between 30° and 45°
      }
    }

    if ((isWaving || isNodding) && headRef.current) {
      const pointerX = camera.position.x / viewport.width;
      const pointerY = camera.position.y / viewport.height;
      headRef.current.rotation.y = pointerX * Math.PI * 0.25;
      headRef.current.rotation.x = -pointerY * Math.PI * 0.1;
    }

    if (!freeze) {
      iconRoutes.forEach((_, index) => {
        const phase = t / 10 + (index * 2 * Math.PI) / 7;
        const radius = 1.5;
        const height = 2;

        if (icongroupRef.current) {
          const iconRef = icongroupRef.current.children[index];
          if (iconRef) {
            iconRef.position.x = Math.sin(phase) * radius;
            iconRef.position.y = Math.abs(Math.cos(phase)) * height + 2;
            iconRef.position.z = 0;
          }
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
      leftArmRef.current.rotation.z = Math.PI / 2;
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
      <mesh position={[0, 1.4, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
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
        position={[-1, 1.8, 0]} // Slightly further out on the x-axis
        rotation={[0, 0, Math.PI / 2]} // Adjust the angle to stick out naturally
      >
        <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <mesh
        ref={rightArmRef}
        position={[1, 1.8, 0]} // Slightly further out on the x-axis
        rotation={[0, 0, -Math.PI / 2]} // Adjust the angle to stick out naturally
      >
        <cylinderGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <group ref={icongroupRef} position={[0, 0, 0]}>
        {iconRoutes.map((item, index) => (
          <Html center key={index}>
            <motion.div
              initial={{
                rotate: 0,
              }}
              //animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              style={{
                cursor: 'pointer',
                display: 'inline-block',
              }}
              onClick={() => {
                handleIconClick(item);
              }}
              onPointerMove={elem => {
                setIsFreeze(true);
                setTimeout(() => {
                  setIsFreeze(false);
                }, 3000);
              }}
              className="group"
            >
              {item.icon}
              <span className="invisible group-hover:visible text-white">
                {item.label}
              </span>{' '}
            </motion.div>
          </Html>
        ))}
      </group>
    </group>
  );
}
