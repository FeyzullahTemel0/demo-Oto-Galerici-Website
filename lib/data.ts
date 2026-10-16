export type Social = {
  instagram?: string;
  facebook?: string;
  x?: string;
  youtube?: string;
  website?: string;
};

export type Gallery = {
  id: number;
  slug: string;
  name: string;
  owner: string;
  tagline: string;
  about: string[];
  services: string[];
  founded: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  hours: string;
  mapQuery: string;
  accent: string;
  social: Social;
};

export type CarStatus = "aktif" | "pasif" | "satildi";

export type Car = {
  id: number;
  galleryId: number;
  status: CarStatus;
  title: string;
  brand: string;
  model: string;
  year: number;
  km: number;
  price: number;
  fuel: string;
  gear: string;
  body: string;
  color: string;
  city: string;
  district: string;
  date: string;
  hex: string;
  imageUrl?: string;
  description: string;
  features: string[];
};

export type Message = {
  id: number;
  galleryId: number;
  carId?: number;
  name: string;
  phone: string;
  text: string;
  offer?: number;
  date: string;
  read: boolean;
};

export const platform = {
  name: "OtoVitrin",
  phone: "0850 000 00 00",
  email: "destek@otovitrin.demo",
  address: "Levent Mah. Büyükdere Cd. No:1, Beşiktaş / İstanbul",
  social: {
    instagram: "https://instagram.com/otovitrin",
    facebook: "https://facebook.com/otovitrin",
    x: "https://x.com/otovitrin",
    youtube: "https://youtube.com/@otovitrin",
  } as Social,
};

export const fuels = ["Benzin", "Dizel", "Hibrit", "Elektrik", "LPG"];
export const gears = ["Manuel", "Otomatik", "Yarı Otomatik"];
export const bodies = ["Sedan", "Hatchback", "SUV", "Station Wagon", "Coupe", "Pickup"];

export const seedGalleries: Gallery[] = [
  {
    id: 1,
    slug: "yilmaz-otomotiv",
    name: "Yılmaz Otomotiv",
    owner: "Ahmet Yılmaz",
    tagline: "25 yıllık tecrübeyle güvenilir ikinci el",
    about: [
      "Yılmaz Otomotiv, 2001 yılında Bahçelievler Oto Sanayi Sitesi'nde kurulmuş aile işletmesidir. Kurulduğumuz günden bu yana tek ilkemiz şeffaflıktır: her araç satıştan önce bağımsız ekspertizden geçer, rapor müşteriyle paylaşılır.",
      "Geniş ve düzenli yenilenen stoğumuzla ekonomik şehir araçlarından premium sedanlara kadar her bütçeye uygun seçenek sunuyoruz. Kredi, takas ve noter işlemleri konusunda satış öncesi ve sonrası yanınızdayız.",
    ],
    services: ["Ekspertiz raporu", "Takas imkânı", "Kredi desteği", "Noter ve evrak takibi", "Satış sonrası destek"],
    founded: 2001,
    phone: "0532 000 00 01",
    whatsapp: "905320000001",
    email: "info@yilmazotomotiv.demo",
    address: "Oto Sanayi Sitesi, Yenibosna Cd. No:12, Bahçelievler / İstanbul",
    city: "İstanbul",
    hours: "Pzt-Cmt 09:00 - 19:00",
    mapQuery: "Yenibosna, Bahçelievler, İstanbul",
    accent: "#1d4ed8",
    social: {
      instagram: "https://instagram.com/yilmazotomotiv",
      facebook: "https://facebook.com/yilmazotomotiv",
      x: "https://x.com/yilmazotomotiv",
      youtube: "https://youtube.com/@yilmazotomotiv",
      website: "https://yilmazotomotiv.demo",
    },
  },
  {
    id: 2,
    slug: "anadolu-motors",
    name: "Anadolu Motors",
    owner: "Mehmet Kaya",
    tagline: "Ankara'nın SUV ve dizel uzmanı",
    about: [
      "Anadolu Motors, Ankara'da 2012'den beri hizmet veren bir oto galeridir. Özellikle SUV, dizel ve uzun yola uygun araçlarda uzmanlaşmış ekibimizle müşterilerimize doğru araç seçiminde danışmanlık yapıyoruz.",
      "Tüm araçlarımızın TRAMER, kilometre ve bakım geçmişi satıştan önce kontrol edilir. Aracınız için sigorta ve kredi seçeneklerini tek çatı altında sunuyoruz.",
    ],
    services: ["TRAMER sorgusu", "Sigorta danışmanlığı", "Kredi ve leasing", "Araç alım-satım"],
    founded: 2012,
    phone: "0533 000 00 02",
    whatsapp: "905330000002",
    email: "info@anadolumotors.demo",
    address: "Ostim Oto Pazarı, 1234. Sk. No:5, Yenimahalle / Ankara",
    city: "Ankara",
    hours: "Pzt-Cmt 09:30 - 18:30",
    mapQuery: "Ostim, Yenimahalle, Ankara",
    accent: "#b45309",
    social: {
      instagram: "https://instagram.com/anadolumotors",
      facebook: "https://facebook.com/anadolumotors",
      youtube: "https://youtube.com/@anadolumotors",
    },
  },
  {
    id: 3,
    slug: "ege-otomotiv",
    name: "Ege Otomotiv",
    owner: "Zeynep Arslan",
    tagline: "Hibrit ve elektrikli araçlarda yeni nesil galeri",
    about: [
      "Ege Otomotiv, İzmir'de hibrit ve elektrikli araçlara odaklanan yeni nesil bir galeridir. Sürdürülebilir ulaşımın yaygınlaşması için müşterilerimizi şarj, batarya sağlığı ve kullanım maliyetleri konusunda bilgilendiriyoruz.",
      "Her araç için batarya sağlık raporu ve detaylı ekspertiz sunuyoruz. Evinize şarj ünitesi kurulumu için anlaşmalı firmalarımızla yönlendirme yapıyoruz.",
    ],
    services: ["Batarya sağlık raporu", "Şarj ünitesi yönlendirmesi", "Takas", "Test sürüşü"],
    founded: 2018,
    phone: "0535 000 00 03",
    whatsapp: "905350000003",
    email: "info@egeotomotiv.demo",
    address: "Gaziemir Oto Galericiler Sitesi, 5. Blok No:8, Gaziemir / İzmir",
    city: "İzmir",
    hours: "Her gün 10:00 - 19:00",
    mapQuery: "Gaziemir, İzmir",
    accent: "#047857",
    social: {
      instagram: "https://instagram.com/egeotomotiv",
      x: "https://x.com/egeotomotiv",
      youtube: "https://youtube.com/@egeotomotiv",
    },
  },
];

