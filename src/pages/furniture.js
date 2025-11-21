export default function Furniture() {
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
        お気に入りのガジェット
      </h1>

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
      </nav>
      
      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0 }}>
            <img 
              src="/images/gadget1.jpg" 
              alt="ガジェット1" 
              style={{ 
                width: '250px', 
                height: '250px', 
                objectFit: 'cover',
                border: '1px solid #ccc'
              }} 
            />
            <p style={{ 
              textAlign: 'center', 
              marginTop: '10px', 
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              ガジェット名1
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              投稿日: {new Date().toLocaleDateString()}
            </p>
            <p style={{ lineHeight: '1.8' }}>
              ここにガジェットの説明を書きます。使い心地、デザインの特徴、
              購入した理由、おすすめポイントなど。
              複数行にわたって詳しく説明できます。
            </p>
          </div>
        </div>
      </article>

      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0 }}>
            <img 
              src="/images/gadget2.jpg" 
              alt="ガジェット2" 
              style={{ 
                width: '250px', 
                height: '250px', 
                objectFit: 'cover',
                border: '1px solid #ccc'
              }} 
            />
            <p style={{ 
              textAlign: 'center', 
              marginTop: '10px', 
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              ガジェット名2
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              投稿日: {new Date().toLocaleDateString()}
            </p>
            <p style={{ lineHeight: '1.8' }}>
              2つ目のガジェットについての説明。
              機能、使い方、他の製品との比較など。
            </p>
          </div>
        </div>
      </article>

      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div style={{ flexShrink: 0 }}>
            <img 
              src="/images/gadget3.jpg" 
              alt="ガジェット3" 
              style={{ 
                width: '250px', 
                height: '250px', 
                objectFit: 'cover',
                border: '1px solid #ccc'
              }} 
            />
            <p style={{ 
              textAlign: 'center', 
              marginTop: '10px', 
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              ガジェット名3
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
              投稿日: {new Date().toLocaleDateString()}
            </p>
            <p style={{ lineHeight: '1.8' }}>
              3つ目のガジェットについての説明。
            </p>
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

