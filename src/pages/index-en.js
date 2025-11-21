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
        Additionally, I work as a technical support staff at the Medical Research Institute, Institute of Science Tokyo (formerly Tokyo Medical and Dental University), where I am involved in time-series dynamic analysis of bacterial flora, application of deep learning models, and development of bacterial culture devices.
      </p>
      <p style={{ lineHeight: '1.8', marginBottom: '15px' }}>
        Outside of academic activities, as the Space Division Leader at ADvance Lab (Leave a Nest Co., Ltd.), I am working on developing water-soluble lunar concrete for future lunar infrastructure.
      </p>
      <p style={{ lineHeight: '1.8' }}>
        I actively pursue interdisciplinary approaches spanning microbiology, systems biology, and human spaceflight studies.
      </p>
      
      <h2 style={{ fontSize: '20px', marginTop: '30px' }}>Works</h2>
      <ul style={{ lineHeight: '1.8' }}>
        <li>Nature to Tech, Tech to Nature. (2024)</li>
        <li>Technetope (2025)</li>
      </ul>
      
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
      <p style={{ fontSize: '12px', textAlign: 'right' }}>
        Last updated: {new Date().toLocaleDateString()}<br />
        Contact: sato.mb@keio.jp / satou.t.ac@m.titech.ac.jp
      </p>
    </div>
  );
}
