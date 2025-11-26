import { useRef, useEffect, useState } from 'react';

export default function Music() {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const sourceRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const initAudio = () => {
    if (audioContextRef.current) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    
    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    sourceRef.current = source;
  };

  const drawWaveform = () => {
    const canvas = canvasRef.current;
    const analyser = analyserRef.current;
    if (!canvas || !analyser) return;

    const ctx = canvas.getContext('2d');
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(dataArray);

      ctx.fillStyle = '#1a1a2e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#00d4ff';
      ctx.beginPath();

      const sliceWidth = canvas.width / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        x += sliceWidth;
      }

      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.stroke();
    };

    draw();
  };

  const handlePlay = () => {
    initAudio();
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    audioRef.current.play();
    setIsPlaying(true);
    drawWaveform();
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  return (
    <div style={{
      fontFamily: 'Tsubafont, Times New Roman, serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '0 20px',
      backgroundColor: '#ffffff',
      color: '#000000'
    }}>
      <h1 style={{
        fontSize: '24px',
        borderBottom: '2px solid #000000',
        paddingBottom: '10px'
      }}>
        音楽
      </h1>
      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
      </nav>
      
      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>プレイリスト</h2>
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '15px' }}>I Love Unchi - composition: Jundai OKANO</h3>
          <div style={{
            border: '1px solid #ccc',
            padding: '20px',
            borderRadius: '8px',
            backgroundColor: '#1a1a2e'
          }}>
            <canvas
              ref={canvasRef}
              width={760}
              height={150}
              style={{
                width: '100%',
                height: '150px',
                borderRadius: '4px',
                marginBottom: '15px'
              }}
            />
            <audio
              ref={audioRef}
              onEnded={handleEnded}
              style={{ display: 'none' }}
            >
              <source src="/music/i-love-unchi.wav" type="audio/wav" />
            </audio>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                style={{
                  padding: '10px 30px',
                  fontSize: '16px',
                  cursor: 'pointer',
                  backgroundColor: '#00d4ff',
                  border: 'none',
                  borderRadius: '25px',
                  color: '#1a1a2e',
                  fontWeight: 'bold'
                }}
              >
                {isPlaying ? '⏸ 一時停止' : '▶ 再生'}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                defaultValue="1"
                onChange={(e) => {
                  if (audioRef.current) {
                    audioRef.current.volume = e.target.value;
                  }
                }}
                style={{ flex: 1 }}
              />
              <span style={{ color: '#ffffff', fontSize: '14px' }}>🔊</span>
            </div>
          </div>
        </div>
      </article>
      
      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
