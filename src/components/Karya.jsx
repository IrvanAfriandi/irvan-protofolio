import { useEffect, useRef, useCallback, useState } from 'react';
import gsap from 'gsap';

export const SLIDE_DATA = [
  {
    name: "BYD Cirebon",
    img: "/img/byd.webp",
    link: "https://bydcirebon.id/",
    category: "Automotive Dealer",
    description: "Website dealer dengan katalog kendaraan dan pengalaman showroom digital.",
    tags: ["React", "Vite", "Tailwind"],
    detail: {
      fullDescription: "Website resmi dealer BYD Cirebon yang menampilkan katalog kendaraan listrik secara modern dan interaktif. Dirancang untuk memberikan pengalaman showroom digital yang imersif bagi calon pembeli, lengkap dengan tampilan produk, spesifikasi teknis, serta kemudahan menghubungi tim sales.",
      highlights: [
        "Katalog kendaraan interaktif dengan filter dan detail spesifikasi",
        "Desain responsif & animasi halus untuk pengalaman premium",
        "Integrasi formulir kontak dan WhatsApp langsung",
        "Performa optimal dengan lazy loading & WebP image",
      ],
      images: ["/img/byd.webp"],
      gallery: [
        { src: "/img/byd.webp", caption: "Halaman beranda dealer BYD Cirebon" },
        { src: "/img/byd.webp", caption: "Katalog kendaraan listrik & spesifikasi EV" },
        { src: "/img/byd.webp", caption: "Detail teknologi Blade Battery & fitur keamanan" },
        { src: "/img/byd.webp", caption: "Formulir online pemesanan unit & test drive" },
        { src: "/img/byd.webp", caption: "Tampilan interface responsif di layar mobile" },
      ],
    }
  },
  {
    name: "Mariposas Tour",
    img: "/img/mariposas.webp",
    link: "https://mariposasindonesia.com",
    category: "Travel & Tourism",
    description: "Platform perjalanan untuk menjelajahi destinasi Indonesia dengan lebih mudah.",
    tags: ["React", "GSAP", "Vercel"],
    detail: {
      fullDescription: "Mariposas Tour adalah platform digital untuk agen perjalanan wisata Indonesia. Menampilkan paket tur, destinasi populer, dan galeri foto wisata dengan animasi GSAP yang memukau. Dibangun di atas React + Vite dan di-deploy di Vercel untuk kecepatan loading yang optimal.",
      highlights: [
        "Halaman destinasi dengan animasi scroll parallax berbasis GSAP",
        "Galeri foto perjalanan yang imersif dan mobile-friendly",
        "Tampilan paket tur lengkap dengan harga dan jadwal",
        "Deploy otomatis via Vercel dengan performa CDN global",
      ],
      images: ["/img/mariposas.webp"],
      gallery: [
        { src: "/img/mariposas.webp", caption: "Landing page modern Mariposas Tour" },
        { src: "/img/mariposas.webp", caption: "Koleksi destinasi wisata unggulan nusantara" },
        { src: "/img/mariposas.webp", caption: "Detail itinerary paket perjalanan lengkap" },
        { src: "/img/mariposas.webp", caption: "Animasi smooth scroll parallax berbasis GSAP" },
        { src: "/img/mariposas.webp", caption: "Galeri visual dokumentasi petualangan alam" },
        { src: "/img/mariposas.webp", caption: "Formulir reservasi tur cepat & terintegrasi" },
        { src: "/img/mariposas.webp", caption: "Tampilan footer & informasi kontak pemesanan" },
      ],
    }
  },
  {
    name: "SILADATA",
    img: "/img/siladata.webp",
    link: "https://siladata.my.id",
    category: "Data Management",
    description: "Sistem pengelolaan dokumen akreditasi yang terpusat dan terstruktur.",
    tags: ["Web App", "PHP", "MySQL"],
    detail: {
      fullDescription: "SILADATA (Sistem Layanan Dokumen Akreditasi) adalah aplikasi web fullstack untuk manajemen dokumen akreditasi institusi pendidikan. Sistem ini telah mendapatkan pengakuan resmi berupa Hak Kekayaan Intelektual (HKI) dari Kementerian Hukum & HAM RI, membuktikan inovasi dan orisinalitasnya.",
      highlights: [
        "Manajemen dokumen akreditasi terpusat & terstruktur",
        "Sistem autentikasi role-based (admin, operator, viewer)",
        "Fitur upload, pencarian, dan export dokumen",
        "Terdaftar resmi di HKI Kemenkumham RI (2026)",
      ],
      images: ["/img/siladata.webp"],
      gallery: [
        { src: "/img/siladata.webp", caption: "Dashboard utama pengelolaan dokumen akreditasi" },
        { src: "/img/siladata.webp", caption: "Daftar arsip dokumen terstruktur & filter status" },
        { src: "/img/siladata.webp", caption: "Panel autentikasi & manajemen hak akses pengguna" },
        { src: "/img/siladata.webp", caption: "Form upload & kategorisasi standar akreditasi" },
        { src: "/img/siladata.webp", caption: "Pencarian cerdas dan ekspor laporan berkas" },
        { src: "/img/siladata.webp", caption: "Sertifikat Hak Cipta (HKI) Kemenkumham RI" },
      ],
    }
  },
];

const TOTAL = SLIDE_DATA.length;
let activeIdx = 1;
let isAnimating = false;
let autoSlideInterval = null;
let titleAnimationTimer = null;

