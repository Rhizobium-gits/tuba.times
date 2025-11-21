export default function Seasons() {
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
        季節の景色
      </h1>
      <p style={{ fontSize: '16px', marginTop: '10px' }}>
        カメラで切り取った四季の風景と、その月の振り返り
      </p>

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
      </nav>

      {/* 2025年1月 */}
      <article style={{ 
        marginTop: '40px', 
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2025年1月</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/season-202501.jpg" 
            alt="2025年1月の景色" 
            style={{ 
              width: '100%', 
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }} 
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
            📍 撮影場所: [場所の名前]
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り</h3>
          <p style={{ marginBottom: '15px' }}>
            ここに1月の振り返りを書きます。
            その月にあった出来事、感じたこと、学んだこと、
            印象に残ったエピソードなどを自由に綴ってください。
          </p>
          <p>
            写真についての感想や、撮影時のエピソード、
            その場所の雰囲気なども書くと良いでしょう。
          </p>
        </div>
      </article>

      {/* 2024年12月 */}
      <article style={{ 
        marginTop: '40px', 
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2024年12月</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/season-202412.jpg" 
            alt="2024年12月の景色" 
            style={{ 
              width: '100%', 
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }} 
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
            📍 撮影場所: [場所の名前]
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り</h3>
          <p style={{ marginBottom: '15px' }}>
            12月の振り返りをここに書きます。
          </p>
        </div>
      </article>

      {/* 2024年11月 */}
      <article style={{ 
        marginTop: '40px', 
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2024年11月</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/season-202411.jpg" 
            alt="2024年11月の景色" 
            style={{ 
              width: '100%', 
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }} 
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
            📍 撮影場所: [場所の名前]
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り</h3>
          <p style={{ marginBottom: '15px' }}>
            11月の振り返りをここに書きます。
          </p>
        </div>
      </article>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString('ja-JP')}
      </p>
    </div>
  );
}
