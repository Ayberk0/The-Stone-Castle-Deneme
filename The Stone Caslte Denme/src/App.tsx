import { useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://krjykqxzkoqcgasdxvdv.supabase.co";
const supabaseKey = "sb_publishable_ETLIEVPQvQLDca7667KYYg_DZscKbcd";
const supabase = createClient(supabaseUrl, supabaseKey);

const navItems = [
  { id: "home", tr: "Ana Sayfa", en: "Home" },
  { id: "rooms", tr: "Odalarımız", en: "Rooms" },
  { id: "services", tr: "Hizmetler", en: "Amenities" },
  { id: "gallery", tr: "Galeri", en: "Gallery" },
  { id: "blog", tr: "Blog", en: "Blog" },
  { id: "faq", tr: "SSS & Yorumlar", en: "FAQ & Reviews" },
  { id: "contact", tr: "İletişim", en: "Contact" },
];

const roomData = [
  {
    name: "Apollon",
    view: "Deniz Manzaralı",
    type: "Aile Odası",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Geniş Balkon",
    ],
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e3f8ab0b49?auto=format&fit=crop&w=1200&q=80",
    description: "Geniş aileler için tasarlanmış, deniz ve doğa manzarasına açılan ferah bir oda.",
  },
  {
    name: "Afrodit",
    view: "Kara Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
    description: "Sakin ve huzurlu bir tatil için sade ve şık bir seçenek.",
  },
  {
    name: "Ares",
    view: "Kara Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Zamansız bir tasarım ve rahatlığı bir arada sunan oda.",
  },
  {
    name: "Athena",
    view: "Manzarasız",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    description: "Sessizliği sevenler için ideal, modern ve konforlu bir seçenek.",
  },
  {
    name: "Hera",
    view: "Bahçe Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Geniş Balkon",
    ],
    image:
      "https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80",
    description: "Zeytin ağaçlarıyla çevrili bahçe manzarasıyla romantik bir atmosfer.",
  },
  {
    name: "Himeros",
    view: "Havuz Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Geniş Balkon",
    ],
    image:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
    description: "Havuz manzarasına karşı gün batımını izleyebileceğiniz seçkin oda.",
  },
  {
    name: "Artemis",
    view: "Deniz/Orman Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Geniş Balkon",
      "Teras",
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Deniz ve orman manzarasını aynı anda sunan, geniş teraslı oda.",
  },
  {
    name: "Hermes",
    view: "Orman Manzaralı",
    type: "Geniş Aile Odası",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Geniş Balkon",
    ],
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
    description: "Aileler için ferah ve orman manzaralı sıcak bir yaşam alanı.",
  },
  {
    name: "Zeus",
    view: "Deniz Manzaralı",
    type: "Jakuzili Suit",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Jakuzi",
    ],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    description: "Deniz manzarası ve jakuziyle ayrıcalıklı bir suite deneyimi.",
  },
  {
    name: "Eros (Balayı Odası)",
    view: "Deniz Manzaralı",
    type: "Balayı Odası",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Jakuzi",
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Balayına özel dekorasyon ve romantik ayrıntılarla eşsiz bir oda.",
  },
  {
    name: "Helena",
    view: "Deniz Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Jakuzi",
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Panoramik deniz manzarası ve jakuzi keyfi sunar.",
  },
  {
    name: "İmera",
    view: "Deniz Manzaralı",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: [
      "Klima",
      "Şömine",
      "Minibar",
      "Ücretsiz Wi-Fi",
      "7/24 Sıcak Su",
      "Jakuzi",
    ],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Gün batımında deniz manzarasına karşı dinlendirici bir oda.",
  },
  {
    name: "Alteros",
    view: "Manzara Bilgisi Yok",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Sade ve konforlu bir konaklama için ideal oda.",
  },
  {
    name: "Urasüs",
    view: "Manzara Bilgisi Yok",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Minimalist detaylarla huzur dolu bir alan.",
  },
  {
    name: "Medusa",
    view: "Manzara Bilgisi Yok",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Şehrin karmaşasından uzak, sakin bir konaklama alanı.",
  },
  {
    name: "Pandora",
    view: "Manzara Bilgisi Yok",
    type: "Duble Yatak",
    bed: "Duble Yatak",
    features: ["Klima", "Minibar", "Ücretsiz Wi-Fi", "7/24 Sıcak Su"],
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    description: "Modern detaylar ve sıcak renklerle tamamlanan bir oda.",
  },
];

