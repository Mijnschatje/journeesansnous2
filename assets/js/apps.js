
// assets/js/app.js
(function () {
  "use strict";

  // ---- Utilities ----
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  const HAS_TRANSLATIONS = typeof window.TRANSLATIONS === "object" && window.TRANSLATIONS !== null;

  // DOM elements (lazy get after DOMContentLoaded)
  let langSelect, contentText, appelRoot, audioEl, shareBtn;

  // State
  let currentLang = "fr";
  let audioButtons = [];

  // Preferred initial language: URL ?lang, then localStorage, then navigator, else 'fr'
  function getInitialLang() {
    const keys = HAS_TRANSLATIONS ? Object.keys(window.TRANSLATIONS) : [];
    const byKey = (k) => keys.includes(k) ? k : null;

    // 1) URL param
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang) {
      const normalized = urlLang.toLowerCase();
      if (byKey(normalized)) return normalized;
    }

    // 2) localStorage
    try {
      const saved = localStorage.getItem("jsn_lang");
      if (saved && byKey(saved)) return saved;
    } catch {}

    // 3) navigator language
    const nav = (navigator.language || "fr").toLowerCase();
    if (byKey(nav)) return nav;
    const base = nav.split("-")[0];
    if (byKey(base)) return base;

    // 4) fallback
    return byKey("fr") || keys[0] || "fr";
  }

  // Populate the <select> from TRANSLATIONS (if present)
  function populateSelect() {
    if (!HAS_TRANSLATIONS || !langSelect) return;
    // If options already exist, we clear & rebuild to stay in sync
    langSelect.innerHTML = "";
    for (const [code, meta] of Object.entries(window.TRANSLATIONS)) {
      const opt = document.createElement("option");
      opt.value = code;
      const flag = (code === "fr") ? "🇫🇷"
                 : (code === "en") ? "🇬🇧"
                 : (code === "ar") ? "🌍"
                 : "🌐";
      opt.textContent = `${flag} ${meta.label || code}`;
      langSelect.appendChild(opt);
    }
  }

  // Set direction + page-level class for RTL
  function applyDirection(isRTL) {
    appelRoot.classList.toggle("rtl", !!isRTL);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }

  function updateURLParam(lang) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    // Keep history clean
    try { window.history.replaceState({}, "", url); } catch {}
  }

  function rememberLang(lang) {
    try { localStorage.setItem("jsn_lang", lang); } catch {}
  }

  function stopAllAudioButtons() {
    if (!audioEl) return;
    audioEl.pause();
    audioButtons.forEach((b) => {
      b.classList.remove("playing");
      const i = b.querySelector("i");
      if (i) i.className = "fa-solid fa-play";
    });
  }

  function prepareAudioFor(lang) {
    if (!audioEl || !HAS_TRANSLATIONS) return;
    const data = window.TRANSLATIONS[lang];
    audioEl.src = (data && data.audio) ? data.audio : "";
    audioEl.dataset.lang = (data && data.audio) ? lang : "";
    // Don't autoplay on language change
    stopAllAudioButtons();
  }

  function setLanguage(lang) {
    if (!HAS_TRANSLATIONS) return;
    const data = window.TRANSLATIONS[lang] || window.TRANSLATIONS.fr;

    // Inject content
    if (contentText) contentText.innerHTML = data.content || "<p>Traduction en cours.</p>";

    // Direction
    applyDirection(!!data.rtl);

    // Select value + remember + URL
    if (langSelect) langSelect.value = lang;
    currentLang = lang;
    rememberLang(lang);
    updateURLParam(lang);

    // Prepare audio source
    prepareAudioFor(lang);
  }

  // Toggle audio for a specific language button
  function toggleAudioFor(lang, buttonEl) {
    if (!audioEl || !HAS_TRANSLATIONS) return;

    const data = window.TRANSLATIONS[lang];
    if (!data || !data.audio) {
      alert("Audio indisponible pour cette langue.");
      return;
    }

    // If another audio is playing
    const sameLang = audioEl.dataset.lang === lang;
    if (!audioEl.paused && audioEl.src && !audioEl.ended) {
      // If same button, stop
      stopAllAudioButtons();
      if (sameLang) {
        audioEl.dataset.lang = "";
        return;
      }
    }

    // Load new src if needed
    if (audioEl.src !== data.audio) {
      audioEl.src = data.audio;
    }
    audioEl.dataset.lang = lang;

    audioEl.play().then(() => {
      stopAllAudioButtons();
      buttonEl.classList.add("playing");
      const i = buttonEl.querySelector("i");
      if (i) i.className = "fa-solid fa-pause";
    }).catch(() => {
      alert("Impossible de lire le fichier audio.");
    });
  }

  // Toggle Google Forms panels
  function setupFormToggles() {
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".form-trigger");
      if (!btn) return;

      const selector = btn.getAttribute("data-target");
      if (!selector) return;

      const panel = document.querySelector(selector);
      const other = document.querySelector(selector === "#form-collectif" ? "#form-individu" : "#form-collectif");

      if (other && !other.hasAttribute("hidden")) other.setAttribute("hidden", "");

      if (panel) {
        if (panel.hasAttribute("hidden")) {
          panel.removeAttribute("hidden");
          setTimeout(() => panel.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        } else {
          panel.setAttribute("hidden", "");
        }
      }
    });
  }

  function setupShare() {
    if (!shareBtn) return;
    shareBtn.addEventListener("click", () => {
      const title = "Appel — Journée Sans Nous (18 décembre) : « Si on s'arrête, tout s'arrête ! »";
      const url = window.location.href;
      if (navigator.share) {
        navigator.share({ title, text: title, url }).catch(() => {});
      } else {
        navigator.clipboard.writeText(`${title}\n${url}`)
          .then(() => alert("Lien copié ✅"))
          .catch(() => alert(url));
      }
    });
  }

  function setupAudioButtons() {
    audioButtons = $$(".btn-audio[data-lang]");
    audioButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-lang");
        toggleAudioFor(code, btn);
      });
    });
    if (audioEl) {
      audioEl.addEventListener("ended", stopAllAudioButtons);
    }
  }

  function setupLanguageSelect() {
    if (!langSelect) return;
    langSelect.addEventListener("change", () => {
      const val = langSelect.value;
      setLanguage(val);
    });
  }

  function setupDeepLinking() {
    // React to manual URL changes (?lang=…) without reload (rare, but handy)
    window.addEventListener("popstate", () => {
      const params = new URLSearchParams(window.location.search);
      const l = params.get("lang");
      if (l && l !== currentLang && window.TRANSLATIONS[l]) {
        setLanguage(l);
      }
    });
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    // Cache DOM
    langSelect = $("#languageSelect");
    contentText = $("#contentText");
    appelRoot = $("#appelRoot");
    audioEl = $("#audioPlayer");
    shareBtn = $("#shareButton");

    // Guard
    if (!HAS_TRANSLATIONS) {
      console.error("TRANSLATIONS manquant. Assure-toi que assets/js/translations.js est chargé AVANT app.js.");
      if (contentText) contentText.innerHTML = "<p><strong>Erreur :</strong> fichier de traductions non chargé.</p>";
      return;
    }

    // Populate select from translations
    populateSelect();

    // Set initial language
    const initLang = getInitialLang();
    setLanguage(initLang);

    // Wire listeners
    setupLanguageSelect();
    setupAudioButtons();
    setupFormToggles();
    setupShare();
    setupDeepLinking();
  });
})();