const c = (
  id: number,
  galleryId: number,
  title: string,
  brand: string,
  model: string,
  year: number,
  km: number,
  price: number,
  fuel: string,
  gear: string,
  body: string,
  color: string,
  hex: string,
  city: string,
  district: string,
  date: string,
  description: string,
  features: string[]
): Car => ({ id, galleryId, status: "aktif", title, brand, model, year, km, price, fuel, gear, body, color, hex, city, district, date, description, features });

export const seedCars: Car[] = [
  c(1, 1, "Sahibinden temiz, hatasız, boyasız Clio 1.0 TCe Joy", "Renault", "Clio", 2021, 48000, 745000, "Benzin", "Manuel", "Hatchback", "Beyaz", "#e5e7eb", "İstanbul", "Bahçelievler", "14 Ekim", "Düzenli bakımlı, tüm servis kayıtları mevcut. Değişen ve boya yoktur.", ["ABS", "ESP", "Klima", "Geri Görüş Kamerası", "Bluetooth"]),
  c(2, 1, "Passat 1.5 TSI Elegance DSG - Hasarsız", "Volkswagen", "Passat", 2020, 72000, 1385000, "Benzin", "Otomatik", "Sedan", "Siyah", "#1f2937", "İstanbul", "Bahçelievler", "13 Ekim", "Boyasız, ağır hasar kaydı yok. Makyajlı kasa, tam dolu paket.", ["Deri Döşeme", "Isıtmalı Koltuk", "Şerit Takip", "Adaptif Hız Sabitleyici", "Sunroof"]),
  c(3, 2, "Egea Cross 1.6 Multijet Urban - Düşük KM", "Fiat", "Egea Cross", 2022, 31000, 895000, "Dizel", "Otomatik", "SUV", "Gri", "#6b7280", "Ankara", "Yenimahalle", "13 Ekim", "İlk sahibinden, yetkili servis bakımlı, ekonomik yakıt tüketimi.", ["Apple CarPlay", "Park Sensörü", "LED Far", "Çelik Jant"]),
  c(4, 3, "Corolla 1.8 Hybrid Dream e-CVT", "Toyota", "Corolla", 2022, 39000, 1150000, "Hibrit", "Otomatik", "Sedan", "Beyaz", "#f3f4f6", "İzmir", "Gaziemir", "12 Ekim", "Hibrit ekonomi, 100.000 km garanti kapsamı devam ediyor.", ["Geri Görüş Kamerası", "Şerit Takip", "Kablosuz Şarj", "Çift Bölgeli Klima"]),
  c(5, 1, "3.20i M Sport - Orijinal, Bakımlı", "BMW", "3 Serisi", 2019, 88000, 1690000, "Benzin", "Otomatik", "Sedan", "Mavi", "#1d4ed8", "İstanbul", "Bahçelievler", "12 Ekim", "M Sport paket, hafıza koltuk, head-up display. Bakımları yetkili serviste.", ["Head-Up Display", "Hafızalı Koltuk", "Harman Kardon", "LED Far"]),
  c(6, 2, "Qashqai 1.3 DIG-T Platinum Premium", "Nissan", "Qashqai", 2021, 56000, 1245000, "Benzin", "Otomatik", "SUV", "Kırmızı", "#b91c1c", "Ankara", "Yenimahalle", "11 Ekim", "Panoramik cam tavan, 360 derece kamera, tam dolu.", ["Panoramik Tavan", "360° Kamera", "Deri Döşeme", "Elektrikli Bagaj"]),
  c(7, 2, "Megane 1.5 dCi Icon - Dizel Otomatik", "Renault", "Megane", 2020, 94000, 845000, "Dizel", "Otomatik", "Sedan", "Gri", "#9ca3af", "Ankara", "Yenimahalle", "10 Ekim", "Uzun yol için ideal, düşük yakıt tüketimi. Servis bakımlı.", ["Hız Sabitleyici", "Navigasyon", "Isıtmalı Direksiyon"]),
  c(8, 1, "Golf 1.4 TSI Comfortline - Sahibinden", "Volkswagen", "Golf", 2018, 112000, 765000, "Benzin", "Manuel", "Hatchback", "Siyah", "#111827", "İstanbul", "Bahçelievler", "10 Ekim", "Bakımları zamanında yapılmış, kullanıma hazır.", ["Klima", "Park Sensörü", "Multimedya"]),
  c(9, 3, "Model Y Long Range - Kasko Yenilendi", "Tesla", "Model Y", 2023, 18000, 2450000, "Elektrik", "Otomatik", "SUV", "Beyaz", "#e5e7eb", "İzmir", "Gaziemir", "9 Ekim", "Autopilot, premium ses sistemi ve cam tavan. Ev şarj ünitesi hediye.", ["Autopilot", "Cam Tavan", "Isıtmalı Koltuk", "Premium Ses"]),
  c(10, 2, "Astra 1.6 CDTI Sport Station - Ekonomik", "Opel", "Astra", 2017, 138000, 595000, "Dizel", "Manuel", "Station Wagon", "Gri", "#4b5563", "Ankara", "Yenimahalle", "8 Ekim", "Geniş bagaj, aile aracı. Motor ve şanzıman sorunsuz.", ["Klima", "Cruise Control", "Park Sensörü"]),
  c(11, 1, "A3 Sedan 1.5 TFSI Design Line S tronic", "Audi", "A3", 2021, 44000, 1395000, "Benzin", "Otomatik", "Sedan", "Siyah", "#0f172a", "İstanbul", "Bahçelievler", "8 Ekim", "Virtual cockpit, matrix LED. Garajda tutulmuş, kozmetik olarak mükemmel.", ["Virtual Cockpit", "Matrix LED", "Bang & Olufsen", "Çift Bölgeli Klima"]),
  c(12, 3, "i20 1.4 MPI Style Otomatik - Hasar Kaydı Yok", "Hyundai", "i20", 2019, 67000, 585000, "Benzin", "Otomatik", "Hatchback", "Kırmızı", "#dc2626", "İzmir", "Gaziemir", "7 Ekim", "Şehir içi kullanım için ideal, ekonomik ve bakımlı.", ["Geri Görüş Kamerası", "Android Auto", "Klima"]),
];

export const seedMessages: Message[] = [
  { id: 1, galleryId: 1, carId: 2, name: "Burak Demir", phone: "0555 111 22 33", text: "Merhaba, araç hâlâ satılık mı? Takas düşünüyorum.", offer: 1320000, date: "14 Ekim", read: false },
  { id: 2, galleryId: 1, carId: 5, name: "Selin Aksoy", phone: "0544 222 33 44", text: "Hafta sonu görmeye gelebilir miyim?", date: "13 Ekim", read: false },
  { id: 3, galleryId: 1, name: "Can Öztürk", phone: "0533 333 44 55", text: "Krediyle alım için hangi bankalarla çalışıyorsunuz?", date: "12 Ekim", read: true },
  { id: 4, galleryId: 2, carId: 3, name: "Hakan Yıldız", phone: "0532 444 55 66", text: "Son fiyat nedir?", offer: 860000, date: "13 Ekim", read: false },
  { id: 5, galleryId: 3, carId: 9, name: "Elif Çelik", phone: "0536 555 66 77", text: "Batarya sağlık raporunu görebilir miyim?", date: "12 Ekim", read: false },
];

export const formatPrice = (n: number) => n.toLocaleString("tr-TR") + " TL";
export const formatKm = (n: number) => n.toLocaleString("tr-TR");
export const today = () => new Date().toLocaleDateString("tr-TR", { day: "numeric", month: "long" });
export const statusLabel: Record<CarStatus, string> = { aktif: "Yayında", pasif: "Pasif", satildi: "Satıldı" };
