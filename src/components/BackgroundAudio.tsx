import   { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';

// **Make sure to export this interface**
export interface BackgroundAudioHandle {
  togglePlay: () => void;
  isPlaying: boolean;
}

const BackgroundAudio = forwardRef<BackgroundAudioHandle>((props, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
console.log(props)
  const startMusic = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      startMusic();
    }
  };

  useImperativeHandle(ref, () => ({
    togglePlay,
    isPlaying,
  }), [isPlaying]);

  useEffect(() => {
    const handleFirstClick = () => {
      startMusic();
      window.removeEventListener('click', handleFirstClick);
    };
    window.addEventListener('click', handleFirstClick);
    return () => {
      window.removeEventListener('click', handleFirstClick);
    };
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto" src="/assets/rcb-song.mp3" />
  );
});

export default BackgroundAudio;
