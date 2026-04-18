export const en = {
  // document
  meta: {
    siteTitle: "Mert Okar — Digital Factory / IT-OT",
    siteDescription:
      "Digital-factory lead. Nine years at P&G wiring shopfloor signals into software operators actually open. I live in the seam where a PLC from 2004 has to shake hands with a Copilot agent from last Tuesday.",
    workTitle: "Work — Mert Okar",
    nowTitle: "Now — Mert Okar",
    contactTitle: "Contact — Mert Okar",
  },

  // top status bar
  status: {
    linkOk: "LINK OK",
    palette: "⌘K · palette",
    up: "UP",
  },

  // main nav
  nav: {
    home: "home",
    work: "work",
    now: "now",
    contact: "contact",
  },

  // home page
  home: {
    bootLine: "> BOOT COMPLETE. WHO IS THIS.",
    windowTitle: "┌─ /HOME/MERT ─ INTRO.MD",
    readonly: "READ-ONLY",
    bioComment: "// bio.txt",
    bio: "Digital-factory lead. Nine years at P&G wiring shopfloor signals into software operators actually open. I live in the seam where a PLC from 2004 has to shake hands with a Copilot agent from last Tuesday — and I try to make that handshake dignified.",
    bioFooter:
      "Title: Site Digital Department Leader · Location: BRU → open to LON · Keys: MES, MQTT, Python, Copilot Studio, patience.",
    metricsTitle: "┌─ METRICS ─┐",
    metricsFooter: "└───────────┘",
    metrics: [
      ["years.at_pg", "9+"],
      ["lines.integrated", "3"],
      ["losses.reduced", "3.5% → 0.5%"],
      ["starvation.delta", "−2.0%"],
      ["projects.modelled", "75+"],
      ["plcs.in_emulator", "4"],
    ] as [string, string][],
    buttons: {
      seeWork: "$ ./see-work",
      now: "$ ./now",
      contact: "$ ./contact",
      palette: "$ press / for command palette",
    },
    sections: {
      work: "Work — selected entries",
      workRight: "TOTAL · see all →",
      now: "Now — running processes",
      nowRight: "full now page →",
      contact: "Contact — ping me",
      contactRight: "open full contact →",
    },
    contactPreview: {
      whoami: "$ whoami --contact",
      reasonsTitle: "# reasons to write",
      reasons: [
        "You run a factory-of-the-future program.",
        "You want to argue about HMI design.",
        "You're building GenAI on plant data.",
        "You think you saw my code and want to apologise.",
      ],
      locationLine: "Brussels, BE → open to London",
      uptimeLabel: "uptime",
    },
  },

  // work index
  work: {
    title: "Work_log",
    intro:
      "Five entries. Mostly factory software, some integration archaeology, one GenAI experiment that unexpectedly worked. Click any row.",
    all: "ALL",
    tableHead: {
      no: "NO.",
      when: "WHEN",
      entry: "ENTRY",
      result: "RESULT",
    },
  },

  // work detail
  detail: {
    problem: "Problem",
    approach: "Approach",
    learned: "What I learned",
    impact: "Impact",
    tags: "Tags",
    role: "ROLE",
    team: "TEAM",
    stack: "STACK",
    outcome: "OUTCOME",
    prev: "PREV",
    next: "NEXT",
    imgPlaceholderPrefix: "[ IMG PLACEHOLDER — HERO SCREENSHOT OF ",
    imgPlaceholderSuffix: " ]",
    imgHint: '2520 × 1080 · drop in <Image src="..." />',
  },

  // now
  now: {
    title: "Now",
    suffix: ".proc",
    intro:
      "What's actually running, as of the last page load. Inspired by Derek Sivers' /now pages, styled like",
    introCode: "top(1)",
    thinkingTitle: "Currently thinking about",
    thinking: [
      "Why factory HMIs are stuck in 2006 and what would actually unstick them.",
      "GenAI agents grounded in narrow, read-only APIs as a safe on-ramp for plant data.",
      "Event contracts as the most under-rated architectural deliverable.",
      "The difference between 'digital transformation' and 'finally making the thing legible'.",
    ],
    stackTitle: "Stack I reach for",
    lastUpdated: "Last updated",
    updatedSuffix: "· auto-stamped from the build.",
    pidHead: "PID",
    nameHead: "NAME",
    descHead: "DESC",
    cpuHead: "CPU%",
    items: [
      {
        label: "Reading",
        value: "Designing Data-Intensive Applications, Kleppmann",
      },
      { label: "Building", value: "A GenAI agent that speaks fluent PLC tag" },
      { label: "Learning", value: "French, slowly and with dignity loss" },
      { label: "Thinking about", value: "Why factory UIs are stuck in 2006" },
      {
        label: "Listening",
        value: "An unreasonable amount of Turkish psych rock",
      },
    ] as { label: string; value: string }[],
    dateLocale: "en-GB",
  },

  // contact
  contact: {
    heading: "ping_me",
    yamlTitle: "$ cat contact.yaml",
    reasonsTitle: "# things that improve reply speed",
    reasons: [
      "A one-line 'why me' at the top.",
      "Which of the five work entries triggered this.",
      "Whether you're hiring, building, or just curious.",
      "Anything in Turkish, English, or (patient) French.",
    ],
    sendMail: "$ ./send-mail",
    mailSubject: "Hello from the internet",
    footer: {
      eot: "// END OF TRANSMISSION",
      build: "MADE IN BRUSSELS",
      eof: "EOF",
    },
    yaml: {
      email: "email",
      linkedin: "linkedin",
      location: "location",
      openTo: "open_to",
      response: "response",
      languages: "languages",
      pgp: "pgp",
      locationValue: "Brussels, BE",
      openToValue: "[London, Factory-of-the-Future roles]",
      responseValue: "usually < 48h",
      languagesValue:
        "[Turkish (native), English (fluent), French (working on it)]",
      pgpValue: "on request",
      copied: "✓ copied",
    },
  },

  // breadcrumbs
  crumbs: {
    work: "work",
    now: "now",
    contact: "contact",
  },

  // command palette
  palette: {
    heading: "COMMAND",
    esc: "ESC TO CLOSE",
    placeholder: "type to search… (↑↓ to move, ↵ to run)",
    noMatch: "no match. try:",
    commands: {
      home: "go home",
      work: "open work log",
      now: "open now",
      contact: "open contact",
      caseForPrefix: "open case — ",
      mail: "mailto mert",
      cv: "download CV",
      cvAlert: "Placeholder — drop cv.pdf into the project",
      switchEn: "switch to English",
      switchTr: "Türkçe'ye geç",
    },
  },

  // easter egg
  egg: {
    border: "┌─ UPTIME ─┐",
    line1: "You typed",
    line2: "That’s… suspiciously familiar muscle memory for a “just browsing” visit.",
    footer:
      "If you’re a sysadmin, a reliability nerd, or someone who’s ever SSH’d in at 3am — we’ll get along. Click anywhere to close.",
    trigger: "uptime",
  },

  // locale switcher label (aria)
  localeSwitcher: {
    en: "EN",
    tr: "TR",
    aria: "Language",
  },
};

export type EnDict = typeof en;
