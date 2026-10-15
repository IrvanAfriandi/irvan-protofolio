import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackdrop from './SectionBackdrop';
import './ProfessionalBackgroundSection.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

gsap.registerPlugin(ScrollTrigger);

// ============ HELPER GOOGLE DRIVE ============
const getGoogleDriveFileId = (url) => {
    if (!url) return null;
    const match = url.match(/\/d\/(.+?)\//);
    return match ? match[1] : null;
};

const getGoogleDriveThumbnail = (url) => {
    const fileId = getGoogleDriveFileId(url);
    if (fileId) {
        const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
        return `https://images.weserv.nl/?url=${encodeURIComponent(directUrl)}&w=800&h=600&fit=cover`;
    }
    return url;
};

// ============ DATA ============
export const rawExperiences = [
    {
        id: 0,
        title: 'Sertifikat BNSP',
        role: 'Programmer Web Muda (Junior Web Programmer)',
        issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) / LSP LPK TIKOM',
        category: 'Sertifikasi Profesi',
        icon: 'fa-certificate',
        tags: ['BNSP', 'Web Programmer', 'T.I.K'],
        description: 'Sertifikat kompetensi profesional nasional bidang T.I.K skema Programmer Web Muda (Junior Web Programmer). No. 62090 35113 0000509 2025 / No. Reg. J 2080 00509 2025. Berlaku 3 tahun sejak 1 September 2025.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/1F4LdKU9dOSdeqo9vk6f2CtCEi-Qzjr2H/view?usp=drive_web',
    },
    {
        id: 1,
        title: 'Sertifikat MagangHub Kemnaker',
        role: 'Kaizen & Standard Promotion Intern',
        issuer: 'Kementerian Ketenagakerjaan RI',
        category: 'Magang & Pengalaman',
        icon: 'fa-building-columns',
        tags: ['MagangHub', 'Kemnaker', 'Predikat Baik'],
        description: 'Sertifikat resmi program magang nasional MagangHub di PT Bridgestone Tire Indonesia, periode 24 Nov 2025 – 23 Mei 2026, dengan predikat BAIK. No. MN.032.046804.02.2025. Diterbitkan 5 Juni 2026.',
        year: '2026',
        certificate: 'https://drive.google.com/file/d/1p5oMmUni4642QxHWCkBIsd623BP5UQu5/view?usp=drive_web',
    },
    {
        id: 2,
        title: 'Sertifikat MagangHub Bridgestone',
        role: 'Kaizen & Standard Promotion Intern',
        issuer: 'PT Bridgestone Tire Indonesia',
        category: 'Magang & Pengalaman',
        icon: 'fa-industry',
        tags: ['MagangHub Batch 2', 'Bridgestone', 'Kaizen'],
        description: 'Sertifikat penyelesaian magang MagangHub Batch 2 sebagai Kaizen & Standard Promotion Intern di PT Bridgestone Tire Indonesia, 24 Nov 2025 – 23 Mei 2026. Diterbitkan 23 Mei 2026.',
        year: '2026',
        certificate: 'https://drive.google.com/file/d/1MmXeO20XTcbC7cs4qDGSzvPbWACLIxoN/view?usp=drive_web',
    },
    {
        id: 3,
        title: 'Dicoding - Belajar Dasar AI',
        role: 'Belajar Dasar AI (10 jam pembelajaran)',
        issuer: 'Dicoding Indonesia',
        category: 'Kursus & Pelatihan',
        icon: 'fa-brain',
        tags: ['Artificial Intelligence', 'Dicoding', 'Dasar AI'],
        description: 'Menyelesaikan kelas Belajar Dasar AI dengan total 10 jam pembelajaran. ID Sertifikat: GRX5J2NQYX0M. Berlaku 24 Sep 2025 – 24 Sep 2028.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/15BFAGqjbO3KSmdTjheFFj_xjZpCoAHC4/view?usp=drive_web',
    },
    {
        id: 4,
        title: 'Design Thinking',
        role: 'Pembekalan 12+ Essential Skills Program Magang Nasional',
        issuer: 'Gerakan Nasional Indonesia Kompeten (GNIK) & Kemnaker',
        category: 'Kursus & Pelatihan',
        icon: 'fa-lightbulb',
        tags: ['Design Thinking', 'Essential Skills', 'Nilai 100'],
        description: 'Pembekalan Essential Skills Program Magang Nasional topik Design Thinking, dilaksanakan 11 Des 2025 dengan nilai 100. Diterbitkan 12 Des 2025.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/1QxbMs4cdQUiWGYHag1GtrP-t58M_WcNl/view?usp=drive_web',
    },
    {
        id: 5,
        title: 'Intro to Software Engineering',
        role: 'Coding Camp (kursus online 1 minggu)',
        issuer: 'RevoU (PT Revolusi Cita Edukasi)',
        category: 'Kursus & Pelatihan',
        icon: 'fa-code',
        tags: ['Software Engineering', 'RevoU', 'Coding Camp'],
        description: 'Menyelesaikan Coding Camp: Intro to Software Engineering. No. Sertifikat CCSE 290925-01-1-00232. Diterbitkan 3 Okt 2025.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/1gGx1DLwDWQgWcUO6ggseLudawNJ_hkup/view?usp=drive_web',
    },
    {
        id: 6,
        title: 'Intro to Data Analytics',
        role: 'Mini Course (kursus online 1 minggu)',
        issuer: 'RevoU (PT Revolusi Cita Edukasi)',
        category: 'Kursus & Pelatihan',
        icon: 'fa-chart-line',
        tags: ['Data Analytics', 'RevoU', 'Mini Course'],
        description: 'Menyelesaikan Mini Course: Intro to Data Analytics. No. Sertifikat DAMC-29092025-01-1-00262. Diterbitkan 3 Okt 2025.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/1d0OLMBHkxcRggrYfBNIzl4HJODG9BcWF/view?usp=drive_web',
    },
];

