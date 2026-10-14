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
    value: '@rikorizky',
    href: 'https://github.com/rikorizky',
    color: '#ffffff',
  },
  {
    icon: 'fas fa-envelope',
    label: 'Email',
    value: 'rikorizky20@gmail.com',
    href: 'mailto:rikorizky20@gmail.com',
    color: '#dc2626',
  },
  {
    icon: 'fab fa-instagram',
    label: 'Instagram',
    value: '@sir_ikoo',
    href: 'https://instagram.com/sir_ikoo',
    color: '#e1306c',
  },
  {
    icon: 'fab fa-linkedin-in',
    label: 'LinkedIn',
    value: 'Riko Rizky',
    href: 'https://www.linkedin.com/in/riko-rizky-baswara-921262338',
    color: '#0a66c2',
  },
];

export default function ContactSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation
      gsap.from('.contact-card', {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="contact-section">
      <SectionBackdrop variant="warm" />

      <div className="contact-inner">
        {/* Unified Section Header */}
        <header ref={headerRef} className="section-header">
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
