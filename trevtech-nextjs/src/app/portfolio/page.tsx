import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  return (
    <>
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Portfolio</h1>
          <p>Explore our successful projects delivered using agile methodology</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Featured Projects</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            Explore our successful projects and see how we&apos;ve helped businesses
            across various industries achieve their digital goals.
          </p>

          <div className="portfolio-grid" style={{ marginTop: '40px' }}>
            <div className="portfolio-item">
              <Image src="/assets/images/ecomerce.jpg" alt="E-commerce Platform" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>E-commerce Platform</h3>
                <p>Full-stack e-commerce solution with payment integration</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <Image src="/assets/images/mobilebanking.jpg" alt="Banking Mobile App" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>Banking Mobile App</h3>
                <p>Secure mobile banking with biometric authentication</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <Image src="/assets/images/cyber.avif" alt="Cybersecurity Infrastructure" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>Security Infrastructure</h3>
                <p>Enterprise security with real-time threat detection</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <Image src="/assets/images/health.avif" alt="Healthcare Portal" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>Healthcare Portal</h3>
                <p>Patient management with telemedicine capabilities</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <Image src="/assets/images/supply.avif" alt="Supply Chain Management" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>Supply Chain System</h3>
                <p>Blockchain-based tracking for transparency</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>

            <div className="portfolio-item">
              <Image src="/assets/images/ai.avif" alt="AI Customer Service" fill style={{ objectFit: 'cover' }} />
              <div className="portfolio-overlay">
                <h3>AI Customer Service</h3>
                <p>Intelligent chatbot with NLP capabilities</p>
                <Link href="#" className="btn">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="case-study">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Case Study: Ustawi Organics</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            How we helped an organic food company increase online sales by 150% with a custom e-commerce solution.
          </p>

          <div className="case-study-content">
            <div className="case-study-challenge">
              <h3>The Challenge</h3>
              <p>Ustawi Organics needed a modern e-commerce platform to reach customers across Kenya. Their existing website was outdated, slow, and lacked mobile optimization.</p>
              <ul>
                <li>No mobile-friendly design</li>
                <li>Limited payment options</li>
                <li>Poor inventory management</li>
                <li>No customer analytics</li>
              </ul>
            </div>

            <div className="case-study-solution">
              <h3>Our Solution</h3>
              <p>Using agile methodology, we delivered a complete e-commerce transformation in 8 weeks with bi-weekly sprints.</p>
              <ul>
                <li>Responsive React-based frontend</li>
                <li>M-Pesa & card payment integration</li>
                <li>Real-time inventory system</li>
                <li>Customer analytics dashboard</li>
              </ul>
            </div>

            <div className="case-study-results">
              <h3>The Results</h3>
              <div className="result-stats">
                <div className="result-stat">
                  <span>150%</span>
                  <p>Increase in Sales</p>
                </div>
                <div className="result-stat">
                  <span>3x</span>
                  <p>Mobile Traffic</p>
                </div>
                <div className="result-stat">
                  <span>40%</span>
                  <p>Faster Load Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Industries We Serve</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We have experience delivering solutions across diverse industries.
          </p>

          <div className="industries-grid">
            <div className="industry-item">
              <div className="industry-icon">💰</div>
              <h4>Finance & Banking</h4>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏥</div>
              <h4>Healthcare</h4>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🛒</div>
              <h4>E-commerce & Retail</h4>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🚚</div>
              <h4>Logistics</h4>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🎓</div>
              <h4>Education</h4>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏨</div>
              <h4>Hospitality</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Have a Project in Mind?</h2>
            <p>Let&apos;s discuss how we can help bring your vision to life.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">Start Your Project</Link>
              <Link href="/services" className="btn btn-outline">View Services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
