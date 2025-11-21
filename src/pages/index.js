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
        佐藤 翼
      </h1>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>所属</h2>
      <p style={{ lineHeight: '1.8' }}>
        慶應義塾大学 環境情報学部 1年<br />
        慶應義塾大学 先端生命科学研究所 腸内細菌グループ (PI: 福田真嗣)<br />
        東京科学大学（旧東京医科歯科大学) 難治疾患研究所 計算システム生物学分野 (PI: 島村徹平)
      </p>
      
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
        <li>Nature to Tech, Tech to Nature. (2024)</li>
        <li>Technetope (2025)</li>
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
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>経歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>慶應義塾大学 先端生命科学研究所 腸内細菌叢グループ (PI: 福田真嗣)</li>
        <li>東京科学大学（旧東京医科歯科大学）難治疾患研究所 計算システム生物学分野 (PI: 島村徹平)</li>
        <li>ADvance Lab 副所長インターン</li>
        <li>ADvance Lab 宇宙部門リーダー</li>
        <li>北京聚力維度科技有限公司 インターン（中国・北京）</li>
        <li>名古屋大学大学院医学系研究科 システム生物学研究室 派遣勤務 (PI: 島村徹平)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>受賞歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <a href="https://www.nature.com/collections/ghbjijhbci" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">TOP100 DOWNLOADED ARTICLES 2024 (Scientific Reports・Nature Portfolio)</a>
        </li>
        <li>日本植物生理学会(JSPP) 奨励賞 (第64回年会 高校生発表の部)</li>
        <li>京都大学宇宙ユニットシンポジウム(第16回) 優秀賞 (京都大学宇宙ユニット)</li>        
        <li>銀賞 日本生化学 (JBS）（第95回大会、高校生発表部門）</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Tsubatimes</h2>
      <ul style={{ listStyleType: 'disc' }}>
        <li> <a href="/tsubafont" style={{ color: '#0000EE' }}>Tsubafont について</a>
<img 
            src="/images/tsubafont-icon.png" 
            alt="Tsubafont" 
            style={{ 
              width: '300px', 
              height: 'auto', 
              display: 'block',
              marginBottom: '8px'
            }}
          />
        </li>
        <li><a href="/furniture" style={{ color: '#0000EE' }}>お気に入りのガジェット</a></li>
        <li><a href="/seasons" style={{ color: '#0000EE' }}>季節の景色</a></li>
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
