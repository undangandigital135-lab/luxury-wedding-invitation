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
    title: "Sayyid Hasan & Syarifah Rugayyah | Undangan Pernikahan",
    description:
      "Undangan pernikahan Syarifah Rugayyah binti Almarhum Al Habib Hasan Bin Ja'far Assegaf & Sayyid Hasan bin Alwi Ba'aly. Minggu, 21 Juni 2026. Bertempat di Masjid Nurul Musthofa Center, Cilodong, Depok.",
    ogImage: "/og-image.jpg",
    url: "https://hasan-rugayyah.com",
    locale: "id_ID",
  },

  bride: "Syarifah Rugayyah",
  groom: "Sayyid Hasan",
  coupleName: "Sayyid Hasan & Syarifah Rugayyah",
  coupleArabic: "سيد حسن و شريفة رقية",

  weddingDate: "Minggu, 21 Juni 2026",
  weddingDateISO: "2026-06-21",
  weddingTime: "09:00",
  hijriDate: "5 Dzulhijjah 1447 H",

  opening: {
    title: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    translation: "Dengan nama Allah, Yang Maha Pengasih, Yang Maha Penyayang",
    subtitle: "Undangan Pernikahan",
    instruction: "Buka Undangan",
    loadingText: "Memuat...",
  },

  hero: {
    greeting: "Assalamu'alaikum Warahmatullahi Wabarakatuh",
    guestTitle: "Untuk Tamu Terhormat",
    title: "Hasan & Rugayyah",
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
      name: "Syarifah Rugayyah",
      fullName: "Syarifah Rugayyah binti Almarhum Al Habib Hasan Bin Ja'far Assegaf",
      nickname: "Rugayyah",
      parents: "Putri dari Almarhum Al Habib Hasan Bin Ja'far Assegaf",
      order: "Putri Pertama",
      description:
        "Wanita yang shalihah, memiliki akhlak mulia, dan senantiasa mencintai ilmu agama. Hatinya lembut, penuh kasih sayang, dan selalu menjadi kebanggaan keluarga.",
      qualities: [
        "Shalihah",
        "Akhlak Mulia",
        "Penyayang",
      ],
    },
    groom: {
      name: "Sayyid Hasan",
      fullName: "Sayyid Hasan bin Alwi Ba'aly",
      nickname: "Hasan",
      parents: "Putra dari Habib Alwi Ba'aly",
      order: "Putra Pertama",
      description:
        "Pria yang bertanggung jawab, berjiwa pemimpin, dan memiliki kecintaan yang mendalam terhadap ilmu agama. Sosok yang santun, rendah hati, dan penuh keteladanan.",
      qualities: [
        "Bertanggung Jawab",
        "Pemimpin",
        "Santun",
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
        year: "2021",
        title: "Pertemuan",
        description:
          "Berawal dari sebuah majelis ilmu, takdir mempertemukan kami dalam sebuah silaturahmi keluarga. Pertemuan sederhana yang mengawali sebuah ikatan suci.",
        icon: "meeting",
      },
      {
        year: "2023",
        title: "Ta'aruf",
        description:
          "Dengan bimbingan keluarga, kami menjalani proses ta'aruf yang diridhai Allah. Saling mengenal dalam bingkai syariat, menumbuhkan rasa saling percaya dan menghormati.",
        icon: "heart",
      },
      {
        year: "2024",
        title: "Khitbah",
        description:
          "Dengan izin Allah dan restu kedua keluarga, ikatan khitbah pun tersemat. Harapan dan doa mengiringi langkah kami menuju jenjang pernikahan yang diberkahi.",
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
    intro: "Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra/putri kami. Kehadiran Anda membawa kebahagiaan dan keberkahan bagi kami.",
    events: [
      {
        title: "Akad Nikah",
        date: "Minggu, 21 Juni 2026",
        dateISO: "2026-06-21",
        time: "09.00",
        timeEnd: "11.00",
        location: "Masjid Nurul Musthofa Center",
        address: "Cilodong, Depok, Jawa Barat",
        mapUrl: "https://maps.google.com",
        mapEmbedUrl: "https://maps.google.com/embed?...",
        dressCode: "Formal Putih / Krem",
        notes: "Terbuka untuk umum, mohon datang tepat waktu",
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
    ],
  },

  rsvp: {
    title: "Konfirmasi Kehadiran",
    subtitle: "RSVP",
    intro: "Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan segala sesuatunya dengan lebih baik.",
    deadline: "14 Juni 2026",
    deadlinelabel: "Konfirmasi sebelum",
    waNumber: "6281234567890",
    waMessage:
      "Assalamu'alaikum, saya %NAME% konfirmasi hadir pada acara pernikahan Sayyid Hasan & Syarifah Rugayyah. Jumlah tamu: %GUESTS% orang.",
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
    accountName: "Sayyid Hasan",
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
      "Merupakan suatu kebahagiaan dan kehormatan yang tak terhingga apabila Bapak/Ibu/Saudara/i berkenan hadir memberikan doa restu pada hari bahagia kami. Semoga Allah SWT senantiasa melindungi dan memberkahi langkah kita semua.",
    credit: "Wedding Invitation by Hasan & Rugayyah",
    coupleNames: "سيد حسن و شريفة رقية",
  },

  audio: {
    src: "/audio/music.mp3",
    title: "Enti Wbas",
    artist: "Abdul Majeed Abdullah",
  },
};

export default weddingData;
