export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface EventItem {
  title: string;
  date: string;
  dateISO: string;
  time: string;
  timeEnd: string;
  location: string;
  address: string;
  mapUrl: string;
  mapEmbedUrl?: string;
  dressCode: string;
  notes?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

export interface WeddingData {
  meta: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
    locale: string;
  };
  bride: string;
  groom: string;
  coupleName: string;
  coupleArabic: string;
  weddingDate: string;
  weddingDateISO: string;
  weddingTime: string;
  hijriDate: string;

  opening: {
    title: string;
    arabic: string;
    translation: string;
    subtitle: string;
    instruction: string;
    loadingText: string;
  };

  hero: {
    greeting: string;
    guestTitle: string;
    title: string;
    subtitle: string;
    verse: string;
    verseTranslation: string;
    verseReference: string;
    scrollHint: string;
  };

  brideGroom: {
    sectionTitle: string;
    sectionSubtitle: string;
    bride: {
      name: string;
      fullName: string;
      nickname: string;
      parents: string;
      order: string;
      instagram?: string;
      description: string;
      qualities: string[];
    };
    groom: {
      name: string;
      fullName: string;
      nickname: string;
      parents: string;
      order: string;
      instagram?: string;
      description: string;
      qualities: string[];
    };
    dividerText: string;
  };

  countdown: {
    title: string;
    subtitle: string;
    labels: {
      days: string;
      hours: string;
      minutes: string;
      seconds: string;
    };
    message: string;
  };

  loveStory: {
    title: string;
    subtitle: string;
    intro: string;
    milestones: Milestone[];
  };

  eventDetails: {
    title: string;
    subtitle: string;
    intro: string;
    events: EventItem[];
  };

  gallery: {
    title: string;
    subtitle: string;
    images: GalleryImage[];
  };

  rsvp: {
    title: string;
    subtitle: string;
    intro: string;
    deadline: string;
    deadlinelabel: string;
    waNumber: string;
    waMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    guestsLabel: string;
    attendanceLabel: string;
    attendanceOptions: string[];
    submitText: string;
    successMessage: string;
  };

  gift: {
    title: string;
    subtitle: string;
    intro: string;
    message: string;
    bankName: string;
    bankLogo?: string;
    accountNumber: string;
    accountName: string;
    copyButton: string;
    copiedText: string;
    additionalMethods?: {
      name: string;
      value: string;
    }[];
  };

  wishes: {
    title: string;
    subtitle: string;
    intro: string;
  };

  footer: {
    arabicPrayer: string;
    prayerTranslation: string;
    closing: string;
    credit: string;
    coupleNames: string;
  };

  audio: {
    src: string;
    title: string;
    artist: string;
  };
}

