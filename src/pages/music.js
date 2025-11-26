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
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  // 動的な最大値・周波数範囲を追跡
  const maxValuesRef = useRef({
    waveformMax: 0,
    zoomedMax: 0,
    spectrumMax: 0,
    spectrogramMax: 0,
    minFreqBin: Infinity,
    maxFreqBin: 0
  });

  const sampleRateRef = useRef(44100);
  const NOISE_THRESHOLD = 10; // ノイズフロアのしきい値

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
    sampleRateRef.current = audioContext.sampleRate;
    
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
    
    // 最大値をリセット
    maxValuesRef.current = {
      waveformMax: 0,
      zoomedMax: 0,
      spectrumMax: 0,
      spectrogramMax: 0,
      minFreqBin: Infinity,
      maxFreqBin: 0
    };
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

      // 最大値と周波数範囲を更新
      updateMaxValues(timeDomainData, frequencyData);

      drawWaveform(timeDomainData);
      drawZoomedWaveform(timeDomainData);
      drawSpectrogram(frequencyData);
      drawSpectrum(frequencyData);

      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    draw();
  };

  const updateMaxValues = (timeDomainData, frequencyData) => {
    const mv = maxValuesRef.current;
    
    // 波形の最大振幅を計算
    let waveMax = 0;
    let zoomedMax = 0;
    for (let i = 0; i < timeDomainData.length; i++) {
      const amplitude = Math.abs((timeDomainData[i] - 128) / 128);
      if (amplitude > waveMax) waveMax = amplitude;
      if (i < 256 && amplitude > zoomedMax) zoomedMax = amplitude;
    }
    
    // スペクトラムの最大値と周波数範囲を検出
    let specMax = 0;
    for (let i = 0; i < frequencyData.length; i++) {
      const value = frequencyData[i];
      if (value > specMax) specMax = value;
      
      // ノイズフロア以上の周波数ビンを検出
      if (value > NOISE_THRESHOLD) {
        if (i < mv.minFreqBin) mv.minFreqBin = i;
        if (i > mv.maxFreqBin) mv.maxFreqBin = i;
      }
    }

    // 最大値を更新
    if (waveMax > mv.waveformMax) mv.waveformMax = waveMax;
    if (zoomedMax > mv.zoomedMax) mv.zoomedMax = zoomedMax;
    if (specMax > mv.spectrumMax) mv.spectrumMax = specMax;
    if (specMax > mv.spectrogramMax) mv.spectrogramMax = specMax;
  };

  // ビン番号から周波数(Hz)に変換
  const binToFreq = (bin, totalBins) => {
    const nyquist = sampleRateRef.current / 2;
    return (bin / totalBins) * nyquist;
  };

  // 周波数を読みやすい形式に変換
  const formatFreq = (hz) => {
    if (hz >= 1000) {
      return `${(hz / 1000).toFixed(1)}kHz`;
    }
    return `${Math.round(hz)}Hz`;
  };

  // 1. 波形図（全体）
  const drawWaveform = (dataArray) => {
    const canvas = waveformCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const maxAmp = maxValuesRef.current.waveformMax || 1;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1f77b4';
    ctx.beginPath();

    const sliceWidth = canvas.width / dataArray.length;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      const v = (dataArray[i] - 128) / 128;
      const normalizedV = v / maxAmp;
      const y = (1 - normalizedV) * canvas.height / 2;

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
    ctx.font = '10px monospace';
    ctx.fillText(maxAmp.toFixed(2), 2, 12);
    ctx.fillText('0.00', 2, canvas.height / 2 + 4);
    ctx.fillText((-maxAmp).toFixed(2), 2, canvas.height - 4);
  };

  // 2. 拡大波形
  const drawZoomedWaveform = (dataArray) => {
    const canvas = zoomedCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const maxAmp = maxValuesRef.current.zoomedMax || 1;

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
      const normalizedV = v / maxAmp;
      const y = (1 - normalizedV) * canvas.height / 2;

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
    ctx.font = '10px monospace';
    ctx.fillText(maxAmp.toFixed(2), 2, 12);
    ctx.fillText('0.00', 2, canvas.height / 2 + 4);
    ctx.fillText((-maxAmp).toFixed(2), 2, canvas.height - 4);
    
    const zoomTime = (zoomLength / sampleRateRef.current * 1000).toFixed(1);
    ctx.fillText('0', 30, canvas.height - 4);
    ctx.fillText(`${zoomTime}ms`, canvas.width - 40, canvas.height - 4);
  };

  // 3. スペクトログラム（動的周波数範囲）
  const drawSpectrogram = (frequencyData) => {
    const canvas = spectrogramCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const mv = maxValuesRef.current;
    const maxVal = mv.spectrogramMax || 255;

    // 周波数範囲（マージンを追加）
    const minBin = Math.max(0, mv.minFreqBin - 5);
    const maxBin = Math.min(frequencyData.length - 1, mv.maxFreqBin + 5);
    const binRange = maxBin - minBin || 1;

    // スペクトログラムデータを蓄積（検出範囲のみ保存）
    const column = frequencyData.slice(minBin, maxBin + 1);
    spectrogramDataRef.current.push({
      data: new Uint8Array(column),
      minBin,
      maxBin
    });

    const maxColumns = canvas.width;
    if (spectrogramDataRef.current.length > maxColumns) {
      spectrogramDataRef.current.shift();
    }

    ctx.fillStyle = '#1a0a2e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const dataArr = spectrogramDataRef.current;

    for (let x = 0; x < dataArr.length; x++) {
      const col = dataArr[x];
      const colData = col.data;
      
      for (let y = 0; y < colData.length; y++) {
        const value = colData[y];
        const normalizedValue = value / maxVal;
        const hue = 250 - normalizedValue * 200;
        const lightness = 10 + normalizedValue * 50;
        ctx.fillStyle = `hsl(${hue}, 100%, ${lightness}%)`;
        
        const yPos = canvas.height - ((y + 1) / colData.length) * canvas.height;
        const height = canvas.height / colData.length + 1;
        ctx.fillRect(x, yPos, 1, height);
      }
    }

    // 軸ラベル（実際の検出周波数範囲）
    const minFreq = binToFreq(minBin, frequencyData.length);
    const maxFreq = binToFreq(maxBin, frequencyData.length);
    const midFreq = (minFreq + maxFreq) / 2;

    ctx.fillStyle = '#fff';
    ctx.font = '10px monospace';
    ctx.fillText(formatFreq(maxFreq), 2, 12);
    ctx.fillText(formatFreq(midFreq), 2, canvas.height / 2);
    ctx.fillText(formatFreq(minFreq), 2, canvas.height - 4);
  };

  // 4. パワースペクトル密度（動的周波数範囲）
  const drawSpectrum = (frequencyData) => {
    const canvas = spectrumCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const mv = maxValuesRef.current;
    const maxVal = mv.spectrumMax || 255;
    
    // 周波数範囲
    const minBin = Math.max(0, mv.minFreqBin - 5);
    const maxBin = Math.min(frequencyData.length - 1, mv.maxFreqBin + 5);
    const binRange = maxBin - minBin || 1;

    // dB変換
    const minDb = -90;
    const maxDb = -10;
    const dbRange = maxDb - minDb;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1f77b4';
    ctx.beginPath();

    const barWidth = canvas.width / binRange;

    for (let i = minBin; i <= maxBin; i++) {
      const value = frequencyData[i];
      const percent = value / maxVal;
      const y = canvas.height - percent * canvas.height;
      const x = (i - minBin) * barWidth;

      if (i === minBin) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();

    // 軸ラベル（実際のdB値）
    const actualMaxDb = minDb + (maxVal / 255) * dbRange;
    ctx.fillStyle = '#000';
    ctx.font = '10px monospace';
    ctx.fillText(`${actualMaxDb.toFixed(0)}dB`, 2, 12);
    ctx.fillText(`${((actualMaxDb + minDb) / 2).toFixed(0)}dB`, 2, canvas.height / 2);
    ctx.fillText(`${minDb}dB`, 2, canvas.height - 4);
    
    // 周波数軸（検出範囲）
    const minFreq = binToFreq(minBin, frequencyData.length);
    const maxFreq = binToFreq(maxBin, frequencyData.length);
    ctx.fillText(formatFreq(minFreq), 35, canvas.height - 4);
    ctx.fillText(formatFreq(maxFreq), canvas.width - 50, canvas.height - 4);
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
            <p style={labelStyle}>スペクトログラム（検出周波数範囲）</p>
            <canvas
              ref={spectrogramCanvasRef}
              width={760}
              height={100}
              style={canvasStyle}
            />

            {/* 4. パワースペクトル密度 */}
            <p style={labelStyle}>パワースペクトル密度（検出周波数範囲）</p>
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
