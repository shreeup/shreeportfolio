// import React, { useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import Joker from './components/Joker';
// import JugglingBalls from './components/JugglingBalls';

// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);
//   const [speed, setSpeed] = useState(1); // Speed multiplier for juggling

//   // Toggle play/pause
//   const togglePlayPause = () => {
//     setIsPaused(prev => !prev);
//   };

//   // Adjust juggling speed
//   const changeSpeed = increment => {
//     setSpeed(prevSpeed => Math.max(0.1, prevSpeed + increment)); // Minimum speed = 0.1
//   };

//   return (
//     <div>
//       <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
//         {/* Lighting */}
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />

//         {/* Joker */}
//         <Joker />

//         {/* Juggling Balls */}
//         <JugglingBalls isPaused={isPaused} speed={speed} />

//         {/* Controls */}
//         <OrbitControls />
//       </Canvas>

//       {/* UI Controls */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: '20px',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           display: 'flex',
//           gap: '10px',
//         }}
//       >
//         <button onClick={togglePlayPause}>{isPaused ? 'Play' : 'Pause'}</button>
//         <button onClick={() => changeSpeed(-0.1)}>Slow Down</button>
//         <button onClick={() => changeSpeed(0.1)}>Speed Up</button>
//       </div>
//     </div>
//   );
// }

// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// import { Footer, Navbar } from './components';
// import { About, Contact, Home, Projects } from './pages';

// const App = () => {
//   return (
//     <main className="max-w-7xl mx-auto relative">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/*"
//             element={
//               <>
//                 <Routes>
//                   <Route path="/about" element={<About />} />
//                   <Route path="/projects" element={<Projects />} />
//                   <Route path="/contact" element={<Contact />} />
//                 </Routes>
//                 <Footer />
//               </>
//             }
//           />
//         </Routes>
//       </Router>
//     </main>
//   );
// };

// export default App;
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import WorkExperience from './pages/Experience.jsx';
import Home from './pages/Home.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const App = () => {
  function NavigateToGitHub() {
    window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
    return null;
  }
  function NavigateToLinkedIn() {
    window.open('https://www.google.com', '_blank', 'noopener,noreferrer');
    return null;
  }

  return (
    <main className="max-w-7xl mx-auto relative">
      <Router>
        <Navbar />
        <Home />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
        <Routes>
          <Route path="/#projects" element={<Projects />} />
          <Route path="/#linkedin" element={<NavigateToLinkedIn />} />
          <Route path="/#github" element={<NavigateToGitHub />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
