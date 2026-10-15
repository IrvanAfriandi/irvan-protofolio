import { useEffect, useRef, useCallback, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SLIDE_DATA = [
  {
    "name": "Edukasi Gizi Anak SD",
    "img": "/img/game-edukasi-gizi-makanan.webp",
    "link": "https://github.com/IrvanAfriandi/game-edukasi-gizi-makanan",
    "category": "EdTech / Edukasi",
    "description": "Media belajar gizi interaktif dengan materi dan permainan susun menu untuk siswa sekolah dasar.",
    "tags": [
      "Laravel",
      "PHP",
      "MySQL"
    ],
    "detail": {
      "fullDescription": "Aplikasi web ini menyajikan materi edukasi gizi dan permainan susun menu untuk siswa sekolah dasar. Pengguna dapat mempelajari delapan topik gizi, memilih empat makanan, lalu melihat skor permainan beserta penjelasan keragaman kategori. Project ini dibangun menggunakan Laravel, PHP, Blade, JavaScript, dan MySQL.",
      "highlights": [
        "Delapan materi edukasi dengan manfaat zat gizi, aktivitas, dan contoh makanan.",
        "Halaman detail materi dilengkapi pengingat keamanan dalam memilih dan menyiapkan makanan.",
        "Permainan memilih empat makanan berbeda melalui dialog berdasarkan kategori.",
        "Piring visual menampilkan pilihan makanan sebelum hasil dihitung.",
        "Skor maksimal 100 berdasarkan poin pilihan dan keragaman kategori.",
        "Halaman hasil menjelaskan skor, bonus keragaman, dan makanan yang dipilih."
      ],
      "technologies": [
        "PHP 8.1+",
        "Laravel 10",
        "Laravel Sanctum 3",
        "Laravel Tinker 2",
        "Blade",
        "JavaScript",
        "Axios",
        "HTML5",
        "CSS3",
        "Bootstrap 5",
        "jQuery",
        "SweetAlert2",
        "Owl Carousel",
        "WOW.js",
        "Easing",
        "Waypoints",
        "CounterUp",
        "Lightbox",
        "Font Awesome",
        "Bootstrap Icons",
        "Google Fonts (DM Sans, Inter)",
        "Guzzle 7",
        "MySQL",
        "MariaDB",
        "Composer",
        "Node.js",
        "Laravel Vite Plugin",
        "Vite 5",
        "npm",
        "PHPUnit"
      ],
      "images": [
        "/img/game-edukasi-gizi-makanan.webp"
      ],
      "gallery": [
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/01-beranda-hero.webp",
          "caption": "Hero edukasi gizi untuk siswa sekolah dasar."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/02-pilihan-program.webp",
          "caption": "Pintu masuk dari beranda menuju edukasi dan permainan."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/03-katalog-delapan-topik.webp",
          "caption": "Katalog delapan topik edukasi gizi."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/04-katalog-topik-lanjutan.webp",
          "caption": "Materi lanjutan: serat, zat besi, lemak sehat, dan vitamin D."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/05-kartu-edukasi-hover.webp",
          "caption": "Kartu materi edukasi saat diarahkan kursor."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/06-materi-protein.webp",
          "caption": "Materi protein, fungsi, dan aktivitas belajar singkat."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/07-contoh-makanan-protein.webp",
          "caption": "Galeri contoh makanan sumber protein beserta tipsnya."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/08-modal-pilih-makanan.webp",
          "caption": "Dialog pilihan makanan yang dikelompokkan berdasarkan kategori."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/09-validasi-pilihan.webp",
          "caption": "Validasi saat menu belum memiliki empat pilihan."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/10-menu-empat-makanan.webp",
          "caption": "Piring permainan setelah empat pilihan dari tiga kategori."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/11-hasil-skor-100.webp",
          "caption": "Hasil skor 100 dengan bonus keragaman penuh dan rincian poin."
        },
        {
          "src": "/img/projects/game-edukasi-gizi-makanan/12-hasil-skor-70.webp",
          "caption": "Hasil skor 70 dengan pilihan dari dua kategori gizi."
        }
      ]
    }
  },
  {
    "name": "Aplikasi Data Karyawan",
    "img": "/img/sim-karyawan-hanjuan-engineering.webp",
    "link": "https://github.com/IrvanAfriandi/SIM-Karyawan-hanjuan-engineering",
    "category": "Kepegawaian",
    "description": "Aplikasi pengelolaan karyawan, absensi, dan pengajuan cuti dengan akses admin dan karyawan.",
    "tags": [
      "Laravel",
      "PHP",
      "MySQL"
    ],
    "detail": {
      "fullDescription": "Aplikasi Data Karyawan membantu admin dan karyawan mengelola administrasi SDM, absensi, serta pengajuan cuti. Aplikasi dibangun dengan Laravel 10 dan antarmuka Argon Dashboard; akses fitur dibedakan menjadi role admin dan karyawan.",
      "highlights": [
        "Dashboard ringkas untuk admin dan karyawan.",
        "Pengelolaan akun dengan role admin dan karyawan.",
        "Pengelolaan data karyawan, divisi, jabatan, dan jenis cuti.",
        "Pencatatan absensi harian karyawan.",
        "Pengajuan cuti serta alur persetujuan admin.",
        "Unggah foto pada data karyawan."
      ],
      "technologies": [
        "Laravel 10",
        "PHP 8.1+",
        "MySQL (default konfigurasi)",
        "SQLite (basis data demo screenshot)",
        "Argon Dashboard 2.0.4",
        "Bootstrap 5",
        "Chart.js",
        "SweetAlert2",
        "Laravel Sanctum",
        "Vite"
      ],
      "images": [
        "/img/sim-karyawan-hanjuan-engineering.webp"
      ],
      "gallery": [
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/01-dashboard-admin.webp",
          "caption": "Dashboard admin dengan ringkasan dan aktivitas karyawan."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/02-manajemen-pengguna.webp",
          "caption": "Daftar akun pengguna beserta role akses."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/03-form-edit-foto-karyawan-bagian-1.webp",
          "caption": "Form edit karyawan terisi dengan foto dummy terpilih (bagian 1 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/04-form-edit-foto-karyawan-bagian-2.webp",
          "caption": "Form edit karyawan terisi dengan foto dummy terpilih (bagian 2 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/05-foto-karyawan-berhasil-diunggah-bagian-1.webp",
          "caption": "Foto dummy berhasil disimpan pada data karyawan (bagian 1 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/06-foto-karyawan-berhasil-diunggah-bagian-2.webp",
          "caption": "Foto dummy berhasil disimpan pada data karyawan (bagian 2 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/07-konfirmasi-persetujuan-cuti-bagian-1.webp",
          "caption": "Konfirmasi admin sebelum menyetujui pengajuan cuti (bagian 1 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/08-konfirmasi-persetujuan-cuti-bagian-2.webp",
          "caption": "Konfirmasi admin sebelum menyetujui pengajuan cuti (bagian 2 dari 2)."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/09-dashboard-karyawan.webp",
          "caption": "Dashboard karyawan dengan ringkasan data pribadi."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/10-absensi-harian-berhasil.webp",
          "caption": "Status absensi harian setelah karyawan mencatat kehadiran."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/11-form-pengajuan-cuti.webp",
          "caption": "Form pengajuan cuti karyawan terisi dengan data contoh."
        },
        {
          "src": "/img/projects/sim-karyawan-hanjuan-engineering/12-login.webp",
          "caption": "Form login aplikasi untuk autentikasi pengguna."
        }
      ]
    }
  },
  {
    "name": "HyperCare",
    "img": "/img/sistem-diagnosis-gangguan-kehamilan.webp",
    "link": "https://github.com/IrvanAfriandi/sistem-pakar-diagnosis-penyakit-hipertensi-pada-ibu-hamil",
    "category": "Sistem Pakar Kesehatan",
    "description": "Sistem pakar untuk membantu diagnosis hipertensi pada ibu hamil.",
    "tags": [
      "Laravel",
      "PHP",
      "Certainty Factor"
    ],
    "detail": {
      "fullDescription": "HyperCare adalah aplikasi sistem pakar untuk membantu proses diagnosis penyakit terkait hipertensi pada ibu hamil. Aplikasi ini menyediakan alur konsultasi publik serta panel admin dan petugas untuk mengelola data pasien, penyakit, gejala, dan basis pengetahuan. Project dibangun dengan Laravel 10, PHP, dan database relasional.",
      "highlights": [
        "Dashboard statistik konsultasi dan data kesehatan",
        "Manajemen pasien, pengguna, penyakit, dan gejala",
        "Basis pengetahuan dengan nilai Certainty Factor",
        "Alur konsultasi publik berbasis tingkat gejala",
        "Hasil diagnosis dengan tingkat keyakinan",
        "Riwayat konsultasi dan ekspor laporan"
      ],
      "technologies": [
        "Laravel 10",
        "PHP 8.1+",
        "MySQL",
        "SQLite untuk database screenshot sementara",
        "Blade Templates",
        "Bootstrap 5",
        "Font Awesome",
        "SweetAlert2",
        "Vite",
        "Laravel Sanctum"
      ],
      "images": [
        "/img/sistem-diagnosis-gangguan-kehamilan.webp"
      ],
      "gallery": [
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/01-dashboard-admin.webp",
          "caption": "Dashboard admin menampilkan statistik pasien, konsultasi, penyakit, dan gejala."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/02-data-pasien-admin.webp",
          "caption": "Daftar pasien dummy dengan pencarian nama aktif."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/03-form-pasien-admin.webp",
          "caption": "Form tambah pasien terisi data contoh di dalam modal."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/04-manajemen-pengguna-admin.webp",
          "caption": "Form manajemen pengguna untuk menetapkan role admin atau petugas."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/05-data-penyakit-admin.webp",
          "caption": "Daftar penyakit dan form tambah kondisi kesehatan contoh."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/06-data-gejala-admin.webp",
          "caption": "Daftar gejala dengan pencarian aktif."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/07-basis-pengetahuan-admin.webp",
          "caption": "Basis pengetahuan Certainty Factor dengan filter dan form aturan."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/08-riwayat-konsultasi-admin.webp",
          "caption": "Riwayat konsultasi dengan modal detail dan opsi laporan."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/09-dashboard-petugas.webp",
          "caption": "Dashboard yang dapat diakses oleh role petugas."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/10-login.webp",
          "caption": "Halaman login untuk autentikasi pengguna aplikasi."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/11-form-diagnosis-publik.webp",
          "caption": "Form diagnosis dengan gejala dan nilai keyakinan terisi."
        },
        {
          "src": "/img/projects/sistem-diagnosis-gangguan-kehamilan/12-hasil-diagnosis-publik.webp",
          "caption": "Hasil diagnosis menampilkan penyakit utama dan tingkat kepercayaan."
        }
      ]
    }
  },
  {
    "name": "Sistem Informasi Logistik KPU Kabupaten Cirebon",
    "img": "/img/sistem-logistik-kpu-kabupaten-cirebon.webp",
    "link": "https://github.com/IrvanAfriandi/sistem-logistik-kpu-kabupaten-cirebon",
    "category": "Logistik Pemilu",
    "description": "Pengelolaan logistik pemilu, dari surat suara dan perlengkapan hingga packing dan distribusi.",
    "tags": [
      "Laravel",
      "MySQL",
      "Bootstrap 5"
    ],
    "detail": {
      "fullDescription": "Aplikasi ini mendukung pengelolaan logistik pemilu untuk operator Admin dan PPK, termasuk pencatatan surat suara, perlengkapan, serta proses sortir, packing, dan distribusi. Proyek dibangun dengan Laravel 10 dan Blade, dengan antarmuka berbasis Mazer dan Bootstrap.",
      "highlights": [
        "Dashboard administrasi sebagai pintu masuk modul logistik.",
        "Pencatatan box surat suara, jenis, dan statusnya.",
        "Manajemen akun PPK dan pengisian profil dengan foto.",
        "Halaman kerja PPK untuk memantau progres sortir-lipat."
      ],
      "technologies": [
        "Laravel 10",
        "PHP 8.1+",
        "MySQL (default konfigurasi)",
        "SQLite (database sementara screenshot)",
        "Blade",
        "Bootstrap 5 (antarmuka Mazer)",
        "JavaScript",
        "Vite",
        "Laravel Sanctum",
        "barryvdh/laravel-dompdf",
        "Guzzle"
      ],
      "images": [
        "/img/sistem-logistik-kpu-kabupaten-cirebon.webp"
      ],
      "gallery": [
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/01-dashboard.webp",
          "caption": "Dashboard utama Admin untuk navigasi pengelolaan logistik."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/02-dashboard-lanjutan.webp",
          "caption": "Dashboard utama Admin untuk navigasi pengelolaan logistik. (bagian lanjutan)."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/03-login.webp",
          "caption": "Form masuk untuk Admin dan PPK."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/04-daftar-box-surat-suara.webp",
          "caption": "Daftar box surat suara dengan data uji dan pencarian aktif."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/05-daftar-box-surat-suara-lanjutan.webp",
          "caption": "Daftar box surat suara dengan data uji dan pencarian aktif. (bagian lanjutan)."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/06-pemantauan-sorlip-ppk.webp",
          "caption": "Halaman PPK untuk memantau progres sortir-lipat petugas."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/07-pemantauan-sorlip-ppk-lanjutan.webp",
          "caption": "Halaman PPK untuk memantau progres sortir-lipat petugas. (bagian lanjutan)."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/08-pilih-foto-profil.webp",
          "caption": "Form akun PPK berisi data contoh dan foto dummy yang telah dipilih."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/09-pilih-foto-profil-lanjutan.webp",
          "caption": "Form akun PPK berisi data contoh dan foto dummy yang telah dipilih. (bagian lanjutan)."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/10-unggah-foto-berhasil.webp",
          "caption": "Konfirmasi setelah foto dummy akun PPK berhasil diunggah."
        },
        {
          "src": "/img/projects/sistem-logistik-kpu-kabupaten-cirebon/11-unggah-foto-berhasil-lanjutan.webp",
          "caption": "Konfirmasi setelah foto dummy akun PPK berhasil diunggah. (bagian lanjutan)."
        }
      ]
    }
  },
  {
    "name": "Sistem Penilaian Isian Singkat Otomatis",
    "img": "/img/sistem-penilaian-otomatis.webp",
    "link": "https://github.com/IrvanAfriandi/sistem-penilaian-otomatis-isian-singkat",
    "category": "Pendidikan",
    "description": "Kelola ujian dan nilai jawaban isian singkat dengan bantuan AI.",
    "tags": [
      "React",
      "Flask",
      "AI"
    ],
    "detail": {
      "fullDescription": "Aplikasi untuk mengelola kelas, mata pelajaran, siswa, ujian, peserta, dan penilaian jawaban isian singkat. Frontend dibangun dengan React dan backend Flask yang terhubung ke database MySQL serta model computer vision dan NLP.",
      "highlights": [
        "Dashboard statistik kelas, siswa, mata pelajaran, dan ujian",
        "Pengelolaan kelas, mata pelajaran, dan data siswa dengan pencarian",
        "Pembuatan ujian, pengelolaan soal, peserta, dan progres pengerjaan",
        "Upload jawaban dan ekstraksi teks tulisan tangan berbasis model AI",
        "Review jawaban, penilaian otomatis, dan hasil nilai per soal",
        "Ekspor lembar soal ke PDF"
      ],
      "technologies": [
        "Python",
        "Flask 3.1",
        "Flask-SQLAlchemy",
        "Flask-JWT-Extended",
        "MySQL",
        "PyMySQL",
        "React 18",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Radix UI",
        "Recharts",
        "PyTorch",
        "Ultralytics YOLOv8",
        "CRNN",
        "Transformers",
        "Sentence Transformers",
        "jsPDF"
      ],
      "images": [
        "/img/sistem-penilaian-otomatis.webp"
      ],
      "gallery": [
        {
          "src": "/img/projects/sistem-penilaian-otomatis/01-dashboard.webp",
          "caption": "Dashboard ringkas dengan statistik kelas, siswa, mata pelajaran, dan ujian."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/02-daftar-kelas.webp",
          "caption": "Daftar kelas dengan jumlah siswa dan aksi pengelolaan."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/03-pencarian-mata-pelajaran.webp",
          "caption": "Daftar mata pelajaran dengan pencarian aktif."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/04-daftar-siswa.webp",
          "caption": "Daftar siswa dummy dengan pencarian aktif."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/05-daftar-ujian.webp",
          "caption": "Daftar ujian dengan ringkasan peserta dan progres."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/06-detail-ujian.webp",
          "caption": "Detail ujian, progres pengumpulan, dan daftar peserta."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/07-edit-soal.webp",
          "caption": "Form pengelolaan soal ujian dengan data contoh."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/08-detail-jawaban-peserta.webp",
          "caption": "Detail jawaban dan penilaian peserta ujian."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/09-upload-jawaban.webp",
          "caption": "Form upload jawaban dengan file contoh dummy yang sudah dipilih."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/10-penilaian-otomatis.webp",
          "caption": "Alur review jawaban dan penilaian otomatis berbasis AI."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/11-hasil-penilaian.webp",
          "caption": "Hasil penilaian per soal dengan nilai dummy."
        },
        {
          "src": "/img/projects/sistem-penilaian-otomatis/12-login.webp",
          "caption": "Halaman login aplikasi."
        }
      ]
    }
  }
];

