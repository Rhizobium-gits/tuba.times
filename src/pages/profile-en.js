export default function ProfileEn() {
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
        Biography
      </h1>

      <nav style={{ marginTop: '20px', marginBottom: '30px' }}>
        <a href="/index-en" style={{ color: '#0000EE', marginRight: '20px' }}>← Back to Home</a>
      </nav>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Research</h2>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        Since 2019, I have been conducting experiments on constructing maintenance systems for Sealed mini-ecosystem in the context of space colonization, as well as experiments on survival feasibility using simulated extraterrestrial soil. I continue to work on experiments related to mimicking Earth's biomes.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        Since 2025, I have been a member of the Intestinal Microbiota Group at the Institute for Advanced Biosciences, Keio University, researching the dynamic mechanisms of human gut microbiota under low-gravity and hypergravity environments.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        Additionally, I work as a technical support staff at the Medical Research Institute, Institute of Science Tokyo (formerly Tokyo Medical and Dental University), where I am involved in time-series dynamic analysis of bacterial flora, application of deep learning models, and development of bacterial culture devices.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        Outside of academic activities, as the Space Division Leader at ADvance Lab (Leave a Nest Co., Ltd.), I am working on developing water-soluble lunar concrete for future lunar infrastructure.
      </p>
      <p style={{ lineHeight: '1.8' }}>
        I actively pursue interdisciplinary approaches spanning microbiology, systems biology, and human spaceflight studies.
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Career</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Intestinal Microbiota Group, Institute for Advanced Biosciences, Keio University (PI: Shinji FUKUDA)</li>
        <li>Department of Computational and Systems Biology, Medical Research Laboratory, Institute of Science Tokyo (formerly Tokyo Medical and Dental University) (PI: Teppei SHIMAMURA)</li>
        <li>Deputy Director Intern, ADvance Lab</li>
        <li>Space Division Leader, ADvance Lab</li>
        <li>Intern, 北京聚力维度科技有限公司 (Beijing, China)</li>
        <li>Dispatch Work, Laboratory of Systems Biology, Graduate School of Medicine, Nagoya University (PI: Teppei SHIMAMURA)</li>
      </ul>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Awards</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>
          <a href="https://www.nature.com/collections/ghbjijhbci" style={{ color: '#0000EE' }} target="_blank" rel="noopener noreferrer">TOP100 DOWNLOADED ARTICLES 2024 (Scientific Reports・Nature Portfolio)</a>
        </li>
        <li>Encouragement Award, Japanese Society of Plant Physiologists (JSPP) (64th Annual Meeting, High School Presentation Section)</li>
        <li>Excellence Award, 16th Kyoto University Space Unit Symposium (Kyoto University Space Unit)</li>
        <li>Silver Award, Japanese Biochemical Society (JBS) (95th Annual Meeting, High School Presentation Section)</li>
      </ul>

      <hr style={{ marginTop: '40px', border: '1px solid #000000' }} />
      <p style={{ fontSize: '12px', textAlign: 'right', marginTop: '20px' }}>
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}