const services = [
  {
    title: "Restoran & Bar",
    description:
      "Serpme köy kahvaltısı, zengin akşam menüleri ve tüm alkol çeşitleriyle keyifli sofralar.",
  },
  {
    title: "Açık Yüzme Havuzu",
    description: "Şezlonglar, havlu servisi ve serinletici atmosfer.",
  },
  {
    title: "Ücretsiz Yüksek Hızlı Wi-Fi",
    description: "Tüm otel genelinde kesintisiz ve güvenli internet.",
  },
  {
    title: "Açık Otopark",
    description: "Misafirlerimize ücretsiz ve güvenli otopark imkanı.",
  },
  {
    title: "Bahçe & Ortak Alanlar",
    description: "Kitap okuma, dinlenme ve doğayla iç içe vakit geçirme alanları.",
  },
  {
    title: "Ek Hizmetler",
    description: "Havaalanı transferi, VIP transfer ve günlük gezi paketleri.",
  },
];

const highlights = [
  {
    title: "Huzurlu Havuz",
    description: "Ege mavisiyle bütünleşen sakin bir yüzme deneyimi.",
  },
  {
    title: "Gastronomi",
    description: "Yerel lezzetlerle hazırlanan butik restoran menüleri.",
  },
  {
    title: "Manzara",
    description: "Deniz ve orman panoramasıyla gün batımı keyfi.",
  },
  {
    title: "Doğa",
    description: "Zeytin ağaçları arasında dingin bir atmosfer.",
  },
];

const galleryItems = [
  {
    category: "Odalar",
    title: "Deniz manzaralı suite",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Ortak Alanlar",
    title: "Havuz başı dinlenme alanı",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Manzara ve Doğa",
    title: "Ege gün batımı panoraması",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Kuşadası Çevresi",
    title: "Kuşadası sahil yürüyüş yolu",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Ortak Alanlar",
    title: "Bahçe ve lounge alanı",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Odalar",
    title: "Modern butik oda detayı",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
  },
];

const faqs = [
  {
    question: "Check-in ve check-out saatleri nedir?",
    answer: "Check-in 14:00, check-out 12:00'dir.",
  },
  {
    question: "İptal politikası nasıl?",
    answer: "İptal politikası rezervasyon tipine göre değişir.",
  },
  {
    question: "Evcil hayvan kabul ediyor musunuz?",
    answer: "Evcil hayvan kabul edilmemektedir.",
  },
  {
    question: "Ödeme seçenekleri nelerdir?",
    answer: "Tüm önemli kredi kartları ve nakit ödeme kabul edilir.",
  },
];

const reviews = [
  {
    name: "Melis A.",
    text: "Sessiz, huzurlu ve çok temiz bir otel. Personel inanılmaz ilgiliydi.",
  },
  {
    name: "Cem T.",
    text: "Kahvaltı efsaneydi! Denize karşı keyifli bir hafta sonu geçirdik.",
  },
  {
    name: "Derya K.",
    text: "Doğayla iç içe, şık ve romantik bir atmosfer. Tekrar geleceğiz.",
  },
  {
    name: "Ayşe S.",
    text: "Odaların manzarası ve jakuzi keyfi harikaydı.",
  },
  {
    name: "Emre Ö.",
    text: "Kuşadası merkeze yakın, sakin bir konumda mükemmel bir butik otel.",
  },
];

