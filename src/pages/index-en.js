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
        <a href="/" style={{ color: '#0000EE' }}>日本語</a>
      </div>

      <h1 style={{ 
        fontSize: '24px',
        borderBottom: '2px solid #000000',
        paddingBottom: '10px'
      }}>
        Tsubasa SATO
      </h1>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Affiliation</h2>
      <p style={{ lineHeight: '1.8' }}>
        1st Year Student, Faculty of Environment and Information Studies, Keio University<br />
        Intestinal Microbiota Group, Institute for Advanced Biosciences, Keio University (PI: Shinji Fukuda)<br />
        Laboratory of Computational Systems Biology, Medical Research Institute, Institute of Science Tokyo (formerly Tokyo Medical and Dental University) (PI: Teppei Shimamura)
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Research</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
Since 2019, I have been conducting experiments on constructing maintenance systems for Sealed mini-ecosystem in the context of space colonization, as well as experiments on survival feasibility using simulated extraterrestrial soil. I continue to work on experiments related to mimicking Earth's biomes. 
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
Since 2025, I have been a member of the Intestinal Microbiota Group at the Institute for Advanced Biosciences, Keio University, researching the dynamic mechanisms of human gut microbiota under low-gravity and hypergravity environments. 
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
Additionally, I work as a technical support staff at the Medical Resarch Institute, Institute of Science Tokyo (formerly Tokyo Medical and Dental University), where I am involved in time-series dynamic analysis of bacterial flora, application of deep learning models, and development of bacterial culture devices. 
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
Outside of academic activities, as the Space Division Leader at ADvance Lab (Leave a Nest Co., Ltd.), I am working on developing water-soluble lunar concrete for future lunar infrastructure. 
      </p>
      <p style={{ lineHeight: '1.8' }}>
I actively pursue interdisciplinary approaches spanning microbiology, systems biology, and human spaceflight studies．      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Works</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Nature to Tech, Tech to Nature. (2024)</li>
        <li>Technetope (2025)</li>
      </ul>

<li>
    <strong>Sato, T.</strong>, Enami, Y., Ito, H., Oba, K., & Takakuwa, K. (202$
    "Survivability and life support in sealed mini-ecosystems with simulated pl$    <i>Scientific Reports</i>, 14, 23670.{' '}
    <a href="https://www.nature.com/articles/s41598-024-75328-x" style={{ color$
      https://doi.org/10.1038/s41598-024-75328-x
    </a>
  </li>
<li>
  <strong>Tsubasa SATO</strong> (2023).
  "Survivability and life support in sealed mini-ecosystems with simulated plan$
  <i>7th MVA Global Workshop & Symposium (MVA2023)</i>
</li> 
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Career</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Intestinal Microbiota Group, Institute for Advanced Biosciences, Keio University (PI: Shinji FUKUDA)</li>
        <li>Laboratory of Computational Systems Biology, Medical Research Institute, Institute of Science Tokyo (formerly Tokyo Medical and Dental University) (PI: Teppei SHIMAMURA)</li>
        <li>Deputy Director Intern, ADvance Lab</li>
        <li>Space Division Leader, ADvance Lab</li>
        <li>Intern, 北京聚力维度科技有限公司 (Beijing, China)</li>
        <li>Dispatch Work, Laboratory of Systems Biology, Graduate School of Medicine, Nagoya University (PI: Teppei SHIMAMURA)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Awards</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Excellence Award, 16th Kyoto University Space Unit Symposium (Kyoto University Space Unit)</li>
        <li>Silver Award, Japanese Biochemical Society (JBS) (95th Annual Meeting, High School Presentation Section)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Links</h2>
      <ul style={{ listStyleType: 'disc' }}>
        <li><a href="/furniture" style={{ color: '#0000EE' }}>Favorite Gadgets</a></li>
        <li><a href="/tsubafont" style={{ color: '#0000EE' }}>About Tsubafont</a></li>
        <li><a href="/seasons" style={{ color: '#0000EE' }}>Seasonal Scenery</a></li>
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
</div>

<p style={{ fontSize: '12px', textAlign: 'right' }}>
      <p style={{ fontSize: '12px', textAlign: 'right' }}>
        Last updated: {new Date().toLocaleDateString()}<br />
        Contact: sato.mb@keio.jp(Keio University) / t-sato.csb@tmd.ac.jp(Institute of Science Tokyo)
      </p>
    </div>
  );
}
