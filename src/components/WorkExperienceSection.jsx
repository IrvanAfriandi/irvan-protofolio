import { useEffect, useRef, useState } from 'react';
import '../styles/section-header.css';
import './WorkExperienceSection.css';

const WORK_EXPERIENCE = [
  {
    id: 1,
    yearStart: 2025,
    yearEnd: 2026,
    period: 'Nov 2025 - Mei 2026',
    role: 'Internship',
    title: 'PT Bridgestone Tire Indonesia',
    location: 'Karawang, West Java',
    icon: 'fa-industry',
    color: '#dc2626',
    image: '/img/bridgestone.webp',
    achievements: [
      'Mengembangkan sistem monitoring digital 1D1OP menggunakan Microsoft Power Platform',
      'Mencakup 9 bagian produksi dengan eliminasi penggunaan kertas secara total',
      'Mengurangi waktu processing data dari 1 minggu menjadi real-time',
    ],
    tags: ['Power Platform', 'Power Automate', 'Power BI'],
    stats: [
      { value: '9', label: 'Departemen' },
      { value: '100', label: 'Digital' },
    ],
  },
  {
    id: 2,
    yearStart: 2024,
    yearEnd: 2025,
    period: 'Okt 2024 - Feb 2025',
    role: 'Apprentice',
    title: 'KPU Kabupaten Cirebon',
    location: 'Cirebon, West Java',
    icon: 'fa-landmark',
    color: '#2563eb',
    image: '/img/kpu.webp',
    achievements: [
      'Mengelola database lebih dari 26.600 anggota panitia pemilu',
      'Mendukung administrasi SDM, edukasi pemilih, dan logistik',
      'Monitoring langsung selama pelaksanaan Pemilukada Cirebon',
    ],
    tags: ['Data Management', 'Google Forms', 'Admin Support'],
    stats: [
      { value: '26.6', label: 'Data Entry' },
      { value: '5', label: 'Bulan' },
    ],
  },
];

// Animated counter with intersection observer
const AnimatedNumber = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
            if (isNaN(numericValue)) return;

            const duration = 1500;
            const startTime = performance.now();

            const animate = (currentTime) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const current = numericValue * easeOut;

              if (value.includes('K')) {
                el.textContent = current.toFixed(1) + 'K' + suffix;
              } else if (value.includes('%')) {
                el.textContent = Math.round(current) + '%' + suffix;
              } else if (value.includes('.')) {
                el.textContent = current.toFixed(1) + suffix;
              } else {
                el.textContent = Math.round(current) + suffix;
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return <span ref={ref}>0</span>;
};

// Experience Card Component
const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);

  const getShortName = (name) => {
    if (name.includes('Bridgestone')) return 'Bridgestone';
    if (name.includes('KPU')) return 'KPU';
    return name.split(' ').slice(0, 2).join(' ');
  };

  return (
    <article
      ref={cardRef}
      className="exp-card"
      style={{ '--card-accent': experience.color }}
    >
      {/* Image Side */}
      <div className="exp-card-image">
        <img
          src={experience.image}
          alt={experience.title}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.style.background = `linear-gradient(135deg, ${experience.color}25, ${experience.color}45)`;
          }}
        />
        {/* Floating particles effect */}
        <div className="exp-card-particles">
          <span className="particle"></span>
          <span className="particle"></span>
          <span className="particle"></span>
        </div>
        <div className="exp-card-logo">
          <div className="exp-card-logo-icon">
            <i className={`fas ${experience.icon}`} />
          </div>
          <span className="exp-card-logo-text">{getShortName(experience.title)}</span>
        </div>
        <div className="exp-card-year">
          {experience.yearStart} <span>-</span> {experience.yearEnd}
        </div>
      </div>

      {/* Content Side */}
      <div className="exp-card-content">
        <div className="exp-card-header">
          <span className="exp-period-tag">
            <i className="fas fa-calendar-alt" />
            {experience.period}
          </span>
          <span className="exp-role-badge">{experience.role}</span>
        </div>

        <div className="exp-company-info">
          <h3 className="exp-company-title">{experience.title}</h3>
          <p className="exp-company-location">
            <i className="fas fa-map-marker-alt" />
            {experience.location}
          </p>
        </div>

        <div className="exp-stats-grid">
          {experience.stats.map((stat, i) => (
            <div key={i} className="exp-stat-card">
              <AnimatedNumber value={stat.value} />
              <span className="exp-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="exp-divider">
          <span className="exp-divider-line" />
          <i className="fas fa-star exp-divider-icon" />
          <span className="exp-divider-line" />
        </div>

        <div className="exp-achievements">
          <h4 className="exp-section-title">
            <i className="fas fa-bullseye" />
            Pencapaian Utama
          </h4>
          <ul className="exp-achievements-list">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="exp-achievement-item">
                <span className="exp-achievement-icon">
                  <i className="fas fa-check" />
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="exp-tags-container">
          {experience.tags.map((tag, i) => (
            <span key={i} className="exp-tag">
              <i className="fas fa-hashtag" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default function WorkExperienceSection() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const INITIAL_SHOW = 1;
  const [visibleCount, setVisibleCount] = useState(INITIAL_SHOW);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Header animation observer
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              const label = section.querySelector('.section-label');
              const title = section.querySelector('.section-title');
              const subtitle = section.querySelector('.section-subtitle');

              if (label) label.classList.add('visible');
              if (title) title.classList.add('visible');
              if (subtitle) subtitle.classList.add('visible');
            }, 100);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    return () => headerObserver.disconnect();
  }, []);

  const handleToggle = () => {
    if (visibleCount >= WORK_EXPERIENCE.length) {
      setVisibleCount(INITIAL_SHOW);
    } else {
      setVisibleCount(WORK_EXPERIENCE.length);
    }
  };

  const visibleExperiences = WORK_EXPERIENCE.slice(0, visibleCount);
  const hasMore = visibleCount < WORK_EXPERIENCE.length;

  return (
    <section ref={sectionRef} id="work-experience" className="work-experience-section">
      <div className="work-experience-inner">
        {/* Unified Section Header */}
        <header ref={headerRef} className="section-header">
          <div className="section-label">
            <span className="section-line" />
            <span>My Professional Journey</span>
            <span className="section-line" />
          </div>

          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>

          <p className="section-subtitle">
            Setiap pengalaman telah membentuk kemampuan dan perspektif saya dalam membangun solusi digital yang bermakna dan berdampak positif.
          </p>
        </header>

        {/* Cards Container */}
        <div className="exp-cards-container">
          {visibleExperiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* See More / Show Less Button */}
        <div className="exp-see-more-container">
          <button
            type="button"
            className={`exp-see-more-btn ${!hasMore ? 'show-less' : ''}`}
            onClick={handleToggle}
          >
            <span>{hasMore ? 'See More' : 'Show Less'}</span>
            <i className={`fas fa-chevron-${hasMore ? 'down' : 'up'}`} />
          </button>
        </div>
      </div>
    </section>
  );
}