// ============ MAPPING GAMBAR ============
const PLACEHOLDER_IMAGE = '/img/cert_placeholder.webp';

const experiences = rawExperiences.map((exp) => {
    if (exp.image && !exp.image.includes('drive.google.com')) {
        return { ...exp, image: exp.image };
    }
    const driveLink = exp.certificate || exp.image;
    if (driveLink) {
        return {
            ...exp,
            image: getGoogleDriveThumbnail(driveLink),
        };
    }
    return { ...exp, image: PLACEHOLDER_IMAGE };
});

// ============ KOMPONEN UTAMA ============
export default function RelatedExperience() {
    const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [modalViewMode, setModalViewMode] = useState('pdf'); // 'pdf' | 'image'
    const [iframeLoading, setIframeLoading] = useState(true);

    const headerRef = useRef(null);
    const modalRef = useRef(null);
    const sliderContainerRef = useRef(null);

    const currentExp = selectedExperience || experiences[0];
    const driveFileId = getGoogleDriveFileId(currentExp.certificate);

    // Reset loading state for iframe when modal opens or view changes
    useEffect(() => {
        if (lightboxOpen) {
            setIframeLoading(true);
        }
    }, [lightboxOpen, selectedExperience, modalViewMode]);

    // Preload images
    useEffect(() => {
        experiences.forEach((exp) => {
            const img = new Image();
            img.src = exp.image;
            img.onerror = () => {
                img.src = PLACEHOLDER_IMAGE;
            };
        });
    }, []);

    // Header GSAP Reveal Animation & Refresh Trigger
    useEffect(() => {
        const headerEl = headerRef.current;
        const sliderEl = sliderContainerRef.current;
        if (!headerEl || !sliderEl) return;

        // Mencegah bug GSAP salah kalkulasi offset yang menyebabkan section melompat
        const refreshGSAP = () => ScrollTrigger.refresh();
        window.addEventListener('resize', refreshGSAP);
        const timer1 = setTimeout(refreshGSAP, 500);
        const timer2 = setTimeout(refreshGSAP, 1500);

        const ctx = gsap.context(() => {
            const targets = headerEl.querySelectorAll('.cert-header-reveal');
            if (targets.length) {
                gsap.fromTo(
                    targets,
                    { opacity: 0, y: 24, scale: 0.96 },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.12,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: headerEl,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }

            gsap.fromTo(
                sliderEl,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sliderEl,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                }
            );
        });

        return () => {
            window.removeEventListener('resize', refreshGSAP);
            clearTimeout(timer1);
            clearTimeout(timer2);
            ctx.revert();
        };
    }, []);

    // Prevent main page scrolling when modal preview is open & ESC to close
    useEffect(() => {
        if (!lightboxOpen) return;

        const originalBodyOverflow = document.body.style.overflow;
        const originalDocOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' || e.code === 'Escape' || e.keyCode === 27) {
                e.preventDefault();
                e.stopPropagation();
                setLightboxOpen(false);
            }
        };

        const handleMouseMove = () => {
            if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                window.focus();
                if (modalRef.current) {
                    modalRef.current.focus();
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('keydown', handleKeyDown, true);
        window.addEventListener('keyup', handleKeyDown, true);
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const focusTimer = setTimeout(() => {
            window.focus();
            if (modalRef.current) {
                modalRef.current.focus();
            }
        }, 50);

        document.body.classList.add('lightbox-modal-open');

        return () => {
            clearTimeout(focusTimer);
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalDocOverflow;
            document.body.classList.remove('lightbox-modal-open');

            window.removeEventListener('keydown', handleKeyDown, true);
            document.removeEventListener('keydown', handleKeyDown, true);
            window.removeEventListener('keyup', handleKeyDown, true);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lightboxOpen]);

    const handleOpenModal = (exp, mode = 'pdf') => {
        setSelectedExperience(exp);
        setModalViewMode(mode);
        setLightboxOpen(true);
    };

    return (
        <section
            id="certificates"
            className="we-section"
        >
            <SectionBackdrop variant="cool" />

            <style>{`
                .cert-swiper {
                    padding-bottom: 2.5rem !important;
                    padding-top: 2rem !important;
                    overflow: visible !important;
                }
                @media (min-width: 640px) {
                    .cert-swiper {
                        padding-bottom: 5rem !important;
                    }
                }
                .cert-swiper .swiper-wrapper {
                    align-items: stretch;
                }
                .cert-swiper .swiper-slide {
                    width: 300px;
                    height: auto;
                }
                @media (min-width: 640px) {
                    .cert-swiper .swiper-slide {
                        width: 360px;
                    }
                }
                .cert-card {
                    position: relative;
                    min-height: 420px;
                    background: rgba(255, 255, 255, 0.82);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid rgba(220, 38, 38, 0.15);
                    border-radius: 1.25rem;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    box-shadow: 0 16px 42px rgba(83, 64, 40, 0.1);
                }
                /* Glossy shine effect on hover */
                .cert-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -130%;
                    width: 75%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.25),
                        transparent
                    );
                    transform: skewX(-25deg);
                    transition: left 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    z-index: 10;
                    pointer-events: none;
                }
                .cert-card:hover::before {
                    left: 160%;
                }
                @media (min-width: 640px) {
                    .cert-card {
                        min-height: 480px;
                    }
                }
                .cert-card:hover {
                    border-color: rgba(220, 38, 38, 0.6);
                    box-shadow: 0 24px 55px rgba(220, 38, 38, 0.25);
                }
                .cert-swiper .swiper-slide-active .cert-card {
                    border-color: rgba(220, 38, 38, 0.7);
                    box-shadow: 0 12px 35px -10px rgba(220, 38, 38, 0.35);
                }
                .cert-swiper .swiper-pagination-bullet {
                    background: rgba(83, 52, 42, 0.3);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .cert-swiper .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #dc2626, #ef4444);
                    box-shadow: 0 0 12px rgba(220, 38, 38, 0.5);
                    width: 24px;
                    border-radius: 6px;
                }
                .cert-swiper .swiper-button-next,
                .cert-swiper .swiper-button-prev {
                    display: none !important;
                }
            `}</style>

            <div className="we-inner">
                {/* Section Header */}
                <div ref={headerRef} className="we-header">
                    <div className="we-label cert-header-reveal">
                        <span className="we-line" />
                        <span>My Certificate</span>
                        <span className="we-line" />
                    </div>
                    <h2 className="we-title cert-header-reveal">
                        Certificate <span>Collection</span>
                    </h2>
                </div>

                {/* 3D Carousel Swiper */}
                <div ref={sliderContainerRef} className="we-slider-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={0}
                        loop={true}
                        loopedSlides={experiences.length}
                        speed={800}
                        coverflowEffect={{
                            rotate: 15,
                            stretch: 10,
                            depth: 200,
                            modifier: 1.2,
                            slideShadows: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            dynamicMainBullets: 5,
                        }}
                        navigation={false}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="cert-swiper w-full max-w-7xl mx-auto"
                    >
                        {experiences.map((exp, idx) => {
                            const fileId = getGoogleDriveFileId(exp.certificate);

                            return (
                                <SwiperSlide key={exp.id} className="flex h-auto">
                                    <div
                                        className="cert-card"
                                        onClick={() => handleOpenModal(exp, fileId ? 'pdf' : 'image')}
                                    >
                                        {/* Thumbnail Container */}
                                        <div className="cert-card-image">
                                            <img
                                                src={exp.image}
                                                alt={exp.title}
                                                loading="lazy"
                                                decoding="async"
                                                onError={(e) => {
                                                    if (e.target.src !== PLACEHOLDER_IMAGE && !e.target.src.endsWith(PLACEHOLDER_IMAGE)) {
                                                        e.target.src = PLACEHOLDER_IMAGE;
                                                    }
                                                }}
                                            />

                                            {/* Hover Overlay */}
                                            <div className="cert-card-overlay">
                                                <div className="cert-card-overlay-icon">
                                                    <i className={`fas ${fileId ? 'fa-file-pdf' : 'fa-expand'}`} />
                                                </div>
                                                <span className="cert-card-overlay-text">Lihat Preview</span>
                                            </div>
                                        </div>

                                        {/* Content Container */}
                                        <div className="cert-card-content">
                                            <div className="cert-card-header">
                                                <h3 className="cert-card-title">
                                                    <span className="cert-title-gradient">{exp.title}</span>
                                                </h3>
                                                <p className="cert-card-role">
                                                    <i className="fas fa-award" />
                                                    {exp.role}
                                                </p>
                                            </div>

                                            <p className="cert-card-description">{exp.description}</p>

                                            <div className="cert-card-tags">
                                                {exp.tags.map((tag, tagIdx) => (
                                                    <span key={tagIdx} className="cert-card-tag">{tag}</span>
                                                ))}
                                            </div>

                                            <div className="cert-card-actions">
                                                <button
                                                    className="cert-btn cert-btn--primary"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleOpenModal(exp, fileId ? 'pdf' : 'image');
                                                    }}
                                                >
                                                    <i className="fas fa-eye" />
                                                    Lihat Detail
                                                </button>

                                                {exp.certificate && (
                                                    <a
                                                        href={exp.certificate}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="cert-btn cert-btn--secondary"
                                                        onClick={(e) => e.stopPropagation()}
                                                        title="Buka di Google Drive"
                                                    >
                                                        <i className="fas fa-external-link-alt" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>

            {/* FULL DOCUMENT MODAL LIGHTBOX (PDF EMBED / IMAGE SCROLL) */}
            {lightboxOpen && (
                <>
                    <style>{`
                        body.lightbox-modal-open .navbar-shell {
                            opacity: 0 !important;
                            pointer-events: none !important;
                            transform: translateY(-120%) !important;
                            transition: opacity 0.3s ease, transform 0.3s ease !important;
                        }
                    `}</style>
                    <div
                        ref={modalRef}
                        tabIndex={-1}
                        className="we-modal-overlay"
                        onPointerDown={(e) => {
                            if (e.target === modalRef.current) {
                                setLightboxOpen(false);
                            }
                        }}
                        onMouseDown={(e) => {
                            if (e.target === modalRef.current) {
                                setLightboxOpen(false);
                            }
                        }}
                        onClick={(e) => {
                            if (e.target === modalRef.current) {
                                setLightboxOpen(false);
                            }
                        }}
                    >
                        <div
                            className="we-modal"
                            onPointerDown={(e) => e.stopPropagation()}
                            onMouseDown={(e) => e.stopPropagation()}
                            onClick={(e) => e.stopPropagation()}
                            onMouseEnter={() => {
                                if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                                    window.focus();
                                    modalRef.current?.focus();
                                }
                            }}
                            onMouseMove={() => {
                                if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
                                    window.focus();
                                    modalRef.current?.focus();
                                }
                            }}
                        >
                            {/* Modal Header */}
                            <div className="we-modal-header">
                                <div className="we-modal-title-bar">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setLightboxOpen(false);
                                        }}
                                        className="we-modal-close-btn we-modal-close-btn--red"
                                        title="Tutup pratinjau (ESC)"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                    <span className="we-modal-title-bar-dot we-modal-title-bar-dot--yellow" />
                                    <span className="we-modal-title-bar-dot we-modal-title-bar-dot--green" />
                                    <span className="we-modal-title-bar-text">
                                        {currentExp.title} — {currentExp.role} ({currentExp.year})
                                    </span>
                                </div>

                                <div className="we-modal-controls">
                                    {/* Mode Selector Switcher */}
                                    {driveFileId && (
                                        <div className="we-modal-mode-switch">
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setModalViewMode('pdf');
                                                }}
                                                className={`we-modal-mode-btn ${modalViewMode === 'pdf' ? 'active' : ''}`}
                                            >
                                                <i className="fas fa-file-pdf" />
                                                <span>PDF Scroll</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setModalViewMode('image');
                                                }}
                                                className={`we-modal-mode-btn ${modalViewMode === 'image' ? 'active' : ''}`}
                                            >
                                                <i className="fas fa-image" />
                                                <span>Foto</span>
                                            </button>
                                        </div>
                                    )}

                                    {currentExp.certificate && (
                                        <a
                                            href={currentExp.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="we-modal-drive-link"
                                        >
                                            <span>Buka di Drive</span>
                                            <i className="fas fa-external-link-alt" />
                                        </a>
                                    )}

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setLightboxOpen(false);
                                        }}
                                        className="we-modal-close-btn"
                                        aria-label="Tutup pratinjau"
                                        title="Tutup pratinjau (ESC)"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body Container */}
                            <div className="we-modal-body">
                                {modalViewMode === 'pdf' && driveFileId && iframeLoading && (
                                    <div className="we-modal-loading">
                                        <div className="we-modal-spinner" />
                                        <div className="we-modal-loading-text">
                                            <p>Memuat Dokumen Google Drive...</p>
                                            <p>Silakan tunggu sebentar atau tampilkan foto instan</p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setModalViewMode('image');
                                            }}
                                            className="we-btn we-btn--secondary"
                                        >
                                            <i className="fas fa-image" />
                                            Tampilkan Foto Instan
                                        </button>
                                    </div>
                                )}

                                {modalViewMode === 'pdf' && driveFileId ? (
                                    <iframe
                                        src={`https://drive.google.com/file/d/${driveFileId}/preview`}
                                        className="we-modal-iframe"
                                        title={currentExp.title}
                                        allow="autoplay"
                                        onLoad={() => setIframeLoading(false)}
                                    />
                                ) : (
                                    <div className="we-modal-image-container">
                                        <img
                                            src={currentExp.image}
                                            alt={currentExp.title}
                                            onError={(e) => {
                                                if (e.target.src !== PLACEHOLDER_IMAGE && !e.target.src.endsWith(PLACEHOLDER_IMAGE)) {
                                                    e.target.src = PLACEHOLDER_IMAGE;
                                                }
                                            }}
                                            className="we-modal-image"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
}
