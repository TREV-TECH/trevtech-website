'use client';

import Link from 'next/link';
import Image from 'next/image';
import './home.css';

export default function Home() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Landing Section */}
      <section className="quantum-nexus-zone">
        <div className="cyber-mesh-overlay"></div>
        <div className="particle-symphony-field">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="quantum-pixel"></div>
          ))}
        </div>
        <div className="orbital-hypnosis-core"></div>
        <div className="stellar-command-center">
          <h1 className="cosmic-brand-matrix">Trev Tech</h1>
          <p className="neural-tagline-stream">Raising Technological Standards</p>
          <button className="plasma-action-pod" onClick={scrollToServices}>
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Innovative Technology Solutions for the Digital Era</h1>
            <p>
              We build cutting-edge digital solutions that transform businesses
              and create exceptional user experiences.
            </p>
            <div className="hero-buttons">
              <Link href="/services" className="btn">Explore Services</Link>
              <Link href="/contact" className="btn btn-outline">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
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
              <h2>Leading the Digital Transformation</h2>
              <p>
                Founded in 2020, TrevTech Solutions has quickly established itself
                as a premier technology company serving businesses across East
                Africa and beyond. Our mission is to bridge the gap between
                innovative technology and practical business solutions.
              </p>
              <p>
                With expertise spanning web development, cybersecurity, fintech
                integrations, and cloud services, we help businesses navigate the
                complex digital landscape.
              </p>
              <p>
                We believe in building long-term partnerships with our clients,
                providing ongoing support and scalable solutions that grow with
                your business.
              </p>
            </div>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <p>Uptime Guarantee</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Core Services</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We offer comprehensive technology solutions designed to accelerate
            your business growth and digital transformation journey.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Web Development</h3>
              <p>
                Custom web applications built with modern frameworks like React,
                Angular, and Node.js. We create responsive, scalable solutions.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3>Cybersecurity</h3>
              <p>
                Comprehensive security solutions including penetration testing,
                security audits, and incident response to protect your assets.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3>Fintech Integration</h3>
              <p>
                Seamless payment gateway integrations, mobile money solutions,
                and blockchain development for modern businesses.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
              <h3>Mobile Development</h3>
              <p>
                Native and cross-platform mobile applications for iOS and Android
                using React Native and Flutter.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Cloud Services</h3>
              <p>
                Cloud migration, infrastructure setup, and management using AWS,
                Azure, and Google Cloud.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9 11H7v8h2v-8zm4 0h-2v8h2v-8zm4 0h-2v8h2v-8zm2.5-5L12 2 4.5 6v2h15V6z"/>
                </svg>
              </div>
              <h3>AI & Machine Learning</h3>
              <p>
                Intelligent automation, predictive analytics, and AI-powered
                solutions to optimize your business processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Client Testimonials</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            See what our clients have to say about our services and solutions.
          </p>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  TrevTech delivered an exceptional e-commerce platform that
                  exceeded our expectations. Their team was professional and
                  truly understood our business needs.
                </p>
                <div className="testimonial-author">
                  <Image src="/assets/images/bella.jpg" alt="Bella" width={60} height={60} />
                  <div className="testimonial-author-info">
                    <h4>Bellah</h4>
                    <p>CEO, Ustawi Organics</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  The cybersecurity infrastructure implemented by TrevTech has
                  been crucial for our business. Their proactive approach gives
                  us peace of mind.
                </p>
                <div className="testimonial-author">
                  <Image src="/assets/images/olivia.jpg" alt="Olivia" width={60} height={60} />
                  <div className="testimonial-author-info">
                    <h4>Olivia</h4>
                    <p>CEO, Siviwe</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  Working with TrevTech on our mobile app was a game-changer.
                  They transformed our vision into a seamless application that
                  our customers love.
                </p>
                <div className="testimonial-author">
                  <Image src="/assets/images/siviwe.jpg" alt="Client" width={60} height={60} />
                  <div className="testimonial-author-info">
                    <h4>James Mwangi</h4>
                    <p>Founder, AfriStays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="why-choose-us" id="why-us">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Why Choose TrevTech?</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We combine technical excellence with a client-first approach to deliver
            solutions that drive real business results.
          </p>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"/>
                </svg>
              </div>
              <h3>Proven Expertise</h3>
              <p>10+ years of combined experience in delivering enterprise-grade solutions.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                </svg>
              </div>
              <h3>On-Time Delivery</h3>
              <p>We pride ourselves on meeting deadlines without compromising quality.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                  <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                </svg>
              </div>
              <h3>Dedicated Support</h3>
              <p>24/7 support with a dedicated account manager for your project.</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
                </svg>
              </div>
              <h3>Scalable Solutions</h3>
              <p>Our solutions are built to grow with your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Development Process</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            A streamlined approach that ensures quality delivery and client satisfaction.
          </p>

          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>We dive deep into understanding your business goals and requirements.</p>
            </div>

            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Planning</h3>
              <p>Our team creates a comprehensive roadmap with timelines and milestones.</p>
            </div>

            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Using agile methodologies, we build your solution with regular updates.</p>
            </div>

            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Launch & Support</h3>
              <p>We ensure smooth deployment and provide ongoing maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Let&apos;s discuss how we can help you achieve your digital goals.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn">Start Your Project</Link>
              <a href="tel:+254792691810" className="btn btn-outline">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section>
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Our Trusted Partners</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            We collaborate with leading technology companies to deliver the best
            solutions for our clients.
          </p>

          <div className="partners-logo-grid">
            <div className="partner-logo">
              <Image src="/assets/images/ustawi.jpg" alt="Ustawi" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/siviwe.jpg" alt="Siviwe" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/lq.jpeg" alt="LQ" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/afristays-logo.jpg" alt="Afristays" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo dark-bg">
              <Image src="/assets/images/whistleafrica.png" alt="Whistle Africa" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/partner-whatsapp.jpeg" alt="Partner" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/image 12.jpg" alt="Partner" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
            <div className="partner-logo">
              <Image src="/assets/images/edwarth.jpg" alt="Edwarth" width={120} height={60} style={{ maxWidth: '80%', maxHeight: '60px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
