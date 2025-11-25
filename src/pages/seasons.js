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





      {/* 2025年11月 */}
      <article style={{ 
        marginTop: '40px', 
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2025年11月</h2>
        
        <div style={{ marginBottom: '30px' }}>
          <img
            src="/images/season-202411.jpg"
            alt="2025年11月の景色"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 河口湖
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <img 
            src="/images/season-202411-2.jpg" 
            alt="2025年11月の景色" 
            style={{ 
              width: '100%', 
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }} 
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 神田明神
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り</h3>
          <p style={{ marginBottom: '15px' }}>
            今月は同窓会の幹事を引き受けたりTechnetopeの開発合宿をおこなったり，研究費申請を行ったりした．主な遠出としては富士山麓河口湖紅葉祭りに参加し，ほうとうを食べ，そのまま富士眺望の湯ゆらりでゆっくりしたり江ノ島で朝焼けを見たりした．後は，ORF．それまでにゲノム解析を終わらせて発表するつもりがラボのMiSeqが故障してしまいそれが困難となった．割には発表の機会が多く，中間発表とか韓国研修のための英語発表などがあった．
          </p>
        </div>
      </article>

{/* 2025年10月 */}
      <article style={{
        marginTop: '40px',
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2025年10月</h2>
      
        <div style={{ marginBottom: '30px' }}>
          <img
            src="/images/season-202410.jpg"
            alt="2025年10月の景色"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 江ノ島沖
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <img
            src="/images/season-202410-2.jpg"
            alt="2025年10月の景色2"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 横浜イングリッシュガーデン
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り$
          <p style={{ marginBottom: '15px' }}>
            今月は割と自由な時間の多い月だった．夏季休暇明けということもあり，実験や研究もそこまで忙しくなかった．今月の暇さが，来月自分を苦しめることになる気がする．恐ろしや，，，．主なお出かけとしてはYEG(横浜イングリッシュガーデン)に行った．艶やかな薔薇が咲き誇っており美しかった．
          </p>
        </div>
      </article>

{/* 2025年9月 */}
      <article style={{
        marginTop: '40px',
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2025年9月</h2>
              
        <div style={{ marginBottom: '30px' }}>
          <img
            src="/images/season-202409-2.jpg"
            alt="2025年9月の景色"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />   
        <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 鶴岡タウンキャンパス研修棟
   　　 </p>
        </div>

        <img
            src="/images/season-202409.jpg"
            alt="2025年9月の景色2"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />
          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 大阪関西万博
          </p>
        </div>
      
        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り$
          <p style={{ marginBottom: '15px' }}>
            実験系が長引き，もう少し鶴岡に滞在することになった．札幌にも行った．友人に北海道で一番美味い新武咲屋というラーメン屋さんに連れて行ってもらった．ようやく鶴岡という街での生活に諦めがつき，最近はスーパーで野菜を買って電子レンジのみでできる鍋しか食べていない気がする．一応野菜を摂取できているので8月のように頭がおかしくな理想にはなっていない．しかし，とにかく綺麗な自分のフライパンさえあれば色々作れるレパートリーが増えるのにという苛立ちと，湘南に帰ったら自炊をしようというモチベーションに駆られている．久しぶりに実家に帰省し，家族で大阪関西万博に行ったり免許を撮りに行ったりした．あと，尾道旅行もした．免許を取ったので親同席で車の練習をしたが，実家の車が3ナンバーで横幅があったので慣れるまでに時間がかかった．
          </p>
        </div>
      </article>
         
{/* 2025年8月 */}
      <article style={{
        marginTop: '40px',
        marginBottom: '60px',
        paddingBottom: '40px',
        borderBottom: '1px solid #ddd'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '15px' }}>2025年9月</h2>

        <div style={{ marginBottom: '30px' }}>
          <img
            src="/images/season-202408.jpg"
            alt="2025年8月の景色"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 上海タワーを望む

        <img
            src="/images/season-202408-2.jpg"
            alt="2025年8月の景色2"
            style={{
              width: '100%',
              maxHeight: '500px',
              objectFit: 'cover',
              border: '1px solid #ccc',
              marginBottom: '15px'
            }}
          />

          <p style={{ fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
             撮影場所: 北京故宮
          </p>
        </div>

        <div style={{ lineHeight: '1.8' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>今月の振り返り$
          <p style={{ marginBottom: '15px' }}>
            中国にインターンに行った．旅行も兼ねていたため，上海や北京の主要な施設の多くを回ることができた．あとは今月から鶴岡で実験が始まった．大学に入って初めて行う実験なので楽しみだ．
          </p>
        </div>
      </article>   
        
          
      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>   
        Last updated: {new Date().toLocaleDateString('ja-JP')}
      </p>
    </div>
  );



      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString('ja-JP')}
      </p>
    </div>
  );

}
