import Image from 'next/image';

export default function About() {
  return (
    <>
      <section className="about" id="about" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <Image 
                src="/assets/images/trevtech.jpg" 
                alt="About TrevTech" 
                width={600} 
                height={400}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="about-text">
              <h2>Driving Digital Transformation Since 2020</h2>
              <p>
                TrevTech Solutions is a premier technology company dedicated to
                helping businesses thrive in the digital landscape. We combine
                technical expertise with creative innovation to deliver solutions
                that drive growth and efficiency.
              </p>
              <p>
                Our team of seasoned professionals specializes in web development,
                cybersecurity, fintech integrations, and mobile application
                development, ensuring that our clients receive the most
                comprehensive and effective digital solutions available.
              </p>
              <p>
                Based in Nairobi, Kenya, we serve clients across East Africa and
                beyond, bringing world-class technology solutions to businesses
                of all sizes.
              </p>
            </div>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div>Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div>Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div>Tech Experts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                </svg>
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower businesses with innovative technology solutions that drive
                growth, enhance efficiency, and create lasting competitive advantages
                in the digital economy.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"/>
                </svg>
              </div>
              <h3>Our Vision</h3>
              <p>
                To be the leading technology partner for businesses in Africa,
                recognized for our excellence in delivering transformative digital
                solutions that shape the future of industries.
              </p>
            </div>

            <div className="mv-card">
              <div className="mv-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
                </svg>
              </div>
              <h3>Our Values</h3>
              <p>
                Innovation, integrity, and client success drive everything we do.
                We believe in transparent communication, continuous learning, and
                building lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>What Sets Us Apart</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            Our commitment to excellence and innovation defines who we are.
          </p>

          <div className="values-grid">
            <div className="value-item">
              <span className="value-number">01</span>
              <h4>Client-Centric Approach</h4>
              <p>Your success is our success. We tailor every solution to meet your specific business needs.</p>
            </div>
            <div className="value-item">
              <span className="value-number">02</span>
              <h4>Technical Excellence</h4>
              <p>Our team stays ahead of technology trends to deliver cutting-edge solutions.</p>
            </div>
            <div className="value-item">
              <span className="value-number">03</span>
              <h4>Transparent Communication</h4>
              <p>We keep you informed at every stage with clear, honest updates on your project.</p>
            </div>
            <div className="value-item">
              <span className="value-number">04</span>
              <h4>Long-term Partnership</h4>
              <p>We build relationships, not just projects. Your growth is our ongoing commitment.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
