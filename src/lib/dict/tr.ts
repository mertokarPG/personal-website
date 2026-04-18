import type { EnDict } from "./en";

export const tr: EnDict = {
  meta: {
    siteTitle: "Mert Okar — Dijital Fabrika / IT-OT",
    siteDescription:
      "Dijital fabrika lideri. P&G'de dokuz yıldır sahayı, operatörlerin gerçekten açtığı yazılımlara bağlıyorum. 2004'ten kalma bir PLC'nin geçen salı çıkmış bir Copilot ajanıyla el sıkışması gereken o dikişte çalışıyorum.",
    workTitle: "İşler — Mert Okar",
    nowTitle: "Şu An — Mert Okar",
    contactTitle: "İletişim — Mert Okar",
  },

  status: {
    linkOk: "BAĞLANTI OK",
    palette: "⌘K · komut",
    up: "UP",
  },

  nav: {
    home: "ana",
    work: "işler",
    now: "şu an",
    contact: "iletişim",
  },

  home: {
    bootLine: "> BOOT TAMAM. KİM BU.",
    windowTitle: "┌─ /HOME/MERT ─ TANITIM.MD",
    readonly: "SALT-OKUNUR",
    bioComment: "// bio.txt",
    bio: "Dijital fabrika lideri. P&G'de dokuz yıldır sahanın sinyallerini operatörlerin gerçekten açtığı yazılımlara çeviriyorum. 2004'ten kalma bir PLC'nin geçen salı çıkmış bir Copilot ajanıyla el sıkışması gereken yerde çalışıyorum — ve bu el sıkışmanın onurlu geçmesine uğraşıyorum.",
    bioFooter:
      "Unvan: Saha Dijital Departman Lideri · Konum: BRU → LON'a açık · Anahtarlar: MES, MQTT, Python, Copilot Studio, sabır.",
    metricsTitle: "┌─ METRİKLER ─┐",
    metricsFooter: "└────────────┘",
    metrics: [
      ["pg.yili", "9+"],
      ["entegre.hat", "3"],
      ["kayip.azalisi", "3.5% → 0.5%"],
      ["starvation.delta", "−2.0%"],
      ["modellenen.proje", "75+"],
      ["emulator.plc", "4"],
    ],
    buttons: {
      seeWork: "$ ./isler",
      now: "$ ./su-an",
      contact: "$ ./iletisim",
      palette: "$ komut paleti için / bas",
    },
    sections: {
      work: "İşler — seçilmiş kayıtlar",
      workRight: "TOPLAM · hepsini gör →",
      now: "Şu an — çalışan süreçler",
      nowRight: "tüm şu an sayfası →",
      contact: "İletişim — bana yaz",
      contactRight: "tüm iletişim sayfası →",
    },
    contactPreview: {
      whoami: "$ whoami --iletisim",
      reasonsTitle: "# yazmak için nedenler",
      reasons: [
        "Geleceğin fabrikası programı yürütüyorsun.",
        "HMI tasarımı üzerine tartışmak istiyorsun.",
        "Saha verisi üstünde GenAI kuruyorsun.",
        "Kodumu görüp özür dilemek istiyorsun.",
      ],
      locationLine: "Brüksel, BE → Londra'ya açık",
      uptimeLabel: "uptime",
    },
  },

  work: {
    title: "İş_kaydı",
    intro:
      "Beş kayıt. Çoğu fabrika yazılımı, biraz entegrasyon arkeolojisi, bir tane de beklenmedik şekilde işe yarayan GenAI denemesi. Herhangi bir satıra tıkla.",
    all: "HEPSİ",
    tableHead: {
      no: "NO.",
      when: "NE ZAMAN",
      entry: "KAYIT",
      result: "SONUÇ",
    },
  },

  detail: {
    problem: "Sorun",
    approach: "Yaklaşım",
    learned: "Ne öğrendim",
    impact: "Etki",
    tags: "Etiketler",
    role: "ROL",
    team: "EKİP",
    stack: "STACK",
    outcome: "ÇIKTI",
    prev: "ÖNCEKİ",
    next: "SONRAKİ",
    imgPlaceholderPrefix: "[ GÖRSEL YER TUTUCU — ",
    imgPlaceholderSuffix: " EKRAN GÖRÜNTÜSÜ ]",
    imgHint: '2520 × 1080 · <Image src="..." /> içine bırak',
  },

  now: {
    title: "Şu an",
    suffix: ".proc",
    intro:
      "Son sayfa yüklemesi itibarıyla gerçekten ne çalışıyor. Derek Sivers'ın /now sayfalarından esinle, stil olarak",
    introCode: "top(1)",
    thinkingTitle: "Şu sıralar üstüne düşündüklerim",
    thinking: [
      "Fabrika HMI'larının neden 2006'ya takılı kaldığı ve bunu gerçekten neyin çözeceği.",
      "Dar, salt-okunur API'lara bağlı GenAI ajanlarının saha verisine güvenli bir giriş rampası olarak kullanımı.",
      "Event sözleşmelerinin en hafife alınmış mimari çıktı olduğu.",
      "'Dijital dönüşüm' ile 'sonunda şu işi okunur kılmak' arasındaki fark.",
    ],
    stackTitle: "Sık uzandığım stack",
    lastUpdated: "Son güncelleme",
    updatedSuffix: "· build sırasında damgalandı.",
    pidHead: "PID",
    nameHead: "AD",
    descHead: "AÇIKLAMA",
    cpuHead: "CPU%",
    items: [
      {
        label: "Okuyorum",
        value: "Designing Data-Intensive Applications, Kleppmann",
      },
      {
        label: "Yapıyorum",
        value: "Akıcı PLC-tag konuşan bir GenAI ajanı",
      },
      {
        label: "Öğreniyorum",
        value: "Fransızca, yavaş ve onur kaybederek",
      },
      {
        label: "Düşünüyorum",
        value: "Fabrika arayüzleri neden 2006'ya takılı kaldı",
      },
      {
        label: "Dinliyorum",
        value: "Haddinden fazla Türk psychedelic rock",
      },
    ],
    dateLocale: "tr-TR",
  },

  contact: {
    heading: "bana_yaz",
    yamlTitle: "$ cat iletisim.yaml",
    reasonsTitle: "# yanıt süresini iyileştiren şeyler",
    reasons: [
      "Üstte tek cümlelik bir 'neden ben'.",
      "Beş iş kaydından hangisi bu mesajı tetikledi.",
      "İşe mi alıyorsun, bir şey mi kuruyorsun, yoksa sadece merak mı.",
      "Türkçe, İngilizce veya (sabırlı) Fransızca — fark etmez.",
    ],
    sendMail: "$ ./posta-gonder",
    mailSubject: "İnternetten merhaba",
    footer: {
      eot: "// YAYIN SONU",
      build: "BRÜKSEL'DE YAPILDI",
      eof: "EOF",
    },
    yaml: {
      email: "email",
      linkedin: "linkedin",
      location: "konum",
      openTo: "acik",
      response: "yanit",
      languages: "diller",
      pgp: "pgp",
      locationValue: "Brüksel, BE",
      openToValue: "[Londra, Geleceğin Fabrikası rolleri]",
      responseValue: "genelde < 48s",
      languagesValue:
        "[Türkçe (ana dil), İngilizce (akıcı), Fransızca (üstünde çalışıyor)]",
      pgpValue: "istek üzerine",
      copied: "✓ kopyalandı",
    },
  },

  crumbs: {
    work: "isler",
    now: "su-an",
    contact: "iletisim",
  },

  palette: {
    heading: "KOMUT",
    esc: "KAPATMAK İÇİN ESC",
    placeholder: "arama için yaz… (↑↓ gezin, ↵ çalıştır)",
    noMatch: "eşleşme yok. dene:",
    commands: {
      home: "ana sayfaya git",
      work: "iş kaydını aç",
      now: "şu an'ı aç",
      contact: "iletişimi aç",
      caseForPrefix: "kaydı aç — ",
      mail: "mert'e posta",
      cv: "CV indir",
      cvAlert: "Yer tutucu — cv.pdf'yi projeye bırak",
      switchEn: "switch to English",
      switchTr: "Türkçe'ye geç",
    },
  },

  egg: {
    border: "┌─ UPTIME ─┐",
    line1: "Yazdığın şey:",
    line2:
      "Bu… 'sadece bakıyordum' diyen biri için fazla tanıdık kas hafızası.",
    footer:
      "Eğer bir sysadmin'sen, güvenilirlik takıntılın varsa ya da sabah 3'te SSH'ladıysan — iyi anlaşacağız. Kapatmak için herhangi bir yere tıkla.",
    trigger: "uptime",
  },

  localeSwitcher: {
    en: "EN",
    tr: "TR",
    aria: "Dil",
  },
};
