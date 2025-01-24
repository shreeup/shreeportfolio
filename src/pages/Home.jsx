import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

import bgmusic from '../../public/assets/bgmusic.mp3';
import { HomeInfo, Loader } from '../components';
// import { Bird, Island, Plane, Sky } from '../models';
import Joker from '../components/Joker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhoneVolume, faPhoneSlash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1); // Speed multiplier for juggling

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPaused(prev => !prev);
  };

  const audioRef = useRef(new Audio(bgmusic));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative" id="home">
      <div className="absolute bottom-2 left-2">
        {isPlayingMusic && (
          <FontAwesomeIcon
            icon={faPhoneVolume}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            size="lg"
            style={{ color: 'yellow' }}
          />
        )}
        {!isPlayingMusic && (
          <FontAwesomeIcon
            icon={faPhoneSlash}
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
            size="lg"
            style={{ color: 'yellow' }}
          />
        )}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent `}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Joker />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
