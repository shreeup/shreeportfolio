import { Suspense, useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('searchshr@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const Model = () => {
    const gltf = useLoader(GLTFLoader, 'assets/avatar.glb');
    gltf.scene.scale.set(2, 2, 2);
    gltf.scene.position.set(0, -3, -1);
    return (
      <>
        <primitive object={gltf.scene} />
      </>
    );
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-5 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            {/* <img
              src="assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            /> */}
            <Canvas style={{ height: '50%' }}>
              <Suspense fallback={null}>
                <directionalLight position={[4, 4, 4]} intensity={2} />
                <ambientLight intensity={1} />
                {/* <pointLight position={[10, 5, 10]} intensity={2} /> */}
                {/* <spotLight
                  position={[0, 50, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                /> */}
                {/* <hemisphereLight
                  skyColor="#b1e1ff"
                  groundColor="#000000"
                  intensity={1}
                /> */}
                <Model />
                <OrbitControls />
              </Suspense>
            </Canvas>
            <div>
              <p className="grid-headtext">Hi, I’m Shree</p>
              <p className="grid-subtext">
                With multiple years of experience, I have honed my skills in
                frontend, backend development and cloud platforms, creating
                dynamic, responsive, and scalable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.svg"
              alt="grid-2"
              className="w-full sm:h-[276px] object-contain"
              style={{ height: '50%' }}
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools
                that allow me to build robust and scalable applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div
              className="rounded-3xl w-full sm:h-[326px] flex justify-center items-center"
              style={{ height: '50%' }}
            >
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 37.2939,
                    lng: 121.7195,
                    text: 'San Jose, USA',
                    color: 'white',
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in San Jose, USA and open to remote work
                worldwide.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              <div className="space-y-2 mt-10">
                {/* <p className="grid-subtext text-center">Contact me</p> */}
                <div className="copy-container" onClick={handleCopy}>
                  <img
                    src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'}
                    alt="copy"
                  />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    searchshr@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code.
                Programming isn&apos;t just my profession—it&apos;s my passion.
              </p>
              <p className="grid-subtext">
                I enjoy exploring new technologies, and enhancing my skills.
              </p>
              <p className="grid-subtext">
                I’m currently working on Full Stack Development and looking to
                collaborate on Fullstack Web2 and Web3 projects.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/hourglass.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
            />

            <p className="grid-subtext">
              Contributing to Open Source Projects has always been a goal to me.
            </p>
            <p className="grid-subtext">
              Attended few coding bootcamps/courses and completed few projects.
            </p>
            <p className="grid-subtext">
              Attained Microsoft & AWS certifications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
