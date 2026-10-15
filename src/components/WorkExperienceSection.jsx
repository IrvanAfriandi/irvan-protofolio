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
    position: 'Kaizen & Standard Promotion',
    location: 'Karawang, West Java',
    icon: 'fa-industry',
    color: '#dc2626',
    image: '/img/bridgestone.webp',
    achievements: [
      'Led the development of the 1D1OP digital monitoring system using Microsoft Power Platform across 9 production sections.',
      'Created digital checksheets with Microsoft Forms to ensure operational standards compliance, eliminating paper usage by 100%.',
      'Built automated workflows with Power Automate that reduced data processing time from one week to real-time.',
      'Developed 5 interactive Power BI dashboards for real-time operational monitoring and decision-making.',
      'Deployed the system successfully and completed handover with maintenance documentation.',
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
    position: 'Human Resources, Voter Education & Public Participation',
    location: 'Cirebon, West Java',
    icon: 'fa-landmark',
    color: '#2563eb',
    image: '/img/kpu.webp',
    achievements: [
      'Managed a database of 26,600+ election committee members (PPK, PPS, KPPS) ensuring data accuracy and completeness.',
      'Developed a violation reporting system using Google Forms for real-time reporting and simplified data collection.',
      'Assisted in managing HR documents, operational archives, and routine reports.',
      'Supported voter awareness outreach activities in Cirebon Regency.',
      'Served as supervisor and documentation officer during the 15-day ballot-folding process.',
      'Supported logistics distribution and delivery of ballots to polling stations over a 6-day period.',
      'Provided on-site monitoring throughout the election to ensure smooth operations.',
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
            // Remove visible class first to reset animation
            card.classList.remove('visible');
            // Small delay to ensure DOM updates
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                card.classList.add('visible');
              });
            });
          } else {
            // Remove visible class when out of view
            card.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [index]);


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
        <div className="exp-card-year">
          {experience.period}
        </div>
      </div>

      {/* Content Side */}
      <div className="exp-card-content">
        <div className="exp-company-info">
          <h3 className="exp-company-title">
            {experience.title}
            <span className="exp-role-badge">{experience.role}</span>
          </h3>
          <p className="exp-position">{experience.position}</p>
          <p className="exp-company-location">
            <i className="fas fa-map-marker-alt" />
            {experience.location}
          </p>
        </div>



        <div className="exp-achievements">
          <ul className="exp-achievements-list">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="exp-achievement-item">
                <span className="exp-achievement-icon" />
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
