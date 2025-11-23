export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Tsubafont, Times New Roman, serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '0 20px',
      backgroundColor: '#ffffff',
      color: '#000000'
    }}>
      <div style={{ textAlign: 'right', marginBottom: '20px' }}>
        <a href="/index-en" style={{ color: '#0000EE' }}>English</a>
      </div>

      <h1 style={{ 
        fontSize: '24px',
        borderBottom: '2px solid #000000',
        paddingBottom: '10px'
      }}>
        ようこそ，佐藤 翼のサイトへ
      </h1>
      
<div style={{ textAlign: 'center', margin: '30px 0' }}>
        <img 
          src="/images/profile.jpg" 
          alt="佐藤 翼" 
          style={{ 
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
          }}
        />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p style={{ lineHeight: '1.8' }}>
          慶應義塾大学 環境情報学部 1年<br />
          慶應義塾大学 先端生命科学研究所 腸内細菌グループ (PI: 福田真嗣)<br />
          東京科学大学（旧東京医科歯科大学) 難治疾患研究所 計算システム生物学分野 (PI: 島村徹平)
        </p>
      </div>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>研究</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        2019年より，宇宙移住を背景とした縮小型閉鎖生態系維持システムの構築や，模擬地球外土壌を用いた生存可能性実験を行った．地球のバイオームを再現する実験を引き続き行っている．
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        2025年より，慶應義塾大学 先端生命科学研究所 腸内細菌グループに所属し、低重力および過重力環境下におけるヒト腸内細菌叢の時間列動態解析を行っています．
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        また，東京科学大学（旧東京医科歯科大学）難治疾患研究所の技術支援員として，細菌叢の時系列動的解析，深層学習モデルの応用，細菌培養装置の開発に携わっています．
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        学術活動以外では，ADvance Lab（株式会社リバネス）の宇宙部門リーダーとして，将来の月面インフラのための水溶性月面コンクリートの開発に取り組んでいます．
      </p>
      <p style={{ lineHeight: '1.8' }}>
        微生物学，システム生物学，有人宇宙学にまたがる学際的アプローチを積極的に推進しています．
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>作品</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li><a href="https://www.youtube.com/watch?v=UwiAPBqvmaM" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">Technetope (2025)</a></li>
        <li>Nature to Tech, Tech to Nature. (2024)</li>
      </ul>

      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>査読付き論文/国際学会採択</h2>
      <ol style={{ lineHeight: '1.8' }}>
        <li>
          <strong>Sato, T.</strong>, Abe, K., Koseki, J., et al. (2024). 
          "Survivability and life support in sealed mini-ecosystems with simulated planetary soils." 
          <i>Scientific Reports</i>, 14, 23670.{' '}
          <a href="https://www.nature.com/articles/s41598-024-75328-x" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">https://doi.org/10.1038/s41598-024-75328-x</a>
        </li>
        <li>
          <strong>Tsubasa SATO</strong> (2023). 
          "Survivability and life support in sealed mini-ecosystems with simulated planetary soils." 
          <i>7th MVA Global Workshop & Symposium (MVA2023)</i>
        </li>
      </ol>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Tsuba.times</h2>
      <ul style={{ listStyleType: 'disc' }}>
        <li><a href="/profile" style={{ color: '#0000EE' }}>略歴（研究・経歴・受賞歴）</a></li>
<li><a href="/tsubafont" style={{ color: '#0000EE' }}>Tsubaふぉんと について</a>         
 <img 
            src="/images/tsubafont-icon.png" 
            alt="Tsubaふぉんと" 
            style={{ 
              width: '300px', 
              height: 'auto', 
              display: 'block',
              marginBottom: '8px'
            }}
          />
        </li>
        <a href="/furniture" style={{ color: '#0000EE' }}>お気に入りのガジェット</a> - <a href="/seasons" style={{ color: '#0000EE' }}>季節の景色</a> - <a href="/music" style={{ color: '#0000EE' }}>音楽</a> - <a href="https://www.youtube.com/watch?v=W8RCRGdCC7I" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">なんか頑張ってる動画</a>
      </ul>
      
      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        marginTop: '20px',
        marginBottom: '20px'
      }}>
        <a href="https://x.com/rhizobium_st" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/x-icon.png" 
            alt="X" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </a>
        <a href="https://note.com/283note_/portal" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/note-icon.png" 
            alt="note" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </a>
        <a href="https://github.com/Rhizobium-gits" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/github-icon.png" 
            alt="GitHub" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </a>
        <a href="https://scholar.google.com/citations?user=13x6x4sAAAAJ&hl=ja&authuser=2" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/scholar-icon.png" 
            alt="Google Scholar" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
          />
        </a>
      </div>

      <p style={{ fontSize: '12px', textAlign: 'right' }}>
        Last updated: {new Date().toLocaleDateString('ja-JP')}<br />
        E-mail: sato.mb@keio.jp (Keio University) / t-sato.csb@tmd.ac.jp (Institute of Science Tokyo)
      </p>
    </div>
  );
}
