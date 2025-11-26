import { useRef, useEffect, useState } from 'react';

export default function Music() {
  const waveformCanvasRef = useRef(null);
  const zoomedCanvasRef = useRef(null);
  const spectrogramCanvasRef = useRef(null);
  const spectrumCanvasRef = useRef(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const analyserRef = useRef(null);
  const audioContextRef = useRef(null);
  const spectrogramDataRef = useRef([]);
  const maxSpectrumRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [maxSpectrum, setMaxSpectrum] = useState(0);

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
    analyser.smoothingTimeConstant = 0.8;
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    
    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(audioContext.destination);

    audioContextRef.current = audioContext;
    analyserRef.current = analyser;
    spectrogramDataRef.current = [];
    maxSpectrumRef.current = 0;
  };

  const drawAllVisualizations = () => {
    const analyser = analyserRef.current;
    if (!analyser) return;

    const timeDomainData = new Uint8Array(analyser.fftSize);
    const frequencyData = new Uint8Array(analyser.frequencyBinCount);

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      analyser.getByteTimeDomainData(timeDomainData);
      analyser.getByteFrequencyData(frequencyData);

      // 最大値を更新
      const currentMax = Math.max(...frequencyData);
      if (currentMax > maxSpectrumRef.current) {
        maxSpectrumRef.current = currentMax;
        setMaxSpectrum(currentMax);
      }

      drawWaveform(timeDomainData);
      drawZoomedWaveform(timeDomainData);
      drawSpectrogram(frequencyData);
      drawSpectrum(frequencyData, maxSpectrumRef.current);

      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    draw();
  };

  // 1. 波形図（全体）
  const drawWaveform = (dataArray) => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1f77b4';
    ctx.beginPath();

    const sliceWidth = canvas.width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const v = (dataArray[i] - 128) / 128;
      const y = (1 - v) * canvas.height / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    ctx.stroke();

    // 軸ラベル
    ctx.fillStyle = '#000';
    ctx.font = '10px sans-serif';
    ctx.fillText('1.0', 2, 12);
    ctx.fillText('0.0', 2, canvas.height / 2 + 4);
    ctx.fillText('-1.0', 2, canvas.height - 4);
  };

  // 2. 拡大波形（最初の部分）
  const drawZoomedWaveform = (dataArray) => {
    const canvas = zoomedCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1f77b4';
    ctx.beginPath();

    const zoomLength = 256;
    const sliceWidth = canvas.width / zoomLength;
    let x = 0;

    for (let i = 0; i < zoomLength && i < dataArray.length; i++) {
      const v = (dataArray[i] - 128) / 128;
      const y = (1 - v) * canvas.height / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      x += sliceWidth;
    }
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.font = '10px sans-serif';
    ctx.fillText('0.6', 2, 20);
    ctx.fillText('0.0', 2, canvas.height / 2 + 4);
    ctx.fillText('-0.4', 2, canvas.height - 8);
  };

  // 3. スペクトログラム
  const drawSpectrogram = (frequencyData) => {
    const canvas = spectrogramCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const column = new Uint8Array(frequencyData);
    spectrogramDataRef.current.push(column);

    const maxColumns = canvas.width;
    if (spectrogramDataRef.current.length > maxColumns) {
      spectrogramDataRef.current.shift();
    }

    ctx.fillStyle = '#1a0a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const columnWidth = 1;
    const data = spectrogramDataRef.current;

    for (let x = 0; x < data.length; x++) {
      const col = data[x];
      for (let y = 0; y < col.length; y++) {
        const value = col[y];
        const hue = 250 - (value / 255) * 200;
        const lightness = 10 + (value / 255) * 50;
        ctx.fillStyle = `hsl(${hue}, 100%, ${lightness}%)`;
        
        const yPos = canvas.height - (y / col.length) * canvas.height;
        ctx.fillRect(x * columnWidth, yPos, columnWidth, canvas.height / col.length + 1);
      }
    }

    ctx.fillStyle = '#fff';
    ctx.font = '10px sans-serif';
    ctx.fillText('8000', 2, 12);
    ctx.fillText('4000', 2, canvas.height / 2);
    ctx.fillText('0 Hz', 2, canvas.height - 4);
  };

  // 4. パワースペクトル密度（最大値に基づくスケール）
  const drawSpectrum = (frequencyData, maxValue) => {
    const canvas = spectrumCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 最大値が0の場合はデフォルト値を使用
    const effectiveMax = maxValue > 0 ? maxValue : 255;

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1f77b4';
    ctx.beginPath();

    const barWidth = canvas.width / frequencyData.length;

    for (let i = 0; i < frequencyData.length; i++) {
      const value = frequencyData[i];
      // 最大値に基づいて正規化
      const percent = value / effectiveMax;
      const y = canvas.height - percent * (canvas.height - 20);
      const x = i * barWidth;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // dB値に変換（Web Audio APIの範囲: -90dB ~ -10dB）
    const minDecibels = -90;
    const maxDecibels = -10;
    const dbRange = maxDecibels - minDecibels;
    const maxDb = Math.round(minDecibels + (effectiveMax / 255) * dbRange);
    const midDb = Math.round(minDecibels + (effectiveMax / 255) * dbRange * 0.5);

    // 軸ラベル（実際の最大値に基づく）
    ctx.fillStyle = '#000';
    ctx.font = '10px sans-serif';
    ctx.fillText(`${maxDb} dB`, 2, 15);
    ctx.fillText(`${midDb}`, 2, canvas.height / 2);
    ctx.fillText(`${minDecibels}`, 2, canvas.height - 4);
    ctx.fillText('0 Hz', 40, canvas.height - 4);
    ctx.fillText('8000 Hz', canvas.width - 50, canvas.height - 4);
  };

  const handlePlay = () => {
    initAudio();
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
    audioRef.current.play();
    setIsPlaying(true);
    drawAllVisualizations();
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

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleReset = () => {
    maxSpectrumRef.current = 0;
    setMaxSpectrum(0);
    spectrogramDataRef.current = [];
  };

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
  };

  const canvasStyle = {
    width: '100%',
    border: '1px solid #ccc',
    marginBottom: '5px'
  };

  const labelStyle = {
    fontSize: '12px',
    color: '#333',
    marginBottom: '3px'
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
          
          <div style={{ border: '1px solid #000', padding: '15px' }}>
            {/* 1. 波形図 */}
            <p style={labelStyle}>波形図（全体）</p>
            <canvas
              ref={waveformCanvasRef}
              width={760}
              height={80}
              style={canvasStyle}
            />

            {/* 2. 拡大波形 */}
            <p style={labelStyle}>波形図（拡大）</p>
            <canvas
              ref={zoomedCanvasRef}
              width={760}
              height={80}
              style={canvasStyle}
            />

            {/* 3. スペクトログラム */}
            <p style={labelStyle}>スペクトログラム</p>
            <canvas
              ref={spectrogramCanvasRef}
              width={760}
              height={100}
              style={canvasStyle}
            />

            {/* 4. パワースペクトル密度 */}
            <p style={labelStyle}>パワースペクトル密度（最大値: {maxSpectrum > 0 ? Math.round(-90 + (maxSpectrum / 255) * 80) : '--'} dB）</p>
            <canvas
              ref={spectrumCanvasRef}
              width={760}
              height={80}
              style={canvasStyle}
            />

            <audio
              ref={audioRef}
              onEnded={handleEnded}
              onLoadedMetadata={handleLoadedMetadata}
              style={{ display: 'none' }}
            >
              <source src="/music/i-love-unchi.wav" type="audio/wav" />
            </audio>

            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              marginTop: '15px'
            }}>
              <button
                onClick={isPlaying ? handlePause : handlePlay}
                style={{
                  padding: '8px 20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  border: '1px solid #000',
                  color: '#000'
                }}
              >
                {isPlaying ? '■ 停止' : '▶ 再生'}
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '8px 15px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  backgroundColor: '#fff',
                  border: '1px solid #000',
                  color: '#000'
                }}
              >
                リセット
              </button>
              <span style={{ fontSize: '14px', fontFamily: 'monospace' }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
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
