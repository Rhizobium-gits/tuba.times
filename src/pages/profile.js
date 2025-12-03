export default function Profile() {
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
        略歴
      </h1>

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
      </nav>
      
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
      
<h2 style={{ fontSize: '20px', marginTop: '30px' }}>所属学会</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>日本分子生物学会(MBSJ) (25-)</li>
        <li>腸内細菌学会(IMS) (25-)</li>
        <li>日本宇宙生物科学会(JSBSS) (25-)</li>
      </ul>

      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>経歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>慶應義塾大学 先端生命科学研究所 腸内細菌叢グループ (PI: 福田真嗣)</li>
        <li>東京科学大学（旧東京医科歯科大学）難治疾患研究所 計算システム生物学分野 (PI: 島村徹平)</li>
        <li>ADvance Lab 副所長</li>
        <li>北京聚力維度科技有限公司 インターン（中国・北京）</li>
　　　　<li>ADvance Lab 宇宙部門リーダー</li>
　　　　<li>農研機構 西日本農業研究センター インターン</li>
        <li>名古屋大学大学院医学系研究科 システム生物学研究室 派遣勤務 (PI: 島村徹平)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>受賞歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <a href="https://www.nature.com/collections/ghbjijhbci" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">TOP100 DOWNLOADED ARTICLES 2024 (Scientific Reports・Nature Portfolio)</a>
        </li>
        <li>日本植物生理学会(JSPP) 奨励賞 (第64回年会 高校生発表の部)</li>
        <li>京都大学宇宙ユニットシンポジウム(第16回) 優秀賞 (京都大学宇宙ユニット)</li>        
        <li>銀賞 日本生化学会 (JBS）（第95回大会、高校生発表部門）</li>
      </ul>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString('ja-JP')}
      </p>
    </div>
  );
}
