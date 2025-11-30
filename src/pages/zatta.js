import { useState } from 'react';

export default function Zatta() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState('');

  const addMemo = () => {
    if (input.trim()) {
      setMemos([...memos, { text: input, date: new Date().toLocaleDateString('ja-JP') }]);
      setInput('');
    }
  };

  const deleteMemo = (index) => {
    setMemos(memos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ 
      fontFamily: 'Tsubafont, Times New Roman, serif',
      maxWidth: '700px',
      margin: '40px auto',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>雑多</h1>
      <a href="/" style={{ color: '#0000EE', fontSize: '14px' }}>← 戻る</a>

      {/* 添付ファイル */}
      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>添付</h2>
        <a 
          href="/pdf/bento_recipe_recipeml.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            border: '1px solid #000',
            color: '#000',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          再現性の高い弁当 2025-12-01.pdf
        </a>

<a
          href="/ images/desk1.jpg"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 16px',
            border: '1px solid #000',
            color: '#000',
            textDecoration: 'none',
            fontSize: '14px'
          }}
        >
          再現性の低い2025-11-30のデスク
        </a>
      </section>

      {/* メモ入力 */}
      <section style={{ marginTop: '50px' }}>
        <h2 style={{ fontSize: '16px', marginBottom: '16px' }}>メモ</h2>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addMemo()}
            placeholder="何か書く..."
            style={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              fontFamily: 'inherit',
              fontSize: '14px'
            }}
          />
          <button
            onClick={addMemo}
            style={{
              padding: '10px 20px',
              border: '1px solid #000',
              background: '#fff',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            追加
          </button>
        </div>

        {/* メモ一覧 */}
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
          {memos.map((memo, i) => (
            <li 
              key={i} 
              style={{ 
                padding: '12px',
                borderBottom: '1px solid #eee',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span style={{ fontSize: '14px' }}>{memo.text}</span>
                <span style={{ fontSize: '11px', color: '#999', marginLeft: '12px' }}>
                  {memo.date}
                </span>
              </div>
              <button
                onClick={() => deleteMemo(i)}
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  color: '#999',
                  fontSize: '16px'
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        {memos.length === 0 && (
          <p style={{ color: '#999', fontSize: '13px', marginTop: '16px' }}>
            メモはまだありません
          </p>
        )}
      </section>
    </div>
  );
}
