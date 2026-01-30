'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! We\'ll get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let&apos;s discuss your project and how we can help you succeed</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            Ready to transform your business with cutting-edge technology? Contact
            us today to discuss your project.
          </p>

          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>

              <div className="contact-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                </svg>
                <div>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                </svg>
                <div>
                  <p>+254 792 691 810</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                </svg>
                <div>
                  <p>info@trevtech.co.ke</p>
                  <p>support@trevtech.co.ke</p>
                </div>
              </div>

              <div className="contact-info-item">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                </svg>
                <div>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      className="form-control" 
                      id="phone" 
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select 
                      className="form-control" 
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="cyber">Cybersecurity</option>
                      <option value="fintech">Fintech Integrations</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="ai">AI & Machine Learning</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select 
                    className="form-control" 
                    id="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select budget range</option>
                    <option value="small">$1,000 - $5,000</option>
                    <option value="medium">$5,000 - $15,000</option>
                    <option value="large">$15,000 - $50,000</option>
                    <option value="enterprise">$50,000+</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    placeholder="Tell us about your project, goals, and timeline"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    borderRadius: '8px',
                    backgroundColor: submitStatus.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: submitStatus.type === 'success' ? '#22c55e' : '#ef4444',
                    border: `1px solid ${submitStatus.type === 'success' ? '#22c55e' : '#ef4444'}`
                  }}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 style={{ textAlign: 'center' }}>Frequently Asked Questions</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            Common questions about our services and process.
          </p>

          <div className="faq-grid">
            <div className="faq-item">
              <h4>How long does a typical project take?</h4>
              <p>Project timelines vary based on complexity. A simple website takes 4-6 weeks, while complex applications may take 3-6 months. We use agile sprints to deliver value incrementally.</p>
            </div>
            <div className="faq-item">
              <h4>What is your development process?</h4>
              <p>We follow agile methodology with 2-week sprints. This includes discovery, planning, development, testing, and deployment phases with regular client feedback.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide ongoing support?</h4>
              <p>Yes! We offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements.</p>
            </div>
            <div className="faq-item">
              <h4>What technologies do you use?</h4>
              <p>We use modern technologies including React, Node.js, Python, Flutter, AWS, and more. We choose the best stack for your specific needs.</p>
            </div>
            <div className="faq-item">
              <h4>How do you handle project communication?</h4>
              <p>We use tools like Slack, Jira, and regular video calls. You&apos;ll have a dedicated project manager and access to our project tracking system.</p>
            </div>
            <div className="faq-item">
              <h4>What are your payment terms?</h4>
              <p>We typically work with milestone-based payments: 30% upfront, 40% at midpoint, and 30% upon completion. Custom arrangements are available.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
