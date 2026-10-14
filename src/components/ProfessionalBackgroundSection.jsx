import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionBackdrop from './SectionBackdrop';
import './ProfessionalBackgroundSection.css';

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
    // ── Lisensi & Sertifikasi Resmi ──
    {
        id: 0,
        title: 'Sertifikat HKI',
        role: 'Hak Atas Kekayaan Intelektual',
        issuer: 'Kementerian Hukum & HAM RI',
        category: 'Lisensi & HKI',
        icon: 'fa-shield-halved',
        tags: ['Hak Cipta', 'Inovasi Digital', 'SILADATA'],
        description: 'Pengakuan resmi Hak Cipta atas inovasi software SILADATA (Sistem Layanan Dokumen Akreditasi) terdaftar di Kemenkumham RI.',
        year: '2026',
        certificate: 'https://drive.google.com/file/d/1ZHm_D_ajLQtBQiuUYI6U84aOnoYEoJ4L/view?usp=drive_link',
    },
    {
        id: 2,
        title: 'Sertifikat BNSP',
        role: 'Badan Nasional Sertifikasi Profesi',
        issuer: 'BNSP Republik Indonesia',
        category: 'Sertifikasi Profesi',
        icon: 'fa-award',
        tags: ['Kompetensi Nasional', 'Teknologi Informasi'],
        description: 'Sertifikasi kompetensi profesional nasional bidang Teknologi Informasi dengan standar industri yang teruji.',
        year: '2025',
        certificate: 'https://drive.google.com/file/d/1rsrf3LQ5EeqACZ4O7PvpAdpmTk8snZ5J/view?pli=1',
        image: '/img/sertif.webp',
    },
    {
        id: 4,
        title: 'Sertifikat UKK',
        role: 'Uji Kompetensi Keahlian RPL',
        issuer: 'Kemendikbud & Industri RPL',
        category: 'Uji Kompetensi',
        icon: 'fa-code',
        tags: ['Rekayasa Perangkat Lunak', 'Pemrograman Web'],
        description: 'Uji kompetensi teknis Rekayasa Perangkat Lunak dalam pengembangan aplikasi web & analisis sistem.',
        year: '2024',
        certificate: 'https://drive.google.com/file/d/1XY4nEWlOES9m9tWEgYsDiRC1YbGAQbeO/view',
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
    const gridRef = useRef(null);

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

    // Header GSAP Reveal Animation
    useEffect(() => {
        const headerEl = headerRef.current;
        const gridEl = gridRef.current;
        if (!headerEl || !gridEl) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerEl.children,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: headerEl,
                        start: 'top 92%',
                        toggleActions: 'play none none none',
                    },
                }
            );

            // Cards stagger animation
            gsap.from('.we-card', {
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridEl,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
            });
        });

        return () => ctx.revert();
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

            <div className="we-inner">
                {/* Section Header */}
                <div ref={headerRef} className="we-header">
                    <div className="we-label">
                        <span className="we-line" />
                        <span>My Achievements</span>
                        <span className="we-line" />
                    </div>
                    <h2 className="we-title">
                        Certificate <span>Collection</span>
                    </h2>
                </div>

                {/* Certificate Cards Grid */}
                <div ref={gridRef} className="we-grid">
                    {experiences.map((exp, idx) => {
                        const fileId = getGoogleDriveFileId(exp.certificate);

                        return (
                            <article
                                key={exp.id}
                                className="we-card"
                                onClick={() => handleOpenModal(exp, fileId ? 'pdf' : 'image')}
                            >
                                {/* Card Glow Effect */}
                                <div className="we-card-glow" />

                                {/* Thumbnail */}
                                <div className="we-card-image">
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

                                    {/* Year Badge */}
                                    <div className="we-card-badge we-card-badge--year">
                                        <i className="far fa-calendar-alt" />
                                        {exp.year}
                                    </div>

                                    {/* Category Badge */}
                                    <div className="we-card-badge we-card-badge--category">
                                        <i className={`fas ${exp.icon || 'fa-certificate'}`} />
                                        {exp.category || 'Sertifikat'}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="we-card-overlay">
                                        <div className="we-card-overlay-icon">
                                            <i className={`fas ${fileId ? 'fa-file-pdf' : 'fa-expand'}`} />
                                        </div>
                                        <span className="we-card-overlay-text">Lihat Preview</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="we-card-content">
                                    <div className="we-card-header">
                                        <h3 className="we-card-title">{exp.title}</h3>
                                        <p className="we-card-role">
                                            <i className="fas fa-award" />
                                            {exp.role}
                                        </p>
                                    </div>

                                    <p className="we-card-description">{exp.description}</p>

                                    <div className="we-card-tags">
                                        {exp.tags.map((tag, tagIdx) => (
                                            <span key={tagIdx} className="we-card-tag">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="we-card-actions">
                                        <button
                                            className="we-btn we-btn--primary"
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
                                                className="we-btn we-btn--secondary"
                                                onClick={(e) => e.stopPropagation()}
                                                title="Buka di Google Drive"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
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