const weddingData: WeddingData = {
  meta: {
    title: "Aisha & Yusuf | Wedding Invitation",
    description:
      "Undangan pernikahan Aisha Rahmah Putri & Yusuf Al-Hakim. Sabtu, 18 Juli 2026. Bertempat di Masjid Agung Al-Mukarram, Bandung.",
    ogImage: "/og-image.jpg",
    url: "https://aisy-yusuf.com",
    locale: "id_ID",
  },

  bride: "Aisha",
  groom: "Yusuf",
  coupleName: "Aisha & Yusuf",
  coupleArabic: "عائشة ويوسف",

  weddingDate: "Sabtu, 18 Juli 2026",
  weddingDateISO: "2026-07-18",
  weddingTime: "09:00",
  hijriDate: "3 Muharram 1448 H",

  opening: {
    title: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "In the Name of Allah, the Most Gracious, the Most Merciful",
    subtitle: "Undangan Pernikahan",
    instruction: "Buka Undangan",
    loadingText: "Memuat...",
  },

  hero: {
    greeting: "Assalamu'alaykum",
    guestTitle: "Untuk Tamu Terhormat",
    title: "Aisha & Yusuf",
    subtitle: "We Are Getting Married",
    verse:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    verseTranslation:
      "And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them, and He placed between you affection and mercy.",
    verseReference: "Q.S. Ar-Rum: 21",
    scrollHint: "Scroll",
  },

  brideGroom: {
    sectionTitle: "Mempelai",
    sectionSubtitle: "Bride & Groom",
    bride: {
      name: "Aisha",
      fullName: "Aisha Rahmah Putri, S.Pd.",
      nickname: "Aisha",
      parents: "Putri dari Bapak Ahmad Fauzi & Ibu Siti Nurjanah",
      order: "Putri Pertama dari Tiga Bersaudara",
      description:
        "Anak pertama dari tiga bersaudara, lulusan Pendidikan Bahasa Arab Universitas Islam Negeri. Wanita yang lembut hatinya, mencintai Al-Qur'an dan senang berbagi kebahagiaan dengan sesama.",
      qualities: [
        "Pencinta Al-Qur'an",
        "Hati yang Lembut",
        "Senang Berbagi",
      ],
    },
    groom: {
      name: "Yusuf",
      fullName: "Yusuf Al-Hakim, S.Kom.",
      nickname: "Yusuf",
      parents: "Putra dari Bapak Muhammad Rizki & Ibu Fatimah Zahra",
      order: "Putra Kedua dari Empat Bersaudara",
      description:
        "Anak kedua dari empat bersaudara, lulusan Teknik Informatika Universitas Gadjah Mada. Pria yang bertanggung jawab, memiliki jiwa pemimpin, dan senang belajar ilmu agama.",
      qualities: [
        "Jiwa Pemimpin",
        "Bertanggung Jawab",
        "Pencari Ilmu",
      ],
    },
    dividerText: "Dan Kami ciptakan kamu berpasang-pasangan",
  },

  countdown: {
    title: "Menuju Hari Bahagia",
    subtitle: "Counting Down",
    labels: {
      days: "Hari",
      hours: "Jam",
      minutes: "Menit",
      seconds: "Detik",
    },
    message: "Insya Allah, kami menanti kehadiran dan doa restu Anda",
  },

  loveStory: {
    title: "Perjalanan Cinta",
    subtitle: "Love Story",
    intro: "Setiap cinta memiliki cerita. Inilah perjalanan kami dalam merajut kasih yang diridhai Allah.",
    milestones: [
      {
        year: "2020",
        title: "First Meeting",
        description:
          "Berawal dari sebuah kajian rutin di masjid kampus, takdir mempertemukan kami dalam sebuah diskusi tentang makna cinta dalam Islam. Pertemuan singkat yang mengawali sebuah perjalanan indah.",
        icon: "meeting",
      },
      {
        year: "2021",
        title: "Ta'aruf",
        description:
          "Setelah setahun saling mengenal melalui kegiatan Islamic campus, kami memutuskan untuk menjalani proses ta'aruf yang diridhai Allah. Sebuah langkah berani yang mengubah hidup kami.",
        icon: "heart",
      },
      {
        year: "2022",
        title: "Khitbah",
        description:
          "Dengan izin Allah dan restu kedua orang tua, keluarga kami bersatu dalam ikatan khitbah yang penuh berkah. Momen yang mengikat hati dua keluarga dalam doa dan harapan.",
        icon: "ring",
      },
      {
        year: "2026",
        title: "Pernikahan",
        description:
          "Dan akhirnya, dengan rendah hati dan penuh syukur, kami akan melangkah ke jenjang pernikahan yang Insya Allah diberkahi. Awal dari sebuah perjalanan suci berdua.",
        icon: "wedding",
      },
    ],
  },

  eventDetails: {
    title: "Informasi Acara",
    subtitle: "Event Details",
    intro: "Dengan hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir memberikan doa restu pada acara pernikahan kami.",
    events: [
      {
        title: "Akad Nikah",
        date: "Sabtu, 18 Juli 2026",
        dateISO: "2026-07-18",
        time: "09.00",
        timeEnd: "11.00",
        location: "Masjid Agung Al-Mukarram",
        address: "Jl. Merdeka No. 123, Bandung, Jawa Barat",
        mapUrl: "https://maps.google.com",
        mapEmbedUrl: "https://maps.google.com/embed?...",
        dressCode: "Formal Putih / Krem",
        notes: "Terbuka untuk umum, mohon datang tepat waktu",
      },
      {
        title: "Resepsi",
        date: "Sabtu, 18 Juli 2026",
        dateISO: "2026-07-18",
        time: "12.00",
        timeEnd: "17.00",
        location: "Gedung Serbaguna Al-Mukarram",
        address: "Jl. Merdeka No. 123, Bandung, Jawa Barat",
        mapUrl: "https://maps.google.com",
        mapEmbedUrl: "https://maps.google.com/embed?...",
        dressCode: "Formal / Busana Muslim",
        notes: "Hanya untuk undangan yang telah menerima kartu fisik",
      },
    ],
  },

  gallery: {
    title: "Galeri",
    subtitle: "Prewedding Gallery",
    images: [
      {
        id: "photo-1",
        src: "/placeholder.svg?text=Photo1",
        alt: "Prewedding photo 1",
        width: 800,
        height: 1000,
        caption: "Indahnya kebersamaan",
      },
      {
        id: "photo-2",
        src: "/placeholder.svg?text=Photo2",
        alt: "Prewedding photo 2",
        width: 800,
        height: 1000,
        caption: "Dalam setiap doa ada nama",
      },
      {
        id: "photo-3",
        src: "/placeholder.svg?text=Photo3",
        alt: "Prewedding photo 3",
        width: 800,
        height: 1000,
        caption: "Cinta yang diridhai",
      },
      {
        id: "photo-4",
        src: "/placeholder.svg?text=Photo4",
        alt: "Prewedding photo 4",
        width: 800,
        height: 1000,
        caption: "Bahagia itu sederhana",
      },
      {
        id: "photo-5",
        src: "/placeholder.svg?text=Photo5",
        alt: "Prewedding photo 5",
        width: 800,
        height: 1000,
        caption: "Bersama selamanya",
      },
      {
        id: "photo-6",
        src: "/placeholder.svg?text=Photo6",
        alt: "Prewedding photo 6",
        width: 800,
        height: 1000,
        caption: "Syukur pada-Mu",
      },
    ],
  },

  rsvp: {
    title: "Konfirmasi Kehadiran",
    subtitle: "RSVP",
    intro: "Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan segala sesuatunya dengan lebih baik.",
    deadline: "1 Juli 2026",
    deadlinelabel: "Konfirmasi sebelum",
    waNumber: "6281234567890",
    waMessage:
      "Assalamu'alaikum, saya %NAME% konfirmasi hadir pada acara pernikahan Aisha & Yusuf. Jumlah tamu: %GUESTS% orang.",
    nameLabel: "Nama Lengkap",
    namePlaceholder: "Masukkan nama lengkap Anda",
    guestsLabel: "Jumlah Tamu",
    attendanceLabel: "Konfirmasi",
    attendanceOptions: ["Hadir", "Tidak Hadir"],
    submitText: "Kirim via WhatsApp",
    successMessage:
      "Terima kasih! Konfirmasi Anda telah dikirim melalui WhatsApp.",
  },

  gift: {
    title: "Digital Gift",
    subtitle: "Wedding Gift",
    intro: "Doa restu dari kalian adalah hadiah terindah bagi kami.",
    message:
      "Bagi yang ingin memberikan tanda kasih dan partisipasi untuk kelancaran acara pernikahan kami, dapat melalui:",
    bankName: "Bank Syariah Indonesia",
    accountNumber: "1234-5678-9012",
    accountName: "Yusuf Al-Hakim",
    copyButton: "Salin Nomor Rekening",
    copiedText: "Tersalin",
  },

  wishes: {
    title: "Doa & Harapan",
    subtitle: "Wishes",
    intro: "Tinggalkan pesan dan doa untuk kebahagiaan kami.",
  },

  footer: {
    arabicPrayer: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
    prayerTranslation:
      "Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan yang menyejukkan hati",
    closing:
      "Merupakan suatu kebahagiaan dan kehormatan yang tak terhingga apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu pada hari bahagia kami.",
    credit: "Wedding Invitation by Aisha & Yusuf",
    coupleNames: "عائشة ويوسف",
  },

  audio: {
    src: "/audio/music.mp3",
    title: "Enti Wbas",
    artist: "Abdul Majeed Abdullah",
  },
};

export default weddingData;
