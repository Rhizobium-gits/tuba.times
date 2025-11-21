export default function TsubafontJa() {
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
        Tsubasasans
      </h1>
      <p style={{ fontSize: '16px', fontStyle: 'italic', marginTop: '10px' }}>
        現代のデジタルアプリケーション向けに設計された、モダンで縦長の日本語書体
      </p>

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
        <span style={{ marginRight: '10px' }}>|</span>
        <a href="/tsubafont" style={{ color: '#0000EE' }}>English</a>
      </nav>
      
      <section style={{ marginTop: '30px', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>概要</h2>
        <p style={{ marginBottom: '20px' }}>
          Tsubasasansは、デジタル環境に最適化されたオリジナルの縦長サンセリフ書体です。
          縦方向に1.3倍拡張された比率により、優れた可読性と独特の現代的な美学を提供します。
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>特徴</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li><strong>縦長プロポーション：</strong> 視認性向上のための130%の縦方向拡張</li>
          <li><strong>モダンデザイン：</strong> クリーンで現代的なサンセリフの美学</li>
          <li><strong>包括的なカバレッジ：</strong> 日本語文字（ひらがな、カタカナ、漢字）とラテンアルファベットの完全サポート</li>
          <li><strong>最適化されたメトリクス：</strong> 一貫したテキストレンダリングのための慎重に調整された垂直メトリクス</li>
          <li><strong>普遍的な互換性：</strong> すべての主要なオペレーティングシステムとアプリケーションで動作</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>仕様</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>フォーマット: TrueType Font (.ttf)</li>
          <li>総グリフ数: 17,082</li>
          <li>ウェイト: Regular</li>
          <li>スタイル: Tall</li>
          <li>垂直スケール: 1.3x</li>
          <li>文字サポート:
            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
              <li>日本語: ひらがな、カタカナ、漢字</li>
              <li>ラテン文字: A-Z、a-z、数字、句読点</li>
              <li>記号と特殊文字</li>
            </ul>
          </li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>インストール</h2>
        
        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Windows</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '15px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Tsubasasans-Tall.ttfをダウンロード</a></li>
          <li>フォントファイルを右クリック</li>
          <li>「インストール」または「すべてのユーザー用にインストール」を選択</li>
        </ol>

        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>macOS</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '15px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Tsubasasans-Tall.ttfをダウンロード</a></li>
          <li>フォントファイルをダブルクリック</li>
          <li>Font Bookで「フォントをインストール」をクリック</li>
        </ol>

        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Linux</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Tsubasasans-Tall.ttfをダウンロード</a></li>
          <li><code>~/.local/share/fonts/</code> または <code>/usr/share/fonts/</code> にコピー</li>
          <li><code>fc-cache -f -v</code> を実行してフォントキャッシュを更新</li>
        </ol>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>使用方法</h2>
        
        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>CSSでの使用</h3>
        <pre style={{ 
          backgroundColor: '#f5f5f5', 
          padding: '15px', 
          overflow: 'auto',
          fontSize: '14px',
          border: '1px solid #ddd',
          marginBottom: '20px'
        }}>
{`@font-face {
  font-family: 'Tsubasasans';
  src: url('Tsubasasans-Tall.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'Tsubasasans', sans-serif;
}`}
        </pre>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>使用例</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>Webデザイン: ヘッダー、ナビゲーションメニュー、コールトゥアクションボタン</li>
          <li>モバイルアプリ: 垂直方向のスペースが利用可能なUI要素</li>
          <li>ブランディング: モダンで独特な外観を求めるロゴやブランドアイデンティティ</li>
          <li>エディトリアルデザイン: 雑誌の見出しと小見出し</li>
          <li>プレゼンテーション: インパクトのあるタイポグラフィを必要とするスライド</li>
          <li>デジタルサイネージ: 垂直方向を強調した表示アプリケーション</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>デザイン哲学</h2>
        <p style={{ marginBottom: '15px' }}>
          Tsubasasansは、現代のデジタルコンテンツにユニークなタイポグラフィックボイスを提供することを目標に作成されました。
          拡張された垂直比率は以下を提供します：
        </p>
        <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>可読性の向上: より高い文字は似たようなグリフ間の区別を改善</li>
          <li>現代的な美学: 縦長のフォームファクターは洗練さとモダニティを喚起</li>
          <li>多用途なアプリケーション: 適切なコンテキストでディスプレイとボディテキストの両方に適している</li>
          <li>文化の架け橋: 日本語とラテン文字の両方の調和のとれたサポート</li>
        </ol>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>クレジット</h2>
        <p style={{ marginBottom: '20px' }}>
          <strong>デザイン・開発:</strong> 佐藤 翼<br />
          <strong>年:</strong> 2025<br />
          <strong>プロジェクト:</strong> Tsubasasans Typeface
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>サポート</h2>
        <p style={{ marginBottom: '20px' }}>
          質問、問題、または提案については:<br />
          メール: <a href="mailto:sato.mb@keio.jp" style={{ color: '#0000EE' }}>sato.mb@keio.jp</a>
        </p>

        <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
          © 2025 佐藤 翼. All rights reserved.
        </p>
      </section>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        最終更新: {new Date().toLocaleDateString('ja-JP')}
      </p>
    </div>
  );
}
