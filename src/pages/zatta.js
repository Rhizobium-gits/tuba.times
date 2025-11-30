export default function Zatta() {
  const attachments = [
    {
      title: '再現性の高い弁当 2025-12-01',
      file: '/pdf/bento_recipe_recipeml.pdf',
      description: 'RecipeML形式のお弁当レシピ',
      date: '2025-12-01',
      type: 'PDF'
    },
    // 他の添付資料をここに追加できます
    // {
    //   title: 'タイトル',
    //   file: '/path/to/file',
    //   description: '説明',
    //   date: 'YYYY-MM-DD',
    //   type: 'PDF' or 'Link' or 'Image'
    // },
  ];

  return (
    <div style={{ 
      fontFamily: 'Tsubafont, Times New Roman, serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#fffef5',
      minHeight: '100vh'
    }}>
      {/* ノートの穴 */}
      <div style={{
        position: 'absolute',
        left: '40px',
        top: '100px',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px'
      }}>
        {[...Array(8)].map((_, i) => (
          <div key={i} style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            border: '1px solid #ccc'
          }} />
        ))}
      </div>

      <div style={{ marginLeft: '40px' }}>
        <h1 style={{ 
          fontSize: '28px',
          fontWeight: 'normal',
          borderBottom: '1px solid #333',
          paddingBottom: '10px',
          marginBottom: '10px'
        }}>
          雑多
        </h1>
        
        <p style={{ 
          fontSize: '12px', 
          color: '#666',
          marginBottom: '30px',
          fontStyle: 'italic'
        }}>
          添付資料・メモ・その他
        </p>

        <nav style={{ marginBottom: '40px' }}>
          <a href="/" style={{ 
            color: '#0000EE', 
            fontSize: '14px',
            textDecoration: 'none'
          }}>
            ← ホームに戻る
          </a>
        </nav>

        {/* 罫線付きコンテンツエリア */}
        <div style={{
          background: 'repeating-linear-gradient(transparent, transparent 27px, #e8e8e8 28px)',
          paddingTop: '10px'
        }}>
          <h2 style={{ 
            fontSize: '16px', 
            fontWeight: 'normal',
            marginBottom: '20px',
            color: '#333'
          }}>
            📎 添付ファイル
          </h2>

          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0
          }}>
            {attachments.map((item, index) => (
              <li key={index} style={{ 
                marginBottom: '24px',
                paddingBottom: '16px',
                borderBottom: '1px dashed #ccc'
              }}>
                <a 
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    color: '#0000EE',
                    textDecoration: 'none',
                    fontSize: '15px',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    backgroundColor: '#fff',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
                >
                  📄 {item.title}
                </a>
                {item.description && (
                  <p style={{ 
                    fontSize: '12px', 
                    color: '#666',
                    marginTop: '8px',
                    marginLeft: '12px'
                  }}>
                    {item.description}
                  </p>
                )}
                <span style={{ 
                  fontSize: '11px', 
                  color: '#999',
                  marginLeft: '12px'
                }}>
                  [{item.type}] {item.date}
                </span>
              </li>
            ))}
          </ul>

          {/* メモエリア */}
          <div style={{ marginTop: '40px' }}>
            <h2 style={{ 
              fontSize: '16px', 
              fontWeight: 'normal',
              marginBottom: '20px',
              color: '#333'
            }}>
              📝 メモ
            </h2>
            <p style={{ 
              fontSize: '13px', 
              color: '#888',
              fontStyle: 'italic',
              lineHeight: '28px'
            }}>
              ここに何か書く予定...
            </p>
          </div>
        </div>

        <hr style={{ 
          marginTop: '60px', 
          border: 'none',
          borderTop: '1px solid #ccc' 
        }} />
        
        <p style={{ 
          fontSize: '11px', 
          textAlign: 'right', 
          marginTop: '15px',
          color: '#999'
        }}>
          Last updated: {new Date().toLocaleDateString('ja-JP')}
        </p>
      </div>
    </div>
  );
}
