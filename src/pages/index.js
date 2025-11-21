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
        慶應義塾大学 先端生命科学研究所 腸内環境デザイン研究グループ (PI: 福田真嗣)<br />
        東京科学大学（旧東京医科歯科大学）医学研究所 計算システム生物学研究室 (PI: 島村徹平)
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>研究</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        2019年より、宇宙植民地化を背景とした閉鎖型ミニ生態系の維持システム構築実験や、模擬地球外土壌を用いた生存可能性実験を実施してきました。地球の生物群系を模倣する実験を継続しています。
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        2025年より、慶應義塾大学先端生命科学研究所の腸内環境デザイン研究グループに所属し、低重力および過重力環境下におけるヒト腸内マイクロバイオータの動的メカニズムを研究しています。
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        また、東京科学大学（旧東京医科歯科大学）医学研究所の技術支援スタッフとして、細菌叢の時系列動的解析、深層学習モデルの応用、細菌培養装置の開発に携わっています。
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        学術活動以外では、ADvance Lab（株式会社リバネス）のスペース部門リーダーとして、将来の月面インフラのための水溶性月面コンクリートの開発に取り組んでいます。
      </p>
      <p style={{ lineHeight: '1.8' }}>
        微生物学、システム生物学、有人宇宙飛行研究にまたがる学際的アプローチを積極的に追求しています。
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>作品</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Nature to Tech, Tech to Nature. (2024)</li>
        <li>Technetope (2025)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>経歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>慶應義塾大学 先端生命科学研究所 腸内環境デザイン研究グループ (PI: 福田真嗣)</li>
        <li>東京科学大学（旧東京医科歯科大学）医学研究所 計算システム生物学研究室 (PI: 島村徹平)</li>
        <li>ADvance Lab 副所長インターン</li>
        <li>ADvance Lab スペース部門リーダー</li>
        <li>北京聚力維度科技有限公司 インターン（中国・北京）</li>
        <li>名古屋大学大学院医学系研究科 システム生物学研究室 派遣勤務 (PI: 島村徹平)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>受賞歴</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>優秀賞、第16回京都大学宇宙ユニットシンポジウム（京都大学宇宙ユニット）</li>
        <li>銀賞、日本生化学会（JBS）（第95回大会、高校生発表部門）</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>リンク</h2>
<ul style={{ listStyleType: 'disc' }}>
  <li>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <img 
        src="/images/tsubafont-icon.png" 
        alt="Tsubafont" 
        style={{ width: '30px', height: '30px', objectFit: 'contain' }}
      />
      <a href="/tsubafont" style={{ color: '#0000EE' }}>Tsubafont について</a>
    </div>
  </li>
  <li><a href="/furniture" style={{ color: '#0000EE' }}>お気に入りのガジェット</a></li>
  <li><a href="/seasons" style={{ color: '#0000EE' }}>季節の景色</a></li>
</ul>
      
      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right' }}>
        最終更新: {new Date().toLocaleDateString('ja-JP')}<br />
        連絡先: sato.mb@keio.jp(慶應義塾大学) / t-sato.csb@tmd.ac.jp(東京科学大学)
      </p>
    </div>
  );
}
