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
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/images/gadget1.jpg" 
            alt="バルミューダ MoonKettle KPT02JP" 
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              border: '1px solid #ccc'
            }} 
          />
          <p style={{ 
            marginTop: '15px', 
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            BALMUDA MoonKettle KPT02JP
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginTop: '10px',
            marginBottom: '15px' 
          }}>
            投稿日:2025年11月22日
          </p>
          <p style={{ 
            lineHeight: '1.8',
            textAlign: 'left',
            marginTop: '15px'
          }}>
            一度ずつ温度調整が可能な電気ポット．お湯を沸かすと綺麗な音楽が再生される．取手が満月のような美しい形状をしている．とりあえず置いとくだけで侘び寂びが生まれる．
          </p>
        </div>
      </article>

      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/images/gadget2.jpg" 
            alt="Happy Hacking Keyboard | Professional US配列 - 墨" 
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              border: '1px solid #ccc'
            }} 
          />
          <p style={{ 
            marginTop: '15px', 
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            HHKB | Professional US配列 - 墨
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginTop: '10px',
            marginBottom: '15px' 
          }}>
            投稿日:2025年11月22日
          </p>
          <p style={{ 
            lineHeight: '1.8',
            textAlign: 'left',
            marginTop: '15px'
          }}>
            HHKBの配列に慣れてきた頃にHHKB配列の魅力を知る．Type-Sにはないパチパチ感に惹かれた．あまりにも合理的なHHKB US配列の沼にハマっている．これまた墨色という色も美しい．
          </p>
        </div>
      </article>

      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <img 
            src="/images/gadget3.jpg" 
            alt="Happy Hacking Keyboard | Professional Type-S JIS配列 - 雪" 
            style={{ 
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              border: '1px solid #ccc'
            }} 
          />
          <p style={{ 
            marginTop: '15px', 
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            HHKB | Professional Type-S JIS配列 - 雪
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginTop: '10px',
            marginBottom: '15px' 
          }}>
            投稿日:2025年11月22日
          </p>
          <p style={{ 
            lineHeight: '1.8',
            textAlign: 'left',
            marginTop: '15px'
          }}>
            初めて買ったHHKB．高いので怖くて日本語配列のType Sを購入．カフェや会議など静音性が求められる際に利用．雪という名前にも惹かれた．
          </p>
        </div>
      </article>

      <article style={{ marginTop: '40px', marginBottom: '60px' }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src="/images/gadget4.jpg"
            alt="Kensington Slimblade Pro K72081JP"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              border: '1px solid #ccc'
            }}
          />
          <p style={{
            marginTop: '15px',
            fontSize: '18px',
            fontWeight: 'bold'
          }}>
            Kensington Slimblade Pro K72081JP
          </p>
          <p style={{ 
            fontSize: '14px', 
            color: '#666', 
            marginTop: '10px',
            marginBottom: '15px' 
          }}>
            投稿日:2025年11月22日
          </p>
          <p style={{ 
            lineHeight: '1.8',
            textAlign: 'left',
            marginTop: '15px'
          }}>
            奇抜なデザインが気になって購入した．慣れると結構使いやすく，ホールドするタイプよりも手が疲れない．慣れると沼から抜け出せない．
          </p>
        </div>
      </article>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
