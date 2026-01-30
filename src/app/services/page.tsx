import Link from 'next/link';

export default function Services() {
  return (
    <>
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions powered by agile methodology</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Comprehensive Services</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We offer a full spectrum of technology services to help your business
            excel in the digital world.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7z"/>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>We create responsive, high-performance websites and web applications.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>Custom Website Development</li>
                <li>E-commerce Solutions</li>
                <li>Content Management Systems</li>
                <li>Progressive Web Applications</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/>
                </svg>
              </div>
              <h3>Cybersecurity</h3>
              <p>Protect your digital assets with comprehensive security solutions.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>Security Assessments & Audits</li>
                <li>Penetration Testing</li>
                <li>Incident Response Planning</li>
                <li>Compliance & Risk Management</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
              </div>
              <h3>Fintech Integrations</h3>
              <p>Seamlessly integrate financial technology into your operations.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>Payment Gateway Integration</li>
                <li>Mobile Money Solutions</li>
                <li>Blockchain Development</li>
                <li>Digital Wallet Development</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16z"/>
                </svg>
              </div>
              <h3>Mobile Development</h3>
              <p>High-quality mobile apps for iOS and Android platforms.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>iOS & Android Development</li>
                <li>Cross-Platform (React Native, Flutter)</li>
                <li>UI/UX Design for Mobile</li>
                <li>App Store Optimization</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
                </svg>
              </div>
              <h3>Cloud Services</h3>
              <p>Harness cloud computing for scalability and flexibility.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>Cloud Migration & Strategy</li>
                <li>AWS, Azure, GCP Solutions</li>
                <li>DevOps & CI/CD Pipelines</li>
                <li>Serverless Architecture</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32z"/>
                </svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>Intelligent automation and data-driven insights.</p>
              <ul style={{ marginLeft: '20px', marginTop: '15px' }}>
                <li>Predictive Analytics</li>
                <li>Natural Language Processing</li>
                <li>Chatbot Development</li>
                <li>AI-Powered Automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Agile Methodology Section */}
      <section className="agile-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Agile Approach</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We follow agile methodology to deliver high-quality solutions faster,
            with flexibility to adapt to changing requirements.
          </p>

          <div className="agile-process">
            <div className="agile-step">
              <div className="step-num">01</div>
              <h4>Discovery & Planning</h4>
              <p>We start by understanding your vision, goals, and requirements through collaborative workshops.</p>
            </div>
            <div className="agile-step">
              <div className="step-num">02</div>
              <h4>Sprint Planning</h4>
              <p>Work is broken into 2-week sprints with clear deliverables and priorities.</p>
            </div>
            <div className="agile-step">
              <div className="step-num">03</div>
              <h4>Development & Testing</h4>
              <p>Our team builds features iteratively with continuous integration and testing.</p>
            </div>
            <div className="agile-step">
              <div className="step-num">04</div>
              <h4>Review & Feedback</h4>
              <p>Regular demos ensure you see progress and can provide feedback throughout.</p>
            </div>
            <div className="agile-step">
              <div className="step-num">05</div>
              <h4>Deployment</h4>
              <p>Working software is released frequently, delivering value early and often.</p>
            </div>
            <div className="agile-step">
              <div className="step-num">06</div>
              <h4>Retrospective</h4>
              <p>We continuously improve our process based on lessons learned.</p>
            </div>
          </div>

          <div className="agile-benefits">
            <div className="agile-benefit">
              <h4>🚀 Faster Delivery</h4>
              <p>Get working features quickly with iterative development cycles.</p>
            </div>
            <div className="agile-benefit">
              <h4>🔄 Flexibility</h4>
              <p>Easily accommodate changing requirements throughout the project.</p>
            </div>
            <div className="agile-benefit">
              <h4>👥 Collaboration</h4>
              <p>You&apos;re involved at every step, ensuring the product meets your needs.</p>
            </div>
            <div className="agile-benefit">
              <h4>✅ Quality Focus</h4>
              <p>Continuous testing ensures high-quality, bug-free deliverables.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-stack">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Technologies We Use</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We leverage the latest technologies and frameworks to build robust, scalable solutions.
          </p>

          <div className="tech-categories">
            <div className="tech-category">
              <h4>Frontend</h4>
              <div className="tech-tags">
                <span>React</span>
                <span>Angular</span>
                <span>Vue.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Backend</h4>
              <div className="tech-tags">
                <span>Node.js</span>
                <span>Python</span>
                <span>Java</span>
                <span>Go</span>
                <span>.NET</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Mobile</h4>
              <div className="tech-tags">
                <span>React Native</span>
                <span>Flutter</span>
                <span>Swift</span>
                <span>Kotlin</span>
              </div>
            </div>
            <div className="tech-category">
              <h4>Cloud & DevOps</h4>
              <div className="tech-tags">
                <span>AWS</span>
                <span>Azure</span>
                <span>GCP</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let&apos;s discuss how our agile approach can bring your vision to life.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">Get Free Consultation</Link>
              <Link href="/portfolio" className="btn btn-outline">View Our Work</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