const blogPosts = [
  {
    title: "Kuşadası'nın En Güzel Doğal Plajları: Dilek Yarımadası ve Ötesi",
    excerpt:
      "Dilek Yarımadası Milli Parkı'nın gizli koylarından Kuşadası'nın mavi bayraklı plajlarına kadar keşfedilecek en özel rotaları paylaşıyoruz.",
  },
  {
    title: "The Stone Castle'da Bir Gün: Doğayla İç İçe Huzur Dolu Bir Tatil",
    excerpt:
      "Ege güneşiyle uyanıp zeytin ağaçları arasında kahvaltı yapabileceğiniz, akşamları şömine keyfiyle tamamlanan bir günün hikayesi.",
  },
];

const locationInfo = [
  { label: "Kuşadası Merkez", value: "15 dk" },
  { label: "Golf Sahası", value: "10 dk" },
  { label: "Efes Antik Kenti", value: "35 dk" },
  { label: "Adnan Menderes Havalimanı", value: "75 dk" },
];

const translations = {
  tr: {
    heroTitle: "Kuşadası'nın Sakin Kalbinde Ege Rüyası",
    heroSubtitle:
      "Ege'nin huzurlu rotası Kuşadası – Ağaçlı'da, doğa ile iç içe butik otel deneyimi.",
    ctaPrimary: "Hemen Rezervasyon Yap",
    ctaSecondary: "Odaları İncele",
    ctaPhone: "Telefon: +90 532 275 11 54",
    storyTitle: "Marka Hikayemiz",
    storyText:
      "The Stone Castle Boutique Hotel, sıcak hizmet anlayışıyla özgün taş mimariyi, doğa ve deniz esintisiyle birleştirir. Misafirlerimizi sessiz, huzurlu ve kişiselleştirilmiş bir konaklama deneyimine davet ediyoruz.",
    highlightTitle: "Öne Çıkanlar",
    roomsTitle: "Odalar & Süitler",
    servicesTitle: "Hizmetler & Olanaklar",
    galleryTitle: "Galeri",
    blogTitle: "Blog",
    faqTitle: "SSS & Misafir Yorumları",
    contactTitle: "İletişim",
    bestPrice: "En İyi Fiyat Garantisi",
    webDiscount: "Sadece Sitemize Özel İndirimler",
    quickBooking: "Hızlı Rezervasyon",
    quickBookingDesc: "Tarih ve oda tipi seçerek uygun seçenekleri görün.",
    reservationTitle: "Basit Rezervasyon Motoru",
    reservationButton: "Uygun Odaları Göster",
    reservationResults: "Uygun Odalar",
    authTitle: "Misafir Girişi",
    authSubtitle: "Üyelik bazlı teklifler için giriş yapın veya kayıt olun.",
    signIn: "Giriş Yap",
    signUp: "Kayıt Ol",
    formName: "İsim",
    formEmail: "E-posta",
    formPhone: "Telefon",
    formMessage: "Mesaj",
    sendMessage: "Mesajı Gönder",
    contactSuccess: "Mesajınız başarıyla gönderildi.",
    contactError: "Mesaj gönderilemedi. Lütfen tekrar deneyin.",
  },
  en: {
    heroTitle: "An Aegean Dream in the Calm Heart of Kuşadası",
    heroSubtitle:
      "Experience a boutique stay in Ağaçlı, Kuşadası – where nature and serenity meet.",
    ctaPrimary: "Book Now",
    ctaSecondary: "Explore Rooms",
    ctaPhone: "Phone: +90 532 275 11 54",
    storyTitle: "Our Story",
    storyText:
      "The Stone Castle Boutique Hotel blends warm hospitality with unique stone architecture, surrounded by sea breezes and nature. We invite you to a quiet, personalized escape.",
    highlightTitle: "Highlights",
    roomsTitle: "Rooms & Suites",
    servicesTitle: "Services & Amenities",
    galleryTitle: "Gallery",
    blogTitle: "Blog",
    faqTitle: "FAQ & Guest Reviews",
    contactTitle: "Contact",
    bestPrice: "Best Price Guarantee",
    webDiscount: "Exclusive Discounts on Our Website",
    quickBooking: "Quick Booking",
    quickBookingDesc: "Select dates and room type to view availability.",
    reservationTitle: "Reservation Simulator",
    reservationButton: "Show Available Rooms",
    reservationResults: "Available Rooms",
    authTitle: "Guest Login",
    authSubtitle: "Sign in or register for exclusive member offers.",
    signIn: "Sign In",
    signUp: "Sign Up",
    formName: "Name",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Message",
    sendMessage: "Send Message",
    contactSuccess: "Your message has been sent successfully.",
    contactError: "Message could not be sent. Please try again.",
  },
};

