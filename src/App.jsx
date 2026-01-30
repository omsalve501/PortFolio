import React from 'react'

export default function App(){
  const projects = [
    {
      title: "Cyber Security Analyst at Wipro",
      period: "December 2025 - Present",
      description: "Specializing in Zscaler web and cloud security (ZIA, ZPA, ZDX) and Palo Alto Panorama for enterprise security operations. Managing firewall policies, incident handling, threat analysis, and log monitoring in a SASE-driven environment.",
      tech: "Zscaler · Palo Alto Panorama · Zero Trust · SIEM · EDR"
    },
    {
      title: "Service Desk Analyst at Wipro (HDFC Securities)",
      period: "May 2024 - November 2025",
      description: "Provided L1/L2 technical support for 1.7 years. Managed network devices, Active Directory, and security tool deployment (Zscaler, Cisco NAC, Symantec Antivirus). Resolved critical incidents with minimal business impact.",
      tech: "ServiceNow · Active Directory · Networking · Windows · Linux"
    },
    {
      title: "Internship Trainee at RB Tech Services",
      period: "July 2022 - August 2022",
      description: "Hands-on training in IT infrastructure and support systems. Built foundational knowledge in enterprise IT operations.",
      tech: "IT Infrastructure · Support Systems"
    }
  ]

  return (
    <div>
      <header className="topbar">
        <div className="container">
          <h1 className="logo">Omkar Salve</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <a className="cta" href="https://www.linkedin.com/in/omkar-salve-53a2b1247" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container" style={{textAlign: 'center'}}>
            <div style={{marginBottom: '2.5rem'}}>
              
            </div>
            <h2>Hi, I'm <span className="accent">Omkar</span>.</h2>
            <p className="lead">Cybersecurity Analyst | Zscaler & Palo Alto Specialist | Zero Trust & Cloud Security Expert</p>
            <p className="actions">
              <a className="btn" href="#experience">View Experience</a>
              <a className="btn outline" href="#contact">Get in touch</a>
            </p>
          </div>
        </section>

        <section id="about" className="panel">
          <div className="container">
            <h3>About</h3>
            <p>
              I am a Cybersecurity Analyst at Wipro, specializing in Zscaler web and cloud security (ZIA, ZPA, ZDX) and Palo Alto Panorama for policy management, monitoring, and change control. I started as a Cybersecurity Analyst Scholar in December 2025, and previously worked 1.8 years as a Service Desk Analyst at HDFC Securities, gaining strong fundamentals in IT infrastructure and troubleshooting.
            </p>
            <p>
              I hold a Diploma in Computer Technology (85.31%) and am pursuing a BTech in Information Systems from BITS Pilani. My expertise spans network security, zero-trust architecture, incident handling, and enterprise firewall management. I'm committed to building secure, scalable, and zero-trust-aligned security solutions.
            </p>
            <p style={{marginTop: '1rem', fontSize: '0.95rem', color: '#9aa6b2'}}>
              <strong>Location:</strong> Bengaluru, Karnataka, India
            </p>
          </div>
        </section>

        <section id="skills" className="panel">
          <div className="container">
            <h3>Skills & Certifications</h3>
            <div style={{display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
              <div>
                <h4 style={{marginBottom: '0.8rem'}}>Top Technical Skills</h4>
                <ul className="skills">
                  <li>Zscaler (ZIA, ZPA, ZDX)</li>
                  <li>Palo Alto Panorama</li>
                  <li>Zero Trust Network Access (ZTNA)</li>
                  <li>Firewalls & Network Security</li>
                  <li>Incident Handling & RCA</li>
                  <li>Windows & Linux</li>
                  <li>CCNA - Routing & Switching</li>
                  <li>Active Directory & IAM</li>
                  <li>SIEM & EDR Integration</li>
                  <li>Change Management</li>
                </ul>
              </div>
              <div>
                <h4 style={{marginBottom: '0.8rem'}}>Certifications</h4>
                <ul className="skills">
                  <li>CompTIA Security+</li>
                  <li>AWS Technical Essentials</li>
                  <li>Using Python for Automation</li>
                  <li>Azure OpenAI for Logistics L2</li>
                  <li>Azure OpenAI Executive L1</li>
                  <li>Zscaler EDU-200 (Preparing for ZDTA)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="panel">
          <div className="container">
            <h3>Professional Experience</h3>
            <div className="grid">
              {projects.map((proj, idx) => (
                <article key={idx} className="card">
                  <h4>{proj.title}</h4>
                  <p style={{fontSize: '0.9rem', color: '#00e5ff', marginBottom: '0.8rem'}}>{proj.period}</p>
                  <p>{proj.description}</p>
                  <p className="meta">Tech: {proj.tech}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="panel">
          <div className="container">
            <h3>Contact & Connect</h3>
            <p><strong>Email:</strong> <a href="mailto:omsalve1820@gmail.com">omsalve1820@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/omkar-salve-53a2b1247" target="_blank" rel="noopener noreferrer">linkedin.com/in/omkar-salve-53a2b1247</a></p>
            <p style={{marginTop: '1.5rem', color: '#9aa6b2', fontSize: '0.95rem'}}>
              I'm open to discussions about cybersecurity, zero-trust architecture, and cloud security opportunities. Feel free to reach out!
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">© 2026 Omkar Salve — Cybersecurity Portfolio | Built with React & Vite</div>
      </footer>
    </div>
  )
}
