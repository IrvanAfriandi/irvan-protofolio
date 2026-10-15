import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackdrop from './SectionBackdrop';
import '../styles/section-header.css';
import './ContactSection.css';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_LINKS = [
  {
    icon: 'fab fa-github',
    label: 'GitHub',
    value: '@IrvanAfriandi',
    href: 'https://github.com/IrvanAfriandi',
    color: '#ffffff',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'irvan.afriandi21@gmail.com',
    href: 'mailto:irvan.afriandi21@gmail.com',
    color: '#dc2626',
  },
  {
    icon: 'fab fa-instagram',
    label: 'Instagram',
    value: '@riandivn',
    href: 'https://instagram.com/riandivn',
    color: '#e1306c',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: 'Irvan Afriandi',
    href: 'https://www.linkedin.com/in/irvan21',
    color: '#0a66c2',
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation - only animate from opacity: 0 if not already visible
      gsap.fromTo('.contact-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <SectionBackdrop variant="warm" />

      <div className="contact-inner">
        {/* Unified Section Header */}
        <header className="section-header visible">
          <div className="section-label visible">
            <span className="section-line" />
            <span>Let's Connect</span>
            <span className="section-line" />
          </div>

          <h2 className="section-title visible">
            Contact <span>Me</span>
          </h2>

          <p className="section-subtitle visible">
            Have a project in mind? Saya selalu terbuka untuk kolaborasi, freelance project, atau sekadar diskusi
            seputar teknologi web. Mari ciptakan sesuatu yang luar biasa bersama.
          </p>
        </header>

        <div ref={cardsRef} className="contact-cards">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ '--accent': link.color }}
            >
              <div className="contact-card-shine" />
              <span className="contact-card-icon">
                <i className={link.icon} />
              </span>
              <span className="contact-card-body">
                <span className="contact-card-label">{link.label}</span>
                <span className="contact-card-value">{link.value}</span>
              </span>
              <span className="contact-card-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