export function App() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");
  const [showBooking, setShowBooking] = useState(false);
  const [authForm, setAuthForm] = useState({ email: "", password: "" });
  const [authMessage, setAuthMessage] = useState("" as string | null);
  const [bookingForm, setBookingForm] = useState({
    checkIn: "",
    checkOut: "",
    guests: "2",
    roomType: "Tümü",
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState<"idle" | "success" | "error">("idle");

  const t = translations[language];

  const roomTypes = useMemo(() => {
    const types = new Set<string>(["Tümü"]);
    roomData.forEach((room) => types.add(room.view));
    return Array.from(types);
  }, []);

  const filteredRooms = useMemo(() => {
    if (bookingForm.roomType === "Tümü") {
      return roomData;
    }
    return roomData.filter((room) => room.view === bookingForm.roomType);
  }, [bookingForm.roomType]);

  const handleAuth = async (mode: "signIn" | "signUp") => {
    setAuthMessage(null);
    if (!authForm.email || !authForm.password) {
      setAuthMessage("Lütfen e-posta ve şifre girin.");
      return;
    }
    try {
      if (mode === "signUp") {
        const { error } = await supabase.auth.signUp({
          email: authForm.email,
          password: authForm.password,
        });
        setAuthMessage(error ? error.message : "Kayıt başarılı! E-posta doğrulayın.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: authForm.email,
          password: authForm.password,
        });
        setAuthMessage(error ? error.message : "Giriş başarılı!");
      }
    } catch (error) {
      setAuthMessage("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleContactSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactStatus("idle");
    try {
      const { error } = await supabase.from("messages").insert([
        {
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone,
          message: contactForm.message,
        },
      ]);
      if (error) {
        setContactStatus("error");
      } else {
        setContactStatus("success");
        setContactForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setContactStatus("error");
    }
  };

  return (
    <div className="bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 via-slate-500 to-emerald-700 shadow-md">
              <span className="text-lg font-semibold text-white">SC</span>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-700">The Stone Castle</p>
              <p className="text-lg font-semibold">Boutique Hotel</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="hover:text-emerald-700">
                {item[language]}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-slate-200 bg-white p-1 text-xs font-semibold">
              <button
                onClick={() => setLanguage("tr")}
                className={`rounded-full px-3 py-1 ${
                  language === "tr" ? "bg-emerald-600 text-white" : "text-slate-600"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 ${
                  language === "en" ? "bg-emerald-600 text-white" : "text-slate-600"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setShowBooking((prev) => !prev)}
              className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 lg:inline-flex"
            >
              {t.quickBooking}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-900 text-white"
        >
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
            alt="The Stone Castle Boutique Hotel havuz manzarası"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
            <div className="space-y-6 lg:max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Kuşadası Boutique Hotel
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{t.heroTitle}</h1>
              <p className="text-lg text-emerald-100">{t.heroSubtitle}</p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setShowBooking(true)}
                  className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
                >
                  {t.ctaPrimary}
                </button>
                <a
                  href="#rooms"
                  className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t.ctaSecondary}
                </a>
                <a
                  href="tel:+905322751154"
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t.ctaPhone}
                </a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-semibold text-emerald-100">
                <span className="rounded-full bg-emerald-600/30 px-4 py-2">{t.bestPrice}</span>
                <span className="rounded-full bg-white/10 px-4 py-2">{t.webDiscount}</span>
              </div>
            </div>
            <div className="w-full max-w-md rounded-3xl bg-white/95 p-6 text-slate-900 shadow-xl">
              <h3 className="text-xl font-semibold">{t.authTitle}</h3>
              <p className="mt-2 text-sm text-slate-500">{t.authSubtitle}</p>
              <div className="mt-4 space-y-3">
                <input
                  value={authForm.email}
                  onChange={(event) => setAuthForm({ ...authForm, email: event.target.value })}
                  placeholder={t.formEmail}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                />
                <input
                  type="password"
                  value={authForm.password}
                  onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })}
                  placeholder="Şifre"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => handleAuth("signIn")}
                    className="flex-1 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                  >
                    {t.signIn}
                  </button>
                  <button
                    onClick={() => handleAuth("signUp")}
                    className="flex-1 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
                  >
                    {t.signUp}
                  </button>
                </div>
                {authMessage && <p className="text-xs text-emerald-700">{authMessage}</p>}
              </div>
            </div>
          </div>
        </section>

        {showBooking && (
          <section className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-8">
              <div className="flex flex-wrap items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div>
                  <h2 className="text-2xl font-semibold">{t.quickBooking}</h2>
                  <p className="mt-2 text-sm text-slate-600">{t.quickBookingDesc}</p>
                </div>
                <button
                  onClick={() => setShowBooking(false)}
                  className="text-sm font-semibold text-slate-500"
                >
                  Kapat
                </button>
              </div>
              <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-4">
                <div>
                  <label className="text-xs font-semibold text-slate-500">Giriş</label>
                  <input
                    type="date"
                    value={bookingForm.checkIn}
                    onChange={(event) => setBookingForm({ ...bookingForm, checkIn: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Çıkış</label>
                  <input
                    type="date"
                    value={bookingForm.checkOut}
                    onChange={(event) => setBookingForm({ ...bookingForm, checkOut: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Kişi Sayısı</label>
                  <select
                    value={bookingForm.guests}
                    onChange={(event) => setBookingForm({ ...bookingForm, guests: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-500">Oda Tipi</label>
                  <select
                    value={bookingForm.roomType}
                    onChange={(event) => setBookingForm({ ...bookingForm, roomType: event.target.value })}
                    className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  >
                    {roomTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white" id="story">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">{t.storyTitle}</h2>
              <p className="mt-4 text-slate-600">{t.storyText}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white">
                  {t.bestPrice}
                </span>
                <span className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600">
                  {t.webDiscount}
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="rooms" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold">{t.roomsTitle}</h2>
                <p className="mt-2 text-slate-600">
                  {t.bestPrice} · {t.webDiscount}
                </p>
              </div>
              <div className="rounded-full bg-emerald-600/10 px-4 py-2 text-xs font-semibold text-emerald-700">
                {t.reservationTitle}
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roomData.map((room) => (
                <div key={room.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <img src={room.image} alt={`${room.name} ${room.view} The Stone Castle`} className="h-48 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">{room.name}</h3>
                    <p className="mt-1 text-sm text-emerald-700">
                      {room.view} · {room.type}
                    </p>
                    <p className="mt-3 text-sm text-slate-600">{room.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                      {room.features.map((feature) => (
                        <li key={feature} className="rounded-full bg-slate-100 px-3 py-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-2xl font-semibold">{t.reservationTitle}</h3>
              <p className="mt-2 text-sm text-slate-600">
                Giriş/çıkış tarihi ve oda tipi seçerek uygun oda simülasyonu oluşturun.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-4">
                <input
                  type="date"
                  value={bookingForm.checkIn}
                  onChange={(event) => setBookingForm({ ...bookingForm, checkIn: event.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                />
                <input
                  type="date"
                  value={bookingForm.checkOut}
                  onChange={(event) => setBookingForm({ ...bookingForm, checkOut: event.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                />
                <select
                  value={bookingForm.roomType}
                  onChange={(event) => setBookingForm({ ...bookingForm, roomType: event.target.value })}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                >
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                  {t.reservationButton}
                </button>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold">{t.reservationResults}</h4>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {filteredRooms.slice(0, 4).map((room) => (
                    <div key={room.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <h5 className="font-semibold">{room.name}</h5>
                      <p className="text-sm text-slate-600">{room.view}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-semibold">{t.servicesTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-semibold">{t.galleryTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <div key={`${item.title}-${index}`} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                  <img src={item.image} alt={`${item.title} The Stone Castle Kuşadası butik otel`} className="h-52 w-full object-cover" />
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase text-emerald-600">{item.category}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold">Lokasyon & Ulaşım</h2>
                <p className="mt-3 text-slate-600">
                  Adres: Ağaçlı Mahallesi, Kuşadası / Aydın, Türkiye
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {locationInfo.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-sm text-slate-600">{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                  <p className="font-semibold text-slate-700">Ulaşım Rehberi</p>
                  <p className="mt-2">
                    İzmir Adnan Menderes Havalimanı'ndan araç kiralama, özel transfer veya taksi ile yaklaşık 75 dakika içinde
                    otele ulaşabilirsiniz.
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <iframe
                  title="The Stone Castle Boutique Hotel Harita"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50563.5974647793!2d27.248457!3d37.865197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14beaf1b0fef1f83%3A0x8cd98b5eb2d646f1!2sKusadasi%2C%20Aydin!5e0!3m2!1str!2str!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 320 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-3xl font-semibold">{t.blogTitle}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
                  <button className="mt-4 text-sm font-semibold text-emerald-700">Devamını Oku</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold">{t.faqTitle}</h2>
                <div className="mt-6 space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Misafir Yorumları</h3>
                <div className="mt-6 space-y-4">
                  {reviews.map((review) => (
                    <div key={review.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <p className="text-sm text-slate-600">“{review.text}”</p>
                      <p className="mt-3 text-sm font-semibold text-slate-800">{review.name}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a
                    href="https://www.tripadvisor.com/"
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
                  >
                    TripAdvisor
                  </a>
                  <a
                    href="https://www.google.com/maps"
                    className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600"
                  >
                    Google Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold">{t.contactTitle}</h2>
                <div className="mt-6 space-y-3 text-sm text-slate-600">
                  <p>Telefon: +90 532 275 11 54</p>
                  <p>E-posta: sebahattintokmak@hotmail.com</p>
                  <p>Adres: Ağaçlı Köyü, Kuşadası, Aydın, Türkiye</p>
                  <p>Çalışma Saatleri: Misafir Hizmetleri 7/24</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/stonecastle09/"
                    className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-xs font-semibold text-white"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <form
                onSubmit={handleContactSubmit}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-xl font-semibold">Bize Mesaj Gönderin</h3>
                <div className="mt-4 grid gap-4">
                  <input
                    value={contactForm.name}
                    onChange={(event) => setContactForm({ ...contactForm, name: event.target.value })}
                    placeholder={t.formName}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                    required
                  />
                  <input
                    value={contactForm.email}
                    onChange={(event) => setContactForm({ ...contactForm, email: event.target.value })}
                    placeholder={t.formEmail}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                    required
                  />
                  <input
                    value={contactForm.phone}
                    onChange={(event) => setContactForm({ ...contactForm, phone: event.target.value })}
                    placeholder={t.formPhone}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                  />
                  <textarea
                    value={contactForm.message}
                    onChange={(event) => setContactForm({ ...contactForm, message: event.target.value })}
                    placeholder={t.formMessage}
                    className="min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm"
                    required
                  />
                  <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white">
                    {t.sendMessage}
                  </button>
                  {contactStatus === "success" && (
                    <p className="text-sm text-emerald-700">{t.contactSuccess}</p>
                  )}
                  {contactStatus === "error" && (
                    <p className="text-sm text-red-600">{t.contactError}</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2024 The Stone Castle Boutique Hotel. Kuşadası butik otel deneyimi.</p>
          <p>SSL Güvenli Bağlantı · Ege otel rezervasyon</p>
        </div>
      </footer>

      <a
        href="https://wa.me/905322751154"
        className="fixed bottom-6 right-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg"
        aria-label="WhatsApp"
      >
        <span className="text-xl font-bold">WA</span>
      </a>
    </div>
  );
}
