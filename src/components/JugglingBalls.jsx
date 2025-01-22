import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';

const ballLinks = [
  { color: 'red', route: '/about' },
  { color: 'green', route: '/projects' },
  { color: 'blue', route: '/contact' },
];

export default function JugglingBalls({ isPaused, speed }) {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const ballRefs = useRef([]);
  const { viewport } = useThree();

  const radius = Math.min(viewport.width, viewport.height) * 1; // Adjust based on viewport

  useFrame(({ clock }) => {
    if (!isPaused) {
      const t = clock.getElapsedTime() * speed;
      ballRefs.current.forEach((ball, index) => {
        if (ball) {
          const angle = t + (index * Math.PI) / ballLinks.length;
          ball.position.x = Math.sin(angle) * radius; // Circular X motion
          ball.position.y = 3 + Math.cos(angle) * radius; // Circular Y motion
        }
      });
    }
  });

  return (
    <group>
      {ballLinks.map((ball, index) => (
        <mesh
          key={index}
          ref={ref => (ballRefs.current[index] = ref)}
          // position={[0, 3, 0]}
          position={islandPosition}
          onClick={() => (window.location.href = ball.route)}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color={ball.color} />
        </mesh>
      ))}
    </group>
  );
}
