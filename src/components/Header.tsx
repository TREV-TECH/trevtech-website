'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header style={{
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      boxShadow: isScrolled ? '0 2px 15px rgba(0, 0, 0, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)'
    }}>
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            <Image 
              src="/assets/images/trevtech.jpg" 
              alt="TrevTech Solutions" 
              width={48} 
              height={48}
              style={{ height: '48px', width: 'auto' }}
            />
          </Link>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link href="/" onClick={closeMenu}>Home</Link></li>
            <li><Link href="/about" onClick={closeMenu}>About</Link></li>
            <li><Link href="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
            <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
