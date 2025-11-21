export default function Tsubafont() {
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
        A modern, tall Japanese typeface designed for contemporary digital applications.
      </p>

<img 
        src="/images/tsubafont-icon.png" 
        alt="Tsubasasans" 
        style={{ 
          width: '100%', 
          maxWidth: '600px',
          height: 'auto', 
          display: 'block',
          margin: '30px auto'
        }}
      />

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/" style={{ color: '#0000EE', marginRight: '20px' }}>← ホームに戻る</a>
        <span style={{ marginRight: '10px' }}>|</span>
        <a href="/tsubafont-ja" style={{ color: '#0000EE' }}>日本語</a>
      </nav>
      
      <section style={{ marginTop: '30px', lineHeight: '1.8' }}>
        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Overview</h2>
        <p style={{ marginBottom: '20px' }}>
          Tsubasasans is an original tall sans-serif typeface optimized for digital environments. 
          With its extended vertical proportions (1.3x height), it offers enhanced readability and 
          a distinctive contemporary aesthetic.
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Features</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li><strong>Tall Proportions:</strong> 130% vertical extension for improved legibility</li>
          <li><strong>Modern Design:</strong> Clean, contemporary sans-serif aesthetics</li>
          <li><strong>Comprehensive Coverage:</strong> Full support for Japanese characters (Hiragana, Katakana, Kanji) and Latin alphabet</li>
          <li><strong>Optimized Metrics:</strong> Carefully adjusted vertical metrics for consistent text rendering</li>
          <li><strong>Universal Compatibility:</strong> Works across all major operating systems and applications</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Specifications</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>Format: TrueType Font (.ttf)</li>
          <li>Total Glyphs: 17,082</li>
          <li>Weight: Regular</li>
          <li>Style: Tall</li>
          <li>Vertical Scale: 1.3x</li>
          <li>Character Support:
            <ul style={{ marginLeft: '20px', marginTop: '5px' }}>
              <li>Japanese: Hiragana, Katakana, Kanji</li>
              <li>Latin: A-Z, a-z, numerals, punctuation</li>
              <li>Symbols and special characters</li>
            </ul>
          </li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Installation</h2>
        
        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Windows</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '15px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Download Tsubasasans-Tall.ttf</a></li>
          <li>Right-click the font file</li>
          <li>Select "Install" or "Install for all users"</li>
        </ol>

        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>macOS</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '15px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Download Tsubasasans-Tall.ttf</a></li>
          <li>Double-click the font file</li>
          <li>Click "Install Font" in Font Book</li>
        </ol>

        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>Linux</h3>
        <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li><a href="/fonts/Tsubafont.ttf" style={{ color: '#0000EE', textDecoration: 'underline' }} download="Tsubasasans-Tall.ttf">Download Tsubasasans-Tall.ttf</a></li>
          <li>Copy to <code>~/.local/share/fonts/</code> or <code>/usr/share/fonts/</code></li>
          <li>Run <code>fc-cache -f -v</code> to refresh font cache</li>
        </ol>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Usage</h2>
        
        <h3 style={{ fontSize: '18px', marginTop: '20px', marginBottom: '10px' }}>In CSS</h3>
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

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Use Cases</h2>
        <ul style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>Web Design: Headers, navigation menus, and call-to-action buttons</li>
          <li>Mobile Apps: UI elements where vertical space is available</li>
          <li>Branding: Logos and brand identities seeking a modern, distinctive look</li>
          <li>Editorial Design: Magazine headlines and subheadings</li>
          <li>Presentations: Slides requiring impactful typography</li>
          <li>Digital Signage: Display applications with vertical emphasis</li>
        </ul>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Design Philosophy</h2>
        <p style={{ marginBottom: '15px' }}>
          Tsubasasans was created with the goal of providing a unique typographic voice for modern digital content. 
          The extended vertical proportions offer:
        </p>
        <ol style={{ marginLeft: '20px', marginBottom: '20px' }}>
          <li>Enhanced Readability: Taller characters improve distinction between similar glyphs</li>
          <li>Contemporary Aesthetic: The tall form factor evokes sophistication and modernity</li>
          <li>Versatile Application: Suitable for both display and body text in appropriate contexts</li>
          <li>Cultural Bridge: Harmonious support for both Japanese and Latin scripts</li>
        </ol>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Credits</h2>
        <p style={{ marginBottom: '20px' }}>
          <strong>Design & Development:</strong> Tsubasa SATO<br />
          <strong>Year:</strong> 2025<br />
          <strong>Project:</strong> Tsubasasans Typeface
        </p>

        <h2 style={{ fontSize: '20px', marginTop: '30px', marginBottom: '15px' }}>Support</h2>
        <p style={{ marginBottom: '20px' }}>
          For questions, issues, or suggestions:<br />
          Email: <a href="mailto:sato.mb@keio.jp" style={{ color: '#0000EE' }}>sato.mb@keio.jp</a>
        </p>

        <p style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
          © 2025 Tsubasa SATO. All rights reserved.
        </p>
      </section>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
