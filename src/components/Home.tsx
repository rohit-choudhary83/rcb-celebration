import { useState } from 'react';
import './BallAnimation.css';
import MainContent from './MainContent';
import FanMessageWall from './FanMessageWall';
import { Helmet } from 'react-helmet';

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
      <Helmet>
                    <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

            <title>RCB Universe - Fan Zone & Highlights</title>

            <meta name="description" content="Join the ultimate RCB fan community! Explore fan messages, memes, and highlights celebrating Royal Challengers Bangalore." />
            <meta name="keywords" content="RCB, Royal Challengers Bangalore, IPL, Cricket Fans, Cricket Memes, IPL Highlights, Fan Messages" />
            <meta name="author" content="Your Name or Team Name" />
            <meta name="robots" content="index, follow" />
            
            <meta property="og:title" content="RCB Universe - Fan Zone & Highlights" />
            <meta property="og:description" content="Join the ultimate RCB fan community! Explore fan messages, memes, and highlights celebrating Royal Challengers Bangalore." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yourwebsite.com" />
            <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="RCB Universe - Fan Zone & Highlights" />
            <meta name="twitter:description" content="Join the ultimate RCB fan community! Explore fan messages, memes, and highlights celebrating Royal Challengers Bangalore." />
            <meta name="twitter:image" content="https://yourwebsite.com/twitter-image.jpg" />

      </Helmet>
    </div>
  );
};

export default Home;
