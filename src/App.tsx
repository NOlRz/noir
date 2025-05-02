import React, { useState, useEffect } from 'react';
import { Music, Quote, X } from 'lucide-react';

function App() {
  const [showEnterOverlay, setShowEnterOverlay] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    setAudioElement(audio);

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioElement) {
      if (audioPlaying) {
        audioElement.pause();
      } else {
        audioElement.play().catch(e => console.error("Audio playback failed:", e));
      }
      setAudioPlaying(!audioPlaying);
    }
  };

  const handleEnter = () => {
    setShowEnterOverlay(false);
  };

  return (
    <div className="min-h-screen bg-black text-pink-300 font-mono flex flex-col items-center justify-center relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 bg-black opacity-90 z-0"></div>
      
      {/* Animated Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-bg-pulse pointer-events-none z-10"></div>
      
      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 overflow-hidden z-20 pointer-events-none opacity-30">
        <div className="absolute inset-0 flex">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-1 h-full animate-matrix-rain"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.5
              }}
            >
              {[...Array(30)].map((_, j) => (
                <div
                  key={j}
                  className="text-pink-300 text-opacity-50 select-none"
                  style={{
                    transform: `translateY(${Math.random() * 100}vh)`,
                  }}
                >
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Noise Texture */}
      <div 
        className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1Ii8+PC9zdmc+')] animate-noise opacity-50 pointer-events-none z-30"
      ></div>

      {/* Enter Overlay */}
      {showEnterOverlay && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-96 flex items-center justify-center cursor-pointer z-50"
          onClick={handleEnter}
        >
          <span className="text-pink-300 text-2xl animate-blink transition-all duration-300">
            "CLICK_TO_ENTER"
          </span>
        </div>
      )}

      {/* Quotation Marks */}
      <div className="fixed top-20 left-20 text-9xl font-bold text-pink-300 opacity-10 z-40 animate-float">"</div>

      {/* Industrial Tapes */}
      <div className="fixed left-[-45px] top-1/2 bg-pink-300 text-black py-1 px-4 font-bold transform -rotate-90 tracking-wider hover:bg-white transition-colors duration-300 z-40">
        PERSONAL_WEBSITE™
      </div>
      <div className="fixed right-[-25px] top-1/2 bg-pink-300 text-black py-1 px-4 font-bold transform -rotate-90 tracking-wider hover:bg-white transition-colors duration-300 z-40">
        EST. 2024
      </div>

      {/* Corner Decoration */}
      <div className="fixed bottom-5 left-5 text-sm text-pink-300 opacity-50 z-40">
        ♥ ♥ ♥
      </div>

      {/* Scan Line */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-b from-transparent via-pink-300/15 to-transparent animate-scan z-40"></div>

      {/* Audio Controls */}
      <button 
        className="fixed top-5 right-5 bg-transparent border border-pink-300 text-pink-300 cursor-pointer p-2.5 text-sm transition-all hover:animate-pulse-glow hover:bg-pink-300/10 flex items-center gap-2 rounded z-40"
        onClick={toggleAudio}
      >
        [ {audioPlaying ? <X size={16} /> : <Music size={16} />} {audioPlaying ? 'music_off' : 'music_on'} ]
      </button>

      {/* Main Content */}
      <div className="relative z-40">
        {/* ASCII Art Logo */}
        <pre className="text-pink-300 text-xs sm:text-sm md:text-base animate-glitch mb-8 mt-8 transition-all duration-300">
{`   ███▄    █  ▒█████   ██▓ ██▀███  
 ██ ▀█   █ ▒██▒  ██▒▓██▒▓██ ▒ ██▒
▓██  ▀█ ██▒▒██░  ██▒▒██▒▓██ ░▄█ ▒
▓██▒  ▐▌██▒▒██   ██░░██░▒██▀▀█▄  
▒██░   ▓██░░ ████▓▒░░██░░██▓ ▒██▒
░ ▒░   ▒ ▒ ░ ▒░▒░▒░ ░▓  ░ ▒▓ ░▒▓░
░ ░░   ░ ▒░  ░ ▒ ▒░  ▒ ░  ░▒ ░ ▒░
   ░   ░ ░ ░ ░ ░ ▒   ▒ ░  ░░   ░ 
         ░     ░ ░   ░     ░     `}
        </pre>

        {/* Social Links */}
        <div className="mt-8 w-full max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <a 
              href="https://github.com/noir157" 
              className="border border-pink-300 p-4 flex flex-col gap-2 transition-all hover:animate-pulse-glow hover:bg-pink-300/10 hover:transform hover:-translate-y-0.5 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold font-sans tracking-wide bg-gradient-to-r from-pink-300 to-white bg-clip-text hover:animate-text-shimmer">"GITHUB"</span>
            </a>
            <a 
              href="https://steamcommunity.com/id/cc_rajada" 
              className="border border-pink-300 p-4 flex flex-col gap-2 transition-all hover:animate-pulse-glow hover:bg-pink-300/10 hover:transform hover:-translate-y-0.5 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="font-bold font-sans tracking-wide bg-gradient-to-r from-pink-300 to-white bg-clip-text hover:animate-text-shimmer">"STEAM"</span>
              <span className="text-sm opacity-80">Noir</span>
            </a>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 mb-8 flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity duration-300 animate-float">
          <Quote size={16} />
          <span>digital dreams in a neon wasteland</span>
        </div>
      </div>
    </div>
  );
}

export default App;