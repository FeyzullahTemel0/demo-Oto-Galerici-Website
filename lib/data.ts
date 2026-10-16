export type Car = {
  id: number;
  title: string;
  brand: string;
  model: string;
  year: number;
  km: number;
  price: number;
  fuel: "Benzin" | "Dizel" | "Hibrit" | "Elektrik" | "LPG";
  gear: "Manuel" | "Otomatik" | "Yarı Otomatik";
  body: "Sedan" | "Hatchback" | "SUV" | "Station Wagon" | "Coupe";
  color: string;
  city: string;
  district: string;
  date: string;
  hex: string;
  description: string;
  features: string[];
};

export const gallery = {
  name: "Demo Oto Galeri",
  owner: "Ahmet Yılmaz",
  phone: "0532 000 00 00",
  whatsapp: "905320000000",
  email: "info@demootogaleri.com",
  address: "Oto Sanayi Sitesi, Yenibosna Cd. No:12, Bahçelievler / İstanbul",
  hours: "Pzt-Cmt 09:00 - 19:00",
  mapQuery: "Bahçelievler, İstanbul",
};

export const cars: Car[] = [
  { id: 1, title: "Sahibinden temiz, hatasız, boyasız Clio 1.0 TCe Joy", brand: "Renault", model: "Clio", year: 2021, km: 48000, price: 745000, fuel: "Benzin", gear: "Manuel", body: "Hatchback", color: "Beyaz", city: "İstanbul", district: "Bahçelievler", date: "14 Ekim", hex: "#e5e7eb", description: "Düzenli bakımlı, tüm servis kayıtları mevcut. Değişen ve boya yoktur.", features: ["ABS", "ESP", "Klima", "Geri Görüş Kamerası", "Bluetooth"] },
  { id: 2, title: "Passat 1.5 TSI Elegance DSG - Hasarsız", brand: "Volkswagen", model: "Passat", year: 2020, km: 72000, price: 1385000, fuel: "Benzin", gear: "Otomatik", body: "Sedan", color: "Siyah", city: "İstanbul", district: "Esenyurt", date: "13 Ekim", hex: "#1f2937", description: "Boyasız, ağır hasar kaydı yok. Makyajlı kasa, tam dolu paket.", features: ["Deri Döşeme", "Isıtmalı Koltuk", "Şerit Takip", "Adaptif Hız Sabitleyici", "Sunroof"] },
  { id: 3, title: "Egea Cross 1.6 Multijet Urban - Düşük KM", brand: "Fiat", model: "Egea Cross", year: 2022, km: 31000, price: 895000, fuel: "Dizel", gear: "Otomatik", body: "SUV", color: "Gri", city: "Ankara", district: "Çankaya", date: "13 Ekim", hex: "#6b7280", description: "İlk sahibinden, yetkili servis bakımlı, ekonomik yakıt tüketimi.", features: ["Apple CarPlay", "Park Sensörü", "LED Far", "Çelik Jant"] },
  { id: 4, title: "Corolla 1.8 Hybrid Dream e-CVT", brand: "Toyota", model: "Corolla", year: 2022, km: 39000, price: 1150000, fuel: "Hibrit", gear: "Otomatik", body: "Sedan", color: "Beyaz", city: "İzmir", district: "Karşıyaka", date: "12 Ekim", hex: "#f3f4f6", description: "Hibrit ekonomi, 100.000 km garanti kapsamı devam ediyor.", features: ["Geri Görüş Kamerası", "Şerit Takip", "Kablosuz Şarj", "Çift Bölgeli Klima"] },
  { id: 5, title: "3.20i M Sport - Orijinal, Bakımlı", brand: "BMW", model: "3 Serisi", year: 2019, km: 88000, price: 1690000, fuel: "Benzin", gear: "Otomatik", body: "Sedan", color: "Mavi", city: "İstanbul", district: "Kadıköy", date: "12 Ekim", hex: "#1d4ed8", description: "M Sport paket, hafıza koltuk, head-up display. Bakımları yetkili serviste.", features: ["Head-Up Display", "Hafızalı Koltuk", "Harman Kardon", "Xenon/LED Far"] },
  { id: 6, title: "Qashqai 1.3 DIG-T Platinum Premium", brand: "Nissan", model: "Qashqai", year: 2021, km: 56000, price: 1245000, fuel: "Benzin", gear: "Otomatik", body: "SUV", color: "Kırmızı", city: "Bursa", district: "Nilüfer", date: "11 Ekim", hex: "#b91c1c", description: "Panoramik cam tavan, 360 derece kamera, tam dolu.", features: ["Panoramik Tavan", "360° Kamera", "Deri Döşeme", "Elektrikli Bagaj"] },
  { id: 7, title: "Megane 1.5 dCi Icon - Dizel Otomatik", brand: "Renault", model: "Megane", year: 2020, km: 94000, price: 845000, fuel: "Dizel", gear: "Otomatik", body: "Sedan", color: "Gri", city: "Ankara", district: "Yenimahalle", date: "10 Ekim", hex: "#9ca3af", description: "Uzun yol için ideal, düşük yakıt tüketimi. Servis bakımlı.", features: ["Hız Sabitleyici", "Navigasyon", "Isıtmalı Direksiyon"] },
  { id: 8, title: "Golf 1.4 TSI Comfortline - Sahibinden", brand: "Volkswagen", model: "Golf", year: 2018, km: 112000, price: 765000, fuel: "Benzin", gear: "Manuel", body: "Hatchback", color: "Siyah", city: "İstanbul", district: "Pendik", date: "10 Ekim", hex: "#111827", description: "Bakımları zamanında yapılmış, kullanıma hazır.", features: ["Klima", "Park Sensörü", "Multimedya"] },
  { id: 9, title: "Model Y Long Range - Kasko Yenilendi", brand: "Tesla", model: "Model Y", year: 2023, km: 18000, price: 2450000, fuel: "Elektrik", gear: "Otomatik", body: "SUV", color: "Beyaz", city: "İzmir", district: "Bornova", date: "9 Ekim", hex: "#e5e7eb", description: "Autopilot, premium ses sistemi ve cam tavan. Ev şarj ünitesi hediye.", features: ["Autopilot", "Cam Tavan", "Isıtmalı Koltuk", "Premium Ses"] },
  { id: 10, title: "Astra 1.6 CDTI Sport Station - Ekonomik", brand: "Opel", model: "Astra", year: 2017, km: 138000, price: 595000, fuel: "Dizel", gear: "Manuel", body: "Station Wagon", color: "Gri", city: "Konya", district: "Selçuklu", date: "8 Ekim", hex: "#4b5563", description: "Geniş bagaj, aile aracı. Motor ve şanzıman sorunsuz.", features: ["Klima", "Cruise Control", "Park Sensörü"] },
  { id: 11, title: "A3 Sedan 1.5 TFSI Design Line S tronic", brand: "Audi", model: "A3", year: 2021, km: 44000, price: 1395000, fuel: "Benzin", gear: "Otomatik", body: "Sedan", color: "Siyah", city: "İstanbul", district: "Beşiktaş", date: "8 Ekim", hex: "#0f172a", description: "Virtual cockpit, matrix LED. Garajda tutulmuş, kozmetik olarak mükemmel.", features: ["Virtual Cockpit", "Matrix LED", "Bang & Olufsen", "Çift Bölgeli Klima"] },
  { id: 12, title: "i20 1.4 MPI Style Otomatik - Hasar Kaydı Yok", brand: "Hyundai", model: "i20", year: 2019, km: 67000, price: 585000, fuel: "Benzin", gear: "Otomatik", body: "Hatchback", color: "Kırmızı", city: "Antalya", district: "Muratpaşa", date: "7 Ekim", hex: "#dc2626", description: "Şehir içi kullanım için ideal, ekonomik ve bakımlı.", features: ["Geri Görüş Kamerası", "Android Auto", "Klima"] },
];

export const brands = Array.from(new Set(cars.map((c) => c.brand))).sort();
export const cities = Array.from(new Set(cars.map((c) => c.city))).sort();
export const fuels = Array.from(new Set(cars.map((c) => c.fuel)));
export const gears = Array.from(new Set(cars.map((c) => c.gear)));
export const bodies = Array.from(new Set(cars.map((c) => c.body)));

export const formatPrice = (n: number) => n.toLocaleString("tr-TR") + " TL";
export const formatKm = (n: number) => n.toLocaleString("tr-TR");