export default function Karya() {
  const sliderRef = useRef(null);
  const titleDivRef = useRef(null);
  const captionDivRef = useRef(null);
  const previewDivRef = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);
  const modalRef = useRef(null);
  const lbTouchRef = useRef({ x: 0, y: 0 });

  const [modalProject, setModalProject] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [photoLightbox, setPhotoLightbox] = useState(null); // { src, caption, index }
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const openModal = useCallback((project) => {
    setModalProject(project);
    setGalleryIdx(0);
    clearInterval(autoSlideInterval);
    // Freeze background: save scroll, pin body with position:fixed
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.body.dataset.scrollY = scrollY;
    document.body.classList.add('karya-modal-open');
  }, []);

  const closeModal = useCallback(() => {
    setModalProject(null);
    setPhotoLightbox(null);
    // Restore exact scroll position
    const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    delete document.body.dataset.scrollY;
    document.body.classList.remove('karya-modal-open');
    window.scrollTo(0, scrollY);
    startAutoSlide();
  }, []);

  // Keyboard navigation for photo lightbox
  useEffect(() => {
    if (!photoLightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setPhotoLightbox(null);
      } else if (e.key === 'ArrowLeft' && modalProject?.detail?.gallery?.length > 1) {
        setPhotoLightbox((prev) => {
          if (!prev) return null;
          const len = modalProject.detail.gallery.length;
          const nextIdx = (prev.index - 1 + len) % len;
          return { ...modalProject.detail.gallery[nextIdx], index: nextIdx };
        });
      } else if (e.key === 'ArrowRight' && modalProject?.detail?.gallery?.length > 1) {
        setPhotoLightbox((prev) => {
          if (!prev) return null;
          const len = modalProject.detail.gallery.length;
          const nextIdx = (prev.index + 1) % len;
          return { ...modalProject.detail.gallery[nextIdx], index: nextIdx };
        });
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photoLightbox, modalProject]);

  const getIndex = useCallback((offset) => {
    let newIdx = activeIdx + offset;
    while (newIdx < 1) newIdx += TOTAL;
    while (newIdx > TOTAL) newIdx -= TOTAL;
    return newIdx;
  }, []);

  const clearTitleTimer = () => {
    if (titleAnimationTimer) clearTimeout(titleAnimationTimer);
    titleAnimationTimer = null;
  };

  const animateTitleToCaption = (name) => {
    if (!name) return;
    if (titleDivRef.current) {
      const h1 = titleDivRef.current.querySelector('h1');
      if (h1) h1.innerText = name;
      titleDivRef.current.classList.add('karya-title-visible');
    }
    if (captionDivRef.current) {
      captionDivRef.current.innerText = name;
      captionDivRef.current.classList.add('karya-show');
    }
  };

  const updatePreview = (content) => {
    if (!previewDivRef.current || !content?.img) return;
    const newImg = document.createElement('img');
    newImg.src = content.img;
    newImg.alt = content.name;
    previewDivRef.current.appendChild(newImg);
    gsap.fromTo(newImg,
      { opacity: 0, scale: 1.15 },
      {
        opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.2,
        onComplete: () => {
          const old = previewDivRef.current?.querySelectorAll('img:not(:last-child)');
          old?.forEach(s => s.remove());
        }
      }
    );
  };

  const createSlide = (content, className) => {
    if (!content) return document.createElement('div');
    const div = document.createElement('div');
    div.className = `karya-slide-container ${className}`;
    div.dataset.projectName = content.name;
    const tagsHtml = content.tags ? content.tags.map(t => `<span class="karya-card-tag">${t}</span>`).join('') : '';
    const categoryHtml = content.category ? `<span class="karya-card-category">${content.category}</span>` : '';

    div.innerHTML = `
      <div class="karya-slide-img">
        <img src="${content.img}" alt="${content.name}" loading="lazy" decoding="async">
        <div class="karya-card-gradient"></div>
        <div class="karya-card-top-info">${categoryHtml}</div>
        <div class="karya-card-bottom-info">
          <p class="karya-card-description">${content.description || ''}</p>
          <div class="karya-card-tags">${tagsHtml}</div>
          <div class="karya-card-actions">
            <button class="karya-card-detail-btn" data-project="${content.name}" aria-label="Lihat detail ${content.name}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <span>Lihat Detail</span>
            </button>
            <a class="karya-card-link-badge" href="${content.link}" target="_blank" rel="noopener noreferrer" aria-label="Kunjungi ${content.name}">
              <span>Visit</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    `;
    return div;
  };

  const CARD_TOP = '53%';
  const CARD_WIDTH = 'min(46%, 720px)';
  const CARD_HEIGHT = 'clamp(460px, 52svh, 490px)';

  const transitionDesktop = (direction) => {
    if (isAnimating || !sliderRef.current) return;
    isAnimating = true;

    const outPos = direction === 'next' ? 'prev' : 'next';
    const inPos = direction === 'next' ? 'next' : 'prev';

    let outSlide = sliderRef.current.querySelector(`.karya-slide-container.${outPos}`);
    const activeSlide = sliderRef.current.querySelector('.karya-slide-container.active');
    let inSlide = sliderRef.current.querySelector(`.karya-slide-container.${inPos}`);

    const inIdx = getIndex(direction === 'next' ? 1 : -1);
    if (!inSlide) {
      inSlide = createSlide(SLIDE_DATA[inIdx - 1], inPos);
      sliderRef.current.appendChild(inSlide);
      const startLeft = (inPos === 'prev') ? '10%' : '90%';
      gsap.set(inSlide, { top: CARD_TOP, left: startLeft, width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, z: 0, opacity: 1, filter: "brightness(0.8)", zIndex: 10, clipPath: 'none' });
    }
    if (!outSlide) {
      const outIdx = getIndex(direction === 'next' ? -1 : 1);
      outSlide = createSlide(SLIDE_DATA[outIdx - 1], outPos);
      sliderRef.current.appendChild(outSlide);
      const startLeft = (outPos === 'prev') ? '10%' : '90%';
      gsap.set(outSlide, { top: CARD_TOP, left: startLeft, width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, z: 0, opacity: 1, filter: "brightness(0.8)", zIndex: 10, clipPath: 'none' });
    }

    const animDuration = 0.85;
    const animEase = "power2.inOut";
    const incomingLeft = inPos === 'prev' ? '10%' : '90%';
    const outgoingLeft = outPos === 'prev' ? '10%' : '90%';

    // Move the side preview into the center while shrinking the old center card.
    gsap.set(inSlide, {
      top: CARD_TOP,
      left: incomingLeft,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      scale: 0.52,
      opacity: 0.85,
      zIndex: 20
    });
    gsap.to(inSlide, {
      left: '50%',
      top: CARD_TOP,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      scale: 1,
      opacity: 1,
      filter: "brightness(1)",
      zIndex: 20,
      clipPath: 'none',
      duration: animDuration, ease: animEase
    });

    // Inner image parallax zoom effect
    const inImg = inSlide.querySelector('.karya-slide-img img');
    if (inImg) {
      gsap.fromTo(inImg, { scale: 1.18 }, { scale: 1, duration: animDuration, ease: animEase });
    }

    // Return the old center card to the side preview position.
    gsap.to(activeSlide, {
      top: CARD_TOP,
      left: outgoingLeft,
      scale: 0.52,
      opacity: 0.85,
      filter: "brightness(0.8)",
      zIndex: 10,
      clipPath: 'none',
      duration: animDuration, ease: animEase
    });

    // Fade the old side preview while it is recycled.
    gsap.to(outSlide, {
      opacity: 0,
      duration: animDuration, ease: animEase
    });

    // 4. Prepare and animate new side slide entering (Offscreen -> Side)
    const farIdx = getIndex(direction === 'next' ? 2 : -2);
    const newSlide = createSlide(SLIDE_DATA[farIdx - 1], inPos);
    sliderRef.current.appendChild(newSlide);
    const newStartLeft = (inPos === 'prev') ? '10%' : '90%';
    gsap.set(newSlide, {
      top: CARD_TOP,
      left: newStartLeft,
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      scale: 0.52,
      opacity: 0,
      filter: "brightness(0.8)",
      zIndex: 5,
      clipPath: 'none'
    });
    gsap.to(newSlide, {
      opacity: 0.85,
      zIndex: 10,
      duration: animDuration, ease: animEase
    });

    setTimeout(() => {
      outSlide?.remove();
      activeSlide.className = `karya-slide-container ${outPos}`;
      inSlide.className = 'karya-slide-container active';
      newSlide.className = `karya-slide-container ${inPos}`;
      gsap.set('.karya-slide-container.prev', { top: CARD_TOP, left: '10%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, rotation: 0, skewX: 0, skewY: 0, z: 0, opacity: 0.85, filter: "brightness(0.8)", zIndex: 10, clipPath: 'none' });
      gsap.set('.karya-slide-container.active', { top: CARD_TOP, left: '50%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 1, rotateY: 0, rotation: 0, skewX: 0, skewY: 0, z: 0, opacity: 1, filter: "brightness(1)", zIndex: 20, clipPath: 'none' });
      gsap.set('.karya-slide-container.next', { top: CARD_TOP, left: '90%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, rotation: 0, skewX: 0, skewY: 0, z: 0, opacity: 0.85, filter: "brightness(0.8)", zIndex: 10, clipPath: 'none' });
      activeIdx = inIdx;
      setActiveSlideIdx(inIdx - 1);
      isAnimating = false;
      animateTitleToCaption(SLIDE_DATA[activeIdx - 1].name);
      updatePreview(SLIDE_DATA[activeIdx - 1]);
    }, animDuration * 1000 + 40);
  };

  const transitionMobile = (direction) => {
    if (isAnimating || !sliderRef.current) return;
    isAnimating = true;
    const newIdx = getIndex(direction === 'next' ? 1 : -1);
    const newContent = SLIDE_DATA[newIdx - 1];
    const activeSlide = sliderRef.current?.querySelector('.karya-slide-container.active');
    if (!activeSlide) {
      isAnimating = false;
      return;
    }
    const innerCard = activeSlide.querySelector('.karya-slide-img');
    const imgElement = activeSlide.querySelector('.karya-slide-img img');
    if (!innerCard || !imgElement) {
      isAnimating = false;
      return;
    }
    const tl = gsap.timeline({
      onComplete: () => {
        activeIdx = newIdx;
        setActiveSlideIdx(newIdx - 1);
        isAnimating = false;
        updatePreview(newContent);
        animateTitleToCaption(newContent.name);
      }
    });
    tl.to(innerCard, { opacity: 0.25, scale: 0.96, duration: 0.2, ease: "power2.in" })
      .call(() => {
        imgElement.src = newContent.img;
        imgElement.alt = newContent.name;
        const catElem = activeSlide.querySelector('.karya-card-category');
        if (catElem) catElem.innerText = newContent.category || '';
        const descElem = activeSlide.querySelector('.karya-card-description');
        if (descElem) descElem.innerText = newContent.description || '';
        const tagsElem = activeSlide.querySelector('.karya-card-tags');
        if (tagsElem && newContent.tags) {
          tagsElem.innerHTML = newContent.tags.map(t => `<span class="karya-card-tag">${t}</span>`).join('');
        }
        const detailBtn = activeSlide.querySelector('.karya-card-detail-btn');
        if (detailBtn) {
          detailBtn.dataset.project = newContent.name;
          detailBtn.setAttribute('aria-label', `Lihat detail ${newContent.name}`);
        }
        const linkElem = activeSlide.querySelector('.karya-card-link-badge');
        if (linkElem) {
          linkElem.href = newContent.link || '#';
          linkElem.setAttribute('aria-label', `Kunjungi ${newContent.name}`);
        }
        activeSlide.dataset.projectName = newContent.name;
      })
      .to(innerCard, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
  };

  const transition = (direction) => {
    if (isAnimating) return;
    const isMobile = window.innerWidth <= 1024;
    if (isMobile) transitionMobile(direction);
    else transitionDesktop(direction);
  };

  const startAutoSlide = () => {
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(() => {
      if (!isAnimating) transition('next');
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  };

  const redirectActiveSlide = () => {
    if (isAnimating) return;
    const currentData = SLIDE_DATA[activeIdx - 1];
    if (currentData?.link && currentData.link !== '#') {
      window.open(currentData.link, '_blank');
    }
    resetAutoSlide();
  };

  const initSlides = () => {
    if (!sliderRef.current) return;
    const old = sliderRef.current.querySelectorAll('.karya-slide-container');
    old.forEach(s => s.remove());

    const isMobile = window.innerWidth <= 1024;
    if (!isMobile) {
      const prevIdx = getIndex(-1);
      const nextIdx = getIndex(1);
      const prevSlide = createSlide(SLIDE_DATA[prevIdx - 1], 'prev');
      const activeSlide = createSlide(SLIDE_DATA[activeIdx - 1], 'active');
      const nextSlide = createSlide(SLIDE_DATA[nextIdx - 1], 'next');
      sliderRef.current.append(prevSlide, activeSlide, nextSlide);
      gsap.set('.karya-slide-container.prev', { top: CARD_TOP, left: '10%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, z: 0, opacity: 0.85, zIndex: 10, clipPath: 'none' });
      gsap.set('.karya-slide-container.active', { top: CARD_TOP, left: '50%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 1, rotateY: 0, z: 0, opacity: 1, zIndex: 20, clipPath: 'none' });
      gsap.set('.karya-slide-container.next', { top: CARD_TOP, left: '90%', width: CARD_WIDTH, height: CARD_HEIGHT, scale: 0.52, rotateY: 0, z: 0, opacity: 0.85, zIndex: 10, clipPath: 'none' });
    } else {
      const activeSlide = createSlide(SLIDE_DATA[activeIdx - 1], 'active');
      sliderRef.current.appendChild(activeSlide);
      gsap.set('.karya-slide-container.active', { top: '53%', left: '50%', scale: 1, clipPath: 'none' });
    }
    setActiveSlideIdx(activeIdx - 1);

    if (titleDivRef.current) {
      const h1 = titleDivRef.current.querySelector('h1');
      if (h1) h1.innerText = "";
      titleDivRef.current.classList.remove('karya-title-visible');
    }
    if (captionDivRef.current) {
      captionDivRef.current.innerText = "";
      captionDivRef.current.classList.remove('karya-show');
    }
    setTimeout(() => animateTitleToCaption(SLIDE_DATA[0].name), 500);
    updatePreview(SLIDE_DATA[0]);
  };

  useEffect(() => {
    initSlides();
    startAutoSlide();

    const handleClickSlide = (e) => {
      // Detail button - opens modal
      const detailBtn = e.target.closest('.karya-card-detail-btn');
      if (detailBtn) {
        e.stopPropagation();
        const name = detailBtn.dataset.project;
        const project = SLIDE_DATA.find(p => p.name === name);
        if (project) openModal(project);
        return;
      }
      // Visit link - let anchor handle naturally
      if (e.target.closest('.karya-card-link-badge')) return;

      const slide = e.target.closest('.karya-slide-container');
      if (!slide || isAnimating) return;
      if (slide.classList.contains('next')) transition('next');
      else if (slide.classList.contains('prev')) transition('prev');
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };

    const handlePrevArrow = () => transition('prev');
    const handleNextArrow = () => transition('next');
    let wasMobile = window.innerWidth <= 1024;
    const handleResize = () => {
      const nowMobile = window.innerWidth <= 1024;
      if (wasMobile !== nowMobile) window.location.reload();
      wasMobile = nowMobile;
    };

    // Mobile swipe gestures
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      const diffX = e.changedTouches[0].clientX - touchStartX;
      const diffY = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) transition('next');
        else transition('prev');
      }
    };

    const sliderNode = sliderRef.current;
    const prevArrowNode = prevArrowRef.current;
    const nextArrowNode = nextArrowRef.current;

    sliderNode?.addEventListener('click', handleClickSlide);
    sliderNode?.addEventListener('touchstart', handleTouchStart, { passive: true });
    sliderNode?.addEventListener('touchend', handleTouchEnd, { passive: true });
    prevArrowNode?.addEventListener('click', handlePrevArrow);
    nextArrowNode?.addEventListener('click', handleNextArrow);
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(autoSlideInterval);
      clearTitleTimer();
      sliderNode?.removeEventListener('click', handleClickSlide);
      sliderNode?.removeEventListener('touchstart', handleTouchStart);
      sliderNode?.removeEventListener('touchend', handleTouchEnd);
      prevArrowNode?.removeEventListener('click', handlePrevArrow);
      nextArrowNode?.removeEventListener('click', handleNextArrow);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [getIndex, openModal, closeModal]);

  return (
    <section id="project" className="karya-section relative py-16 sm:py-24">
      <style>{`
        .karya-slider {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-height: 660px;
          height: clamp(660px, 82svh, 780px);
          overflow: hidden;
          background: #f7f4ee;
          font-family: 'Manrope', sans-serif;
          margin: 0;
          padding: 0;
        }

        /* Unified Header */
        .karya-section-header {
          text-align: center;
          max-width: 55rem;
          margin: 0 auto 2rem;
        }

        /* Card Slides */
        .karya-slide-container {
          position: absolute;
          width: min(46%, 720px);
          height: clamp(460px, 52svh, 490px);
          top: 53%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #dedbd5;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.16);
          box-shadow: 
            0 24px 48px -18px rgba(46, 39, 31, 0.35),
            0 0 24px rgba(220, 38, 38, 0.06),
            inset 0 1px 2px rgba(255, 255, 255, 0.3);
          transition: border-color 0.4s ease, box-shadow 0.4s ease, filter 0.4s ease;
        }

        /* KILAPAN SHINE GLOSSY SEPERTI KACA SAAT HOVER */
        .karya-slide-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -130%;
          width: 75%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.22),
            transparent
          );
          transform: skewX(-25deg);
          transition: left 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 15;
          pointer-events: none;
        }
        .karya-slide-container:hover::before {
          left: 160%;
        }
        .karya-slide-container:hover {
          border-color: rgba(220, 38, 38, 0.7);
          box-shadow: 
            0 40px 80px -15px rgba(0, 0, 0, 0.98),
            0 0 50px rgba(220, 38, 38, 0.4),
            inset 0 0 0 1px rgba(220, 38, 38, 0.25),
            inset 0 1px 2px rgba(255, 255, 255, 0.4);
        }

        .karya-slide-img {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #0c0c12;
        }
        .karya-slide-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          filter: brightness(0.9) contrast(1.03);
        }
        .karya-slide-container:hover .karya-slide-img img {
          transform: scale(1.08);
          filter: brightness(1.0) contrast(1.06);
        }

        .karya-card-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5, 7, 10, 0.12) 0%, rgba(5, 7, 10, 0) 42%, rgba(5, 7, 10, 0.8) 100%);
          pointer-events: none;
        }

        .karya-card-top-info {
          position: absolute;
          top: 1.2rem;
          left: 1.2rem;
          z-index: 10;
        }
        .karya-card-category {
          display: inline-block;
          padding: 0.35rem 0.85rem;
          border-radius: 20px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.2);
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: #fee2e2;
        }

        .karya-card-bottom-info {
          position: absolute;
          bottom: 1.25rem;
          left: 1.35rem;
          right: 1.35rem;
          z-index: 10;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: flex-end;
          gap: 0.6rem;
        }
        .karya-card-description {
          grid-column: 1 / -1;
          margin: 0 0 0.35rem;
          max-width: 46rem;
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(0.72rem, 1vw, 0.92rem);
          line-height: 1.45;
          text-wrap: balance;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .karya-slide-container.prev .karya-card-description,
        .karya-slide-container.next .karya-card-description {
          display: none;
        }
        .karya-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
        }
        .karya-card-tag {
          font-size: 0.65rem;
          font-weight: 500;
          padding: 0.2rem 0.55rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          color: #d1d5db;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* ACTIONS ROW */
        .karya-card-actions {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .karya-slide-container.prev .karya-card-actions,
        .karya-slide-container.next .karya-card-actions {
          display: none;
        }

        /* DETAIL BUTTON */
        .karya-card-detail-btn {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.9rem;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.3);
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
          font-family: 'Manrope', sans-serif;
        }
        .karya-card-detail-btn:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-2px);
        }

        /* VISIT BADGE */
        .karya-card-link-badge {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 0.8rem;
          border-radius: 7px;
          background: #c83d32;
          color: #ffffff;
          font-size: 0.7rem;
          font-weight: 600;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          box-shadow: 0 6px 14px rgba(126, 44, 35, 0.18), inset 0 1px 1px rgba(255, 255, 255, 0.3);
          white-space: nowrap;
          text-decoration: none;
          transition: transform 0.25s ease, background-color 0.25s ease;
        }
        .karya-card-link-badge:hover {
          background: rgba(185, 28, 28, 1);
          transform: translateY(-2px);
        }

        .karya-slide-container.prev {
          left: 10%;
          transform: translate(-50%, -50%) scale(0.52);
          opacity: 1;
          filter: brightness(0.8);
          z-index: 10;
          clip-path: none;
          box-shadow: 
            0 20px 38px rgba(46, 39, 31, 0.25),
            0 0 24px rgba(220, 38, 38, 0.1),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }
        .karya-slide-container.active {
          left: 50%;
          width: 46%;
          height: 56%;
          top: 48%;
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
          filter: brightness(1);
          z-index: 20;
          clip-path: none;
        }
        .karya-slide-container.next {
          left: 90%;
          transform: translate(-50%, -50%) scale(0.52);
          opacity: 1;
          filter: brightness(0.8);
          z-index: 10;
          clip-path: none;
          box-shadow: 
            0 20px 38px rgba(46, 39, 31, 0.25),
            0 0 24px rgba(220, 38, 38, 0.1),
            inset 0 1px 1px rgba(255, 255, 255, 0.25);
        }
        .karya-slide-container.prev:hover {
          filter: brightness(1);
          border-color: rgba(220, 38, 38, 0.8);
          transform: translate(-50%, -50%) scale(0.62);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.95),
            0 0 45px rgba(220, 38, 38, 0.45),
            inset 0 0 0 1px rgba(220, 38, 38, 0.3);
        }
        .karya-slide-container.next:hover {
          filter: brightness(1);
          border-color: rgba(220, 38, 38, 0.8);
          transform: translate(-50%, -50%) scale(0.62);
          box-shadow: 
            0 35px 70px rgba(0, 0, 0, 0.95),
            0 0 45px rgba(220, 38, 38, 0.45),
            inset 0 0 0 1px rgba(220, 38, 38, 0.3);
        }

        .karya-slider-title {
          position: absolute;
          top: 17%;
          left: clamp(1.5rem, 6vw, 6rem);
          transform: none;
          width: min(38%, 520px);
          max-width: 1200px;
          text-align: left;
          z-index: 30;
          pointer-events: none;
          opacity: 0;
          visibility: hidden;
        }
        .karya-slider-title.karya-title-visible {
          opacity: 1;
          visibility: visible;
        }
        .karya-slider-title h1 {
          font-size: clamp(2rem, 4.5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, #3d342a 0%, #7b3027 72%, #c83d32 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
          line-height: 1.15;
          margin: 0;
        }

        .karya-slider-preview {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          display: none;
          overflow: hidden;
          filter: blur(12px) brightness(1) saturate(0.75);
          pointer-events: none;
        }
        .karya-slider-preview img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: karyaSlowScale 30s infinite alternate ease-in-out;
        }
        @keyframes karyaSlowScale {
          0% { transform: scale(1) translateX(0%); }
          100% { transform: scale(1.18) translateX(1.5%); }
        }

        .karya-ambient-glow {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 50%;
          display: none;
          pointer-events: none;
          z-index: 1;
        }

        .karya-slide-caption {
          position: absolute;
          bottom: 2.5rem;
          left: 2.5rem;
          z-index: 35;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          padding: 0.45rem 1.3rem;
          border-radius: 7px;
          border: 1px solid rgba(61, 52, 42, 0.14);
          box-shadow: 0 10px 28px rgba(83, 64, 40, 0.12);
          pointer-events: none;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-slide-caption.karya-show {
          opacity: 1;
          transform: translateY(0);
        }
        .karya-cat-badge {
          font-size: 0.68rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.15rem 0.5rem;
          border-radius: 12px;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(220, 38, 38, 0.35);
        }
        .karya-slide-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.02em;
        }
        .karya-caption-arrow {
          display: flex;
          align-items: center;
          color: #ffb07c;
        }

        /* BOTTOM CONTROLS PILL BAR */
        .karya-bottom-controls {
          position: absolute;
          bottom: clamp(1.25rem, 3vh, 2rem);
          top: auto;
          left: 50%;
          transform: translateX(-50%);
          z-index: 35;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.35rem 0.55rem;
          background: rgba(255, 255, 255, 0.84);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 40px;
          border: 1px solid rgba(61, 52, 42, 0.14);
          box-shadow: 
            0 12px 32px -4px rgba(83, 64, 40, 0.18),
            0 2px 8px rgba(0, 0, 0, 0.04),
            inset 0 1px 1px rgba(255, 255, 255, 0.7);
        }

        .karya-nav-arrow {
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          transform: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(61, 52, 42, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3d342a;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 3px 10px rgba(83, 64, 40, 0.08);
          padding: 0;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
        }
        .karya-nav-arrow:focus-visible {
          outline: 3px solid #ffb07c;
          outline-offset: 3px;
        }
        .karya-nav-arrow:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border-color: rgba(220, 38, 38, 0.5);
          color: #ffffff;
          transform: scale(1.08);
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35);
        }
        .karya-nav-arrow:active {
          transform: scale(0.94);
        }

        .karya-control-dots {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0 0.35rem;
        }
        .karya-control-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(61, 52, 42, 0.25);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-control-dot:hover {
          background: rgba(220, 38, 38, 0.6);
          transform: scale(1.2);
        }
        .karya-control-dot.active {
          width: 22px;
          height: 8px;
          border-radius: 6px;
          background: linear-gradient(90deg, #dc2626, #ef4444);
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
        }

        .karya-footer {
          position: absolute;
          right: 2.5rem;
          bottom: 2.2rem;
          z-index: 35;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(61, 52, 42, 0.62);
          pointer-events: none;
          letter-spacing: 0.03em;
        }
        .karya-footer span.icon {
        }

        /* MEDIA QUERY UNTUK MOBILE & TABLET (LEBAR ≤ 1024px) */
        @media (max-width: 1024px) {
          .karya-slider {
            min-height: 580px;
            height: clamp(580px, 80svh, 660px);
          }
        }

        /* MODAL STYLES */
        .karya-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.78);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto;
          animation: karyaFadeIn 0.25s ease-out;
        }

        @keyframes karyaFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .karya-modal-dialog {
          background: #111216;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(220, 38, 38, 0.15);
          animation: karyaModalUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          color: #f3f4f6;
        }

        @keyframes karyaModalUp {
          from { transform: translateY(20px) scale(0.97); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .karya-modal-header {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          position: sticky;
          top: 0;
          background: rgba(17, 18, 22, 0.95);
          backdrop-filter: blur(10px);
          z-index: 10;
        }

        .karya-modal-category {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #ef4444;
          margin-bottom: 0.2rem;
        }

        .karya-modal-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .karya-modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #d1d5db;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .karya-modal-close:hover {
          background: rgba(220, 38, 38, 0.2);
          border-color: rgba(220, 38, 38, 0.4);
          color: #ffffff;
        }

        .karya-modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .karya-modal-hero-img-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .karya-modal-hero-img {
          width: 100%;
          max-height: 360px;
          object-fit: cover;
          display: block;
          cursor: zoom-in;
          transition: transform 0.3s ease;
        }
        .karya-modal-hero-img:hover {
          transform: scale(1.02);
        }

        .karya-modal-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0.6rem 1rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.9);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .karya-modal-zoom-hint {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.72rem;
          color: #ef4444;
          font-weight: 500;
        }

        .karya-modal-gallery-thumbs {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.35rem;
        }

        .karya-modal-thumb-btn {
          flex: 0 0 76px;
          height: 52px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid transparent;
          background: transparent;
          cursor: pointer;
          padding: 0;
          opacity: 0.6;
          transition: all 0.2s ease;
        }
        .karya-modal-thumb-btn.active,
        .karya-modal-thumb-btn:hover {
          opacity: 1;
          border-color: #dc2626;
          transform: translateY(-2px);
        }
        .karya-modal-thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .karya-modal-subtitle {
          font-size: 0.9rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #f87171;
          margin: 0 0 0.5rem;
        }

        .karya-modal-desc {
          font-size: 0.92rem;
          line-height: 1.6;
          color: #d1d5db;
          margin: 0;
        }

        .karya-modal-highlights-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .karya-modal-highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #e5e7eb;
          line-height: 1.45;
        }

        .karya-modal-check-icon {
          color: #22c55e;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .karya-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .karya-modal-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(220, 38, 38, 0.3);
          color: #fca5a5;
        }

        .karya-modal-footer {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(17, 18, 22, 0.95);
        }

        .karya-modal-btn-cancel {
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #d1d5db;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .karya-modal-btn-cancel:hover {
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
        }

        .karya-modal-btn-visit {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1.3rem;
          border-radius: 8px;
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.85rem;
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.35);
          transition: all 0.2s ease;
        }
        .karya-modal-btn-visit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.5);
        }

        /* LIGHTBOX STYLES */
        .karya-lightbox-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.94);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: karyaFadeIn 0.2s ease-out;
        }

        .karya-lightbox-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .karya-lightbox-close:hover {
          background: #dc2626;
          border-color: #ef4444;
        }

        .karya-lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          font-size: 2rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          z-index: 10;
        }
        .karya-lightbox-nav:hover {
          background: #dc2626;
          border-color: #ef4444;
        }
        .karya-lightbox-nav.prev { left: 1.5rem; }
        .karya-lightbox-nav.next { right: 1.5rem; }

        .karya-lightbox-content {
          max-width: 90vw;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .karya-lightbox-content img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
        }
        .karya-lightbox-caption {
          margin-top: 1rem;
          color: #d1d5db;
          font-size: 0.95rem;
          text-align: center;
        }
      `}</style>

      {/* Section Header */}
      <div className="section-header karya-section-header px-4">
        <div className="section-label visible">
          <span className="section-line" />
          <span>Featured Projects</span>
          <span className="section-line" />
        </div>

        <h2 className="section-title visible">
          Selected <span>Works</span>
        </h2>

        <p className="section-subtitle visible">
          Koleksi proyek inovatif dan solusi digital yang dibangun dengan standar teknologi modern, performa optimal, dan pengalaman visual yang memukau.
        </p>
      </div>

      {/* Main Slider Area */}
      <div ref={sliderRef} className="karya-slider" role="region" aria-label="Project Showcase Slider">
        <div ref={previewDivRef} className="karya-slider-preview" aria-hidden="true" />
        <div className="karya-ambient-glow" aria-hidden="true" />

        <div ref={titleDivRef} className="karya-slider-title" aria-hidden="true">
          <h1>{SLIDE_DATA[activeSlideIdx]?.name || ''}</h1>
        </div>

        <div ref={captionDivRef} className="karya-slide-caption" aria-hidden="true">
          <span className="karya-cat-badge">{SLIDE_DATA[activeSlideIdx]?.category || 'Project'}</span>
          <span className="karya-slide-name">{SLIDE_DATA[activeSlideIdx]?.name || ''}</span>
          <span className="karya-caption-arrow">→</span>
        </div>

        {/* Bottom Pill Navigation Bar */}
        <div className="karya-bottom-controls">
          <button
            ref={prevArrowRef}
            className="karya-nav-arrow karya-prev-arrow"
            aria-label="Slide sebelumnya"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="karya-control-dots">
            {SLIDE_DATA.map((item, i) => (
              <button
                key={item.name}
                type="button"
                className={`karya-control-dot ${i === activeSlideIdx ? 'active' : ''}`}
                onClick={() => {
                  if (isAnimating || i === activeSlideIdx) return;
                  const diff = i - activeSlideIdx;
                  transition(diff > 0 ? 'next' : 'prev');
                }}
                aria-label={`Pindah ke slide ${item.name}`}
              />
            ))}
          </div>

          <button
            ref={nextArrowRef}
            className="karya-nav-arrow karya-next-arrow"
            aria-label="Slide berikutnya"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="karya-footer" aria-hidden="true">
          <span className="icon">⇄</span>
          <span>Geser atau klik kartu</span>
        </div>
      </div>

      {/* Project Detail Modal */}
      {modalProject && (
        <div
          ref={modalRef}
          className="karya-modal-backdrop"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="karya-modal-title"
        >
          <div
            className="karya-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="karya-modal-header">
              <div className="karya-modal-title-wrap">
                <span className="karya-modal-category">
                  {modalProject.category}
                </span>
                <h3 id="karya-modal-title" className="karya-modal-title">
                  {modalProject.name}
                </h3>
              </div>
              <button
                type="button"
                className="karya-modal-close"
                onClick={closeModal}
                aria-label="Tutup modal"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="karya-modal-body">
              {/* Featured / Active Image Display */}
              <div className="karya-modal-hero-img-wrap">
                <img
                  src={modalProject.detail?.gallery?.[galleryIdx]?.src || modalProject.img}
                  alt={modalProject.detail?.gallery?.[galleryIdx]?.caption || modalProject.name}
                  className="karya-modal-hero-img"
                  onClick={() => {
                    const gal = modalProject.detail?.gallery;
                    if (gal && gal[galleryIdx]) {
                      setPhotoLightbox({ ...gal[galleryIdx], index: galleryIdx });
                    } else {
                      setPhotoLightbox({ src: modalProject.img, caption: modalProject.name, index: 0 });
                    }
                  }}
                  title="Klik untuk memperbesar gambar"
                />
                <span className="karya-modal-img-caption">
                  {modalProject.detail?.gallery?.[galleryIdx]?.caption || modalProject.name}
                  <span className="karya-modal-zoom-hint">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg> Perbesar
                  </span>
                </span>
              </div>

              {/* Gallery Thumbnails */}
              {modalProject.detail?.gallery && modalProject.detail.gallery.length > 1 && (
                <div className="karya-modal-gallery-thumbs">
                  {modalProject.detail.gallery.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`karya-modal-thumb-btn ${idx === galleryIdx ? 'active' : ''}`}
                      onClick={() => setGalleryIdx(idx)}
                      aria-label={`Lihat gambar ${idx + 1}`}
                    >
                      <img src={item.src} alt={item.caption} />
                    </button>
                  ))}
                </div>
              )}

              {/* Description */}
              <div className="karya-modal-desc-wrap">
                <h4 className="karya-modal-subtitle">Tentang Proyek</h4>
                <p className="karya-modal-desc">
                  {modalProject.detail?.fullDescription || modalProject.description}
                </p>
              </div>

              {/* Highlights */}
              {modalProject.detail?.highlights && modalProject.detail.highlights.length > 0 && (
                <div className="karya-modal-highlights-wrap">
                  <h4 className="karya-modal-subtitle">Fitur & Keunggulan</h4>
                  <ul className="karya-modal-highlights-list">
                    {modalProject.detail.highlights.map((h, i) => (
                      <li key={i} className="karya-modal-highlight-item">
                        <svg className="karya-modal-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Tags */}
              {modalProject.tags && modalProject.tags.length > 0 && (
                <div className="karya-modal-tags-wrap">
                  <h4 className="karya-modal-subtitle">Teknologi yang Digunakan</h4>
                  <div className="karya-modal-tags">
                    {modalProject.tags.map((tag) => (
                      <span key={tag} className="karya-modal-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="karya-modal-footer">
              <button
                type="button"
                className="karya-modal-btn-cancel"
                onClick={closeModal}
              >
                Tutup
              </button>
              {modalProject.link && modalProject.link !== '#' && (
                <a
                  href={modalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="karya-modal-btn-visit"
                >
                  <span>Kunjungi Situs</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Photo Lightbox */}
      {photoLightbox && (
        <div
          className="karya-lightbox-overlay"
          onClick={() => setPhotoLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="karya-lightbox-close"
            onClick={() => setPhotoLightbox(null)}
            aria-label="Tutup preview layar penuh"
          >
            ✕
          </button>

          {modalProject?.detail?.gallery && modalProject.detail.gallery.length > 1 && (
            <>
              <button
                type="button"
                className="karya-lightbox-nav prev"
                onClick={(e) => {
                  e.stopPropagation();
                  const len = modalProject.detail.gallery.length;
                  const nextIdx = (photoLightbox.index - 1 + len) % len;
                  setPhotoLightbox({ ...modalProject.detail.gallery[nextIdx], index: nextIdx });
                }}
                aria-label="Foto sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                className="karya-lightbox-nav next"
                onClick={(e) => {
                  e.stopPropagation();
                  const len = modalProject.detail.gallery.length;
                  const nextIdx = (photoLightbox.index + 1) % len;
                  setPhotoLightbox({ ...modalProject.detail.gallery[nextIdx], index: nextIdx });
                }}
                aria-label="Foto berikutnya"
              >
                ›
              </button>
            </>
          )}

          <div className="karya-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={photoLightbox.src} alt={photoLightbox.caption || 'Preview'} />
            {photoLightbox.caption && (
              <p className="karya-lightbox-caption">{photoLightbox.caption}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}