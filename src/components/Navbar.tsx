import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import BackgroundAudio, { type BackgroundAudioHandle } from './BackgroundAudio';
import { Link } from 'react-router-dom'; 



const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<BackgroundAudioHandle>(null);

  const handleToggleAudio = () => {
    audioRef.current?.togglePlay();
    setIsPlaying((prev) => !prev);
  };

  const Links = [
    { name: 'Home Page', href: '/' },
    { name: 'Fan Message Wall', href: '/fan-wall' },
    { name: 'Meme Section', href: '/memes' },
    { name: 'RCB Highlights Slider', href: '/highlights' },
  ];

  return (
    <>
      <nav className="bg-[#e50914] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to='/' >
            <div className="text-xl font-bold"> RCB Universe</div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-8 font-medium">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="hover:text-yellow-300 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Audio Toggle Button */}
            <button
              onClick={handleToggleAudio}
              className="bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded"
              aria-label="Toggle background music"
            >
              {isPlaying ? '🔊 Stop Music' : '🔈 Play Music'}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {open && (
          <ul className="md:hidden px-4 pb-4 space-y-3 text-center bg-[#e50914]">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-yellow-300 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
      <BackgroundAudio ref={audioRef} />
    </>
  );
};

export default Navbar;
