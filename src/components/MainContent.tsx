import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';

const MainContent = ({ onCelebrate }: { onCelebrate: () => void }) => {
  const [zoom, setZoom] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = () => {
    // Play sound
    audioRef.current?.play().catch((err) => {
      console.warn('Sound error:', err);
    });

    // Start zoom
    setZoom(true);

    // Move to next screen after zoom
    setTimeout(() => {
      onCelebrate();
    }, 2000); // Same duration as zoom animation
  };

  return (
    <div className="p-5 text-center mt-[20vh] relative">
      <img
        src="/assets/rcb-logo.png"
        alt="RCB Logo"
        className={`w-[120px] mb-6 mx-auto transition-transform duration-[2000ms] ${
          zoom ? 'zoom-slow' : ''
        }`}
      />

      {!zoom && (
        <>
          <h1 className="text-[32px] font-bold text-[#e50914] animate-pulse">
            RCB ne finally jeet liya!  
          </h1>

          <button
            className="mt-5 py-3 px-6 bg-[#e50914] text-white rounded-full text-[18px] hover:bg-red-600 transition duration-300"
            onClick={handleClick}
          >
             Celebrate Now!
          </button>
        </>
      )}

      <audio ref={audioRef} src="/assets/lion-roar.mp3" preload="auto" />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="RCB Universe - Celebrate Royal Challengers Bangalore victories, share fan messages, memes, and highlights." />
        <meta name="keywords" content="RCB, Royal Challengers Bangalore, IPL, Cricket, Fan Messages, Memes, Highlights" />
        <meta name="author" content="Your Name or Team" />

        <meta property="og:title" content="RCB Universe - Celebrate RCB Victories" />
        <meta property="og:description" content="Join the RCB Universe with fan messages, memes, and match highlights!" />
        <meta property="og:image" content="https://yourdomain.com/assets/rcb-logo.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="RCB Universe - Celebrate RCB Victories" />
        <meta name="twitter:description" content="Join the RCB Universe with fan messages, memes, and match highlights!" />
        <meta name="twitter:image" content="https://yourdomain.com/assets/rcb-logo.png" />
        <title>RCB Universe - Celebrate Royal Challengers Bangalore</title>

      </Helmet>
    </div>
  );
};

export default MainContent;
