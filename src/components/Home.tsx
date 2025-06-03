import { useState } from 'react';
import './BallAnimation.css';
import MainContent from './MainContent';
import FanMessageWall from './FanMessageWall';

const Home = () => {
  const [showBall, setShowBall] = useState(true);
  const [showMain, setShowMain] = useState(true);

  const handleAnimationEnd = () => setShowBall(false);
  const handleCelebrate = () => setShowMain(false); // Triggers wall

  return (
    <div className="app-container bg-black min-h-screen text-white transition-all duration-1000">
      {showBall ? (
        <div className="ball-wrapper" onAnimationEnd={handleAnimationEnd}>
          <div className="cricket-ball" />
        </div>
      ) : showMain ? (
        <MainContent onCelebrate={handleCelebrate} />
      ) : (
        <FanMessageWall />
      )}
    </div>
  );
};

export default Home;
