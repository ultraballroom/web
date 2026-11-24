// ============================================================
//  DATA WEB ULTRABALL
//  Cukup edit file ini untuk menambah/mengubah jersey & artikel.
//  Foto taruh di folder "foto/", lalu tulis nama filenya di "foto".
// ============================================================

// Nomor WhatsApp untuk tombol "Tanya via WhatsApp" (format 62..., tanpa + dan spasi)
const WHATSAPP = "62XXXXXXXXXX"; // TODO: ganti dengan nomor UltraBall

// ---------- THE VAULT (koleksi pribadi) ----------
const KOLEKSI = [
  { klub: "AC Milan", musim: "1997/98", pemain: "Demetrio Albertini", tipe: "Match worn", catatan: "Home Astra, lengan panjang.", foto: "" },
  { klub: "AC Milan", musim: "1999/00", pemain: "Leonardo", tipe: "Match worn", catatan: "Centenary kit.", foto: "" },
  { klub: "AC Milan", musim: "1996", pemain: "Marcel Desailly", tipe: "Match issued / worn", catatan: "Home.", foto: "" },
  { klub: "AC Milan", musim: "1999", pemain: "Luigi Sala", tipe: "Bench worn", catatan: "UCL Centenary, lengan pendek.", foto: "" },
  { klub: "AC Milan", musim: "1996", pemain: "Giovanni Galli", tipe: "Match issued", catatan: "Home, kiper ke-4.", foto: "" },
  { klub: "AC Milan", musim: "2000", pemain: "Zvonimir Boban", tipe: "Issued / worn", catatan: "Away Corsa, dengan proof sign.", foto: "" },
  { klub: "AC Milan", musim: "1997/98", pemain: "Jesper Blomqvist", tipe: "Match worn", catatan: "Third kit hitam Lotto/Opel.", foto: "" },
  { klub: "AC Milan", musim: "1996", pemain: "Tomas Locatelli", tipe: "Match issued", catatan: "Home.", foto: "" },
  { klub: "AC Milan", musim: "1995", pemain: "Paolo Di Canio", tipe: "Match worn", catatan: "", foto: "" },
];

// ---------- READY STOCK (dijual) ----------
// status: "tersedia" atau "terjual"
const DIJUAL = [
  { nama: "CONTOH — Jersey Klub 1998 Home", ukuran: "L", kondisi: "9/10", harga: "Rp 1.500.000", status: "tersedia", foto: "" },
  { nama: "CONTOH — Jersey Timnas 2002 Away", ukuran: "M", kondisi: "8/10", harga: "Rp 950.000", status: "terjual", foto: "" },
];

// ---------- REVIEW ----------
const REVIEW = [
  {
    judul: "CONTOH: Review Jersey Third AC Milan 1997/98",
    kicker: "Kit Review",
    tanggal: "24 November 2026",
    foto: "",
    ringkasan: "Ini contoh artikel. Ganti dengan review pertamamu.",
    isi: [
      "Paragraf pertama review. Ceritakan konteks jersey: musim, sponsor, apparel.",
      "Paragraf kedua: detail desain, bahan, dan cerita di baliknya.",
      "Paragraf penutup: kenapa jersey ini layak dikoleksi."
    ]
  }
];
