import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';

// import sakura from '../assets/sakura.mp3';
import { HomeInfo, Loader } from '../components';
// import { soundoff, soundon } from '../assets/icons';
// import { Bird, Island, Plane, Sky } from '../models';
import Joker from '../components/Joker';
import JugglingBalls from '../components/JugglingBalls';

const Home = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(1); // Speed multiplier for juggling

  // Toggle play/pause
  const togglePlayPause = () => {
    setIsPaused(prev => !prev);
  };

  // Adjust juggling speed
  const changeSpeed = increment => {
    setSpeed(prevSpeed => Math.max(0.1, prevSpeed + increment)); // Minimum speed = 0.1
  };

  // const audioRef = useRef(new Audio(sakura));
  // audioRef.current.volume = 0.4;
  // audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // useEffect(() => {
  //   if (isPlayingMusic) {
  //     audioRef.current.play();
  //   }

  //   return () => {
  //     audioRef.current.pause();
  //   };
  // }, [isPlayingMusic]);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

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

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div> */}

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

          {/* <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          /> */}
          <Joker />
          {/* <JugglingBalls isPaused={isPaused} speed={speed} /> */}
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        {/* <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        /> */}
        Sound
      </div>
    </section>
  );
};

export default Home;