const TOTAL = SLIDE_DATA.length;
let activeIdx = 1;
let isAnimating = false;
let autoSlideInterval = null;
let savedScrollY = 0;

const isGithub = (link) => typeof link === 'string' && link.includes('github.com');

export default function Karya() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const prevArrowRef = useRef(null);
  const nextArrowRef = useRef(null);
  const modalRef = useRef(null);
  const previewRef = useRef(null);
  const autoSlideResumeTimer = useRef(null);

  const [modalProject, setModalProject] = useState(null);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [photoLightbox, setPhotoLightbox] = useState(null); // { src, caption, index }
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const openModal = useCallback((project) => {
    // Save scroll position first
    savedScrollY = window.scrollY;
    setModalProject(project);
    setGalleryIdx(0);
    clearInterval(autoSlideInterval);
    if (autoSlideResumeTimer.current) clearTimeout(autoSlideResumeTimer.current);
    // Freeze background: pin body with position:fixed
    document.body.style.position = 'fixed';
    document.body.style.top = `-${savedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
    document.body.classList.add('karya-modal-open');
    // Hide navbar when modal is open - use inline styles to ensure it's hidden
    const navbar = document.querySelector('.navbar-shell');
    if (navbar) {
      navbar.classList.remove('nav-visible');
      navbar.classList.add('nav-hidden');
      navbar.style.visibility = 'hidden';
      navbar.style.opacity = '0';
      navbar.style.pointerEvents = 'none';
    }
  }, []);

  const closeModal = useCallback(() => {
    setModalProject(null);
    setPhotoLightbox(null);
    // Restore exact scroll position
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.body.style.height = '';
    document.body.classList.remove('karya-modal-open');
    // Show navbar when modal is closed - remove inline styles
    const navbar = document.querySelector('.navbar-shell');
    if (navbar) {
      navbar.classList.remove('nav-hidden');
      navbar.classList.add('nav-visible');
      navbar.style.visibility = '';
      navbar.style.opacity = '';
      navbar.style.pointerEvents = '';
    }
    // Restore scroll position after styles are restored
    requestAnimationFrame(() => {
      window.scrollTo(0, savedScrollY);
    });
    scheduleAutoSlideResume();
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
            <a class="karya-card-link-badge" href="${content.link}" target="_blank" rel="noopener noreferrer" aria-label="${isGithub(content.link) ? `Buka repository GitHub ${content.name}` : `Kunjungi ${content.name}`}">
              <span>${isGithub(content.link) ? 'GitHub' : 'Visit'}</span>
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
          linkElem.setAttribute('aria-label', isGithub(newContent.link) ? `Buka repository GitHub ${newContent.name}` : `Kunjungi ${newContent.name}`);
          const linkLabel = linkElem.querySelector('span');
          if (linkLabel) linkLabel.innerText = isGithub(newContent.link) ? 'GitHub' : 'Visit';
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

  const scheduleAutoSlideResume = () => {
    if (autoSlideResumeTimer.current) clearTimeout(autoSlideResumeTimer.current);
    autoSlideResumeTimer.current = setTimeout(startAutoSlide, 1000);
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
  };

  useEffect(() => {
    // Intersection Observer for scroll-triggered entrance animations
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    };

    let hasAnimated = false;

    const triggerEntrance = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      // Animate header elements with stagger
      const header = sectionRef.current?.querySelector('.karya-section-header');
      if (header) {
        gsap.fromTo(header.querySelectorAll('.section-label, .section-title, .section-subtitle'),
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 0.1
          }
        );
      }

      // Animate slider with elegant fade
      const slider = sectionRef.current?.querySelector('.karya-slider');
      if (slider) {
        gsap.fromTo(slider,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1.1,
            ease: 'power3.out',
            delay: 0.35
          }
        );
      }

      // Animate controls
      const controls = sectionRef.current?.querySelector('.karya-bottom-controls');
      if (controls) {
        gsap.fromTo(controls,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.7 }
        );
      }
    };

    const entranceObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerEntrance();
        }
      });
    }, observerOptions);

    // Check if section is already visible on mount
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      if (isVisible) {
        triggerEntrance();
      } else {
        entranceObserver.observe(sectionRef.current);
      }
    }

    // 3D Tilt Effect for Active Card
    const handleMouseMove = (e) => {
      const activeCard = sliderRef.current?.querySelector('.karya-slide-container.active');
      if (!activeCard) return;

      const rect = activeCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 40;
      const rotateY = (centerX - x) / 40;

      gsap.to(activeCard, {
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      const activeCard = sliderRef.current?.querySelector('.karya-slide-container.active');
      if (activeCard) {
        gsap.to(activeCard, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power3.out'
        });
      }
    };

    const sliderNode = sliderRef.current;
    sliderNode?.addEventListener('mousemove', handleMouseMove);
    sliderNode?.addEventListener('mouseleave', handleMouseLeave);

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
      entranceObserver.disconnect();
      clearInterval(autoSlideInterval);
      sliderNode?.removeEventListener('click', handleClickSlide);
      sliderNode?.removeEventListener('touchstart', handleTouchStart);
      sliderNode?.removeEventListener('touchend', handleTouchEnd);
      sliderNode?.removeEventListener('mousemove', handleMouseMove);
      sliderNode?.removeEventListener('mouseleave', handleMouseLeave);
      prevArrowNode?.removeEventListener('click', handlePrevArrow);
      nextArrowNode?.removeEventListener('click', handleNextArrow);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [getIndex, openModal, closeModal]);

  return (
    <section id="project" ref={sectionRef} className="karya-section relative py-16 sm:py-24">
      {/* Animated Background Elements */}
      <div className="karya-bg-orb karya-bg-orb-1" aria-hidden="true" />
      <div className="karya-bg-orb karya-bg-orb-2" aria-hidden="true" />
      <div className="karya-bg-orb karya-bg-orb-3" aria-hidden="true" />
      <div className="karya-bg-grid" aria-hidden="true" />

      <style>{`
        /* Prevent background scroll when modal is open */
        body.karya-modal-open {
          overflow: hidden !important;
          position: fixed !important;
          width: 100% !important;
          touch-action: none;
        }

        /* Hide navbar when modal is open */
        body.karya-modal-open ~ * .navbar-shell,
        body.karya-modal-open .navbar-shell {
          display: none !important;
          visibility: hidden !important;
        }

        /* Ensure modal backdrop is the only scrollable area */
        .karya-modal-backdrop {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          overflow-y: auto !important;
          overscroll-behavior: contain;
        }

        /* ==================== ENTRANCE ANIMATION STYLES ==================== */
        .karya-slider {
          opacity: 0;
          transform: translateY(50px) scale(0.97);
        }

        /* Animated Background Orbs */
        .karya-bg-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        .karya-bg-orb-1 {
          top: 10%;
          left: -5%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.12), transparent 70%);
          animation: karyaOrbFloat1 15s ease-in-out infinite;
        }
        .karya-bg-orb-2 {
          bottom: 20%;
          right: -8%;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.08), transparent 70%);
          animation: karyaOrbFloat2 18s ease-in-out infinite reverse;
        }
        .karya-bg-orb-3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(220, 38, 38, 0.06), transparent 60%);
          animation: karyaOrbPulse 12s ease-in-out infinite;
        }

        @keyframes karyaOrbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes karyaOrbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-40px, 20px) scale(1.08); }
          70% { transform: translate(20px, -30px) scale(0.92); }
        }
        @keyframes karyaOrbPulse {
          0%, 100% { opacity: 0.6; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.15); }
        }

        /* Subtle Grid Pattern */
        .karya-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 0;
          pointer-events: none;
        }

        .karya-slider {
          position: relative;
          width: 100%;
          max-width: 100%;
          min-height: 660px;
          height: clamp(660px, 82svh, 780px);
          overflow: hidden;
          background: linear-gradient(180deg, #f7f4ee 0%, #faf8f4 50%, #f5f2ec 100%);
          font-family: 'Manrope', sans-serif;
          margin: 0;
          padding: 0;
          z-index: 1;
        }

        /* Unified Header */
        .karya-section-header {
          text-align: center;
          max-width: 55rem;
          margin: 0 auto 2rem;
          position: relative;
          z-index: 2;
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
          will-change: transform;
          transform-style: preserve-3d;
          backface-visibility: hidden;
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
          overflow: hidden;
        }
        .karya-slide-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          filter: brightness(0.9) contrast(1.03);
          will-change: transform;
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
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-slide-container:hover .karya-card-category {
          background: rgba(220, 38, 38, 0.75);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.4);
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-slide-container:hover .karya-card-tag {
          background: rgba(255, 255, 255, 0.22);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .karya-slide-container:hover .karya-card-tag:nth-child(1) { transition-delay: 0.02s; }
        .karya-slide-container:hover .karya-card-tag:nth-child(2) { transition-delay: 0.05s; }
        .karya-slide-container:hover .karya-card-tag:nth-child(3) { transition-delay: 0.08s; }

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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Manrope', sans-serif;
        }
        .karya-card-detail-btn:hover {
          background: rgba(255, 255, 255, 0.28);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        .karya-card-detail-btn:active {
          transform: translateY(0);
        }
        .karya-card-detail-btn svg {
          transition: transform 0.3s ease;
        }
        .karya-card-detail-btn:hover svg {
          transform: scale(1.15);
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-card-link-badge:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(220, 38, 38, 0.4);
        }
        .karya-card-link-badge:active {
          transform: translateY(0);
        }
        .karya-card-link-badge svg {
          transition: transform 0.3s ease;
        }
        .karya-card-link-badge:hover svg {
          transform: translate(2px, -2px);
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
          opacity: 0;
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
          box-shadow: 0 6px 16px rgba(220, 38, 38, 0.35), 0 0 20px rgba(220, 38, 38, 0.2);
        }
        .karya-nav-arrow:hover svg {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
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
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .karya-control-dot:hover {
          background: rgba(220, 38, 38, 0.6);
          transform: scale(1.25);
        }
        .karya-control-dot.active {
          width: 22px;
          height: 8px;
          border-radius: 6px;
          background: linear-gradient(90deg, #dc2626, #ef4444);
          box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4);
          animation: karyaDotPulse 2s ease-in-out infinite;
        }

        @keyframes karyaDotPulse {
          0%, 100% { box-shadow: 0 2px 8px rgba(220, 38, 38, 0.4); }
          50% { box-shadow: 0 2px 16px rgba(220, 38, 38, 0.6); }
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
            min-height: 420px;
            height: clamp(420px, 70svh, 580px);
          }
          .karya-slide-container {
            width: min(88%, 380px) !important;
            height: clamp(260px, 45svh, 340px) !important;
            top: 48% !important;
            border-radius: 12px;
          }
          .karya-slide-container.active {
            width: min(88%, 380px) !important;
            height: clamp(260px, 45svh, 340px) !important;
            top: 48% !important;
          }
          .karya-slide-container.prev,
          .karya-slide-container.next {
            display: none !important;
          }
          .karya-card-description {
            -webkit-line-clamp: 2;
            font-size: 0.68rem;
          }
          .karya-card-bottom-info {
            bottom: 0.8rem;
            left: 1rem;
            right: 1rem;
            gap: 0.4rem;
          }
          .karya-card-tags {
            gap: 0.25rem;
          }
          .karya-card-tag {
            font-size: 0.58rem;
            padding: 0.15rem 0.4rem;
          }
          .karya-card-actions {
            gap: 0.3rem;
          }
          .karya-card-detail-btn,
          .karya-card-link-badge {
            padding: 0.3rem 0.6rem;
            font-size: 0.6rem;
          }
          .karya-card-detail-btn svg,
          .karya-card-link-badge svg {
            width: 10px;
            height: 10px;
          }
          .karya-card-category {
            font-size: 0.6rem;
            padding: 0.25rem 0.6rem;
          }
          .karya-card-top-info {
            top: 0.8rem;
            left: 0.8rem;
          }
          .karya-bottom-controls {
            bottom: 0.8rem;
            padding: 0.25rem 0.4rem;
            gap: 0.5rem;
          }
          .karya-nav-arrow {
            width: 32px;
            height: 32px;
          }
          .karya-nav-arrow svg {
            width: 14px;
            height: 14px;
          }
          .karya-control-dot {
            width: 6px;
            height: 6px;
          }
          .karya-control-dot.active {
            width: 16px;
            height: 6px;
          }
          .karya-bg-orb {
            display: none;
          }
          .karya-bg-grid {
            opacity: 0.5;
          }
          .karya-footer {
            display: none;
          }
        }

        /* Mobile performance - disable heavy animations */
        @media (prefers-reduced-motion: reduce) {
          .karya-bg-orb,
          .karya-control-dot.active,
          @keyframes karyaOrbFloat1,
          @keyframes karyaOrbFloat2,
          @keyframes karyaOrbPulse {
            animation: none !important;
          }
        }

        /* MODAL STYLES */
        .karya-modal-backdrop {
          position: fixed !important;
          inset: 0;
          z-index: 10060 !important;
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

        /* Hide scrollbar but keep functionality */
        .karya-modal-backdrop::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .karya-modal-backdrop {
          scrollbar-width: none;
          -ms-overflow-style: none;
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

        /* Hide scrollbar in modal dialog */
        .karya-modal-dialog::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .karya-modal-dialog {
          scrollbar-width: none;
          -ms-overflow-style: none;
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-modal-close:hover {
          background: rgba(220, 38, 38, 0.25);
          border-color: rgba(220, 38, 38, 0.5);
          color: #ffffff;
          transform: rotate(90deg) scale(1.05);
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
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-modal-hero-img:hover {
          transform: scale(1.03);
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .karya-modal-thumb-btn.active,
        .karya-modal-thumb-btn:hover {
          opacity: 1;
          border-color: #dc2626;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }
        .karya-lightbox-close:hover {
          background: #dc2626;
          border-color: #ef4444;
          transform: scale(1.1) rotate(90deg);
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
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 10;
        }
        .karya-lightbox-nav:hover {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border-color: rgba(220, 38, 38, 0.5);
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.4);
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
          My <span>Projects</span>
        </h2>
      </div>

      {/* Main Slider Area */}
      <div ref={sliderRef} className="karya-slider" role="region" aria-label="Project Showcase Slider">
        <div className="karya-ambient-glow" aria-hidden="true" />

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
                      <img src={item.src} alt={item.caption} loading="lazy" decoding="async" />
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
              {(modalProject.detail?.technologies?.length ? modalProject.detail.technologies : modalProject.tags)?.length > 0 && (
                <div className="karya-modal-tags-wrap">
                  <h4 className="karya-modal-subtitle">Teknologi yang Digunakan</h4>
                  <div className="karya-modal-tags">
                    {(modalProject.detail?.technologies?.length ? modalProject.detail.technologies : modalProject.tags).map((tag) => (
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
                  <span>{isGithub(modalProject.link) ? 'Lihat di GitHub' : 'Kunjungi Situs'}</span>
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
