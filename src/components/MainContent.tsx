import { useRef, useState } from 'react';

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
    </div>
  );
};

export default MainContent;
