(function () {

  // ── STARFIELD ──────────────────────────────────────────────────────────────
  var c = document.getElementById('stars-canvas');
  var ctx = c.getContext('2d');
  var W, H, stars = [];

  function resizeStars() {
    W = c.width  = window.innerWidth;
    H = c.height = Math.max(document.body.scrollHeight, window.innerHeight);
  }
  function initStars() {
    resizeStars();
    stars = [];
    for (var i = 0; i < 180; i++) {
      stars.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        r:  Math.random() * 1.4 + 0.3,
        a:  Math.random(),
        da: (Math.random() - 0.5) * 0.005
      });
    }
  }
  function drawStars() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.a = Math.max(0.08, Math.min(1, s.a + s.da));
      if (s.a <= 0.08 || s.a >= 1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(180,200,255,' + s.a + ')';
      ctx.fill();
    }
    requestAnimationFrame(drawStars);
  }
  window.addEventListener('resize', initStars);
  initStars();
  drawStars();

  // ── HERO SCROLL CTA ────────────────────────────────────────────────────────
  var heroCtaBtn = document.getElementById('hero-cta-btn');
  if (heroCtaBtn) {
    heroCtaBtn.addEventListener('click', function () {
      var section = document.getElementById('tracks-section');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  // ── NEW-TO-BOB MODAL ───────────────────────────────────────────────────────
  var ntbOverlay = document.getElementById('ntb-overlay');

  function openNtb(startTab) {
    if (!ntbOverlay) return;
    ntbOverlay.classList.add('active');
    if (startTab) ntbSwitchTab(startTab);
    var closeBtn = document.getElementById('ntb-close');
    if (closeBtn) closeBtn.focus();
  }
  function closeNtb() {
    if (ntbOverlay) ntbOverlay.classList.remove('active');
  }
  function ntbSwitchTab(num) {
    var panels = ntbOverlay.querySelectorAll('.ntb-panel');
    var tabs   = ntbOverlay.querySelectorAll('.ntb-tab');
    panels.forEach(function (p) { p.classList.remove('ntb-panel-active'); });
    tabs.forEach(function (t) {
      t.classList.remove('ntb-tab-active');
      t.setAttribute('aria-selected', 'false');
    });
    var activePanel = document.getElementById('ntb-panel-' + num);
    var activeTab   = document.getElementById('ntb-tab-' + num);
    if (activePanel) activePanel.classList.add('ntb-panel-active');
    if (activeTab)   { activeTab.classList.add('ntb-tab-active'); activeTab.setAttribute('aria-selected', 'true'); }
    tabs.forEach(function (t) {
      var n = parseInt(t.getAttribute('data-ntb-tab'), 10);
      if (n < num) t.classList.add('ntb-tab-done');
      else t.classList.remove('ntb-tab-done');
    });
  }

  var ntbBtn = document.getElementById('new-to-bob-btn');
  if (ntbBtn) ntbBtn.addEventListener('click', function () { openNtb(1); });
  if (ntbOverlay) {
    ntbOverlay.addEventListener('click', function (e) {
      var tab = e.target.closest('[data-ntb-tab]');
      if (tab) { ntbSwitchTab(parseInt(tab.getAttribute('data-ntb-tab'), 10)); return; }
      if (e.target.closest('#ntb-next-btn')) { ntbSwitchTab(2); return; }
      if (e.target === ntbOverlay) closeNtb();
    });
    var ntbCloseBtn = document.getElementById('ntb-close');
    if (ntbCloseBtn) ntbCloseBtn.addEventListener('click', closeNtb);
  }

  // ── TRACK PARTIALS LOADER ─────────────────────────────────────────────────
  // Fetches each track partial HTML file and injects it into #tracks-stream.
  // window.FLIGHT400_TRACK_PREFIX can be set before this script loads to
  // redirect partial paths (used by docs-company/ to point at ../docs/tracks/).
  var prefix = (window.FLIGHT400_TRACK_PREFIX || '') + 'tracks/';
  var TRACKS = [
    prefix + 'setup.html',
    prefix + 'track-1.html',
    prefix + 'track-2.html',
    prefix + 'track-3.html',
    prefix + 'track-4.html',
    prefix + 'track-5.html',
    prefix + 'track-6.html',
    prefix + 'track-7.html'
  ];
  var stream = document.getElementById('tracks-stream');

  function loadTracksSequential(index) {
    if (index >= TRACKS.length) {
      initCards();
      return;
    }
    fetch(TRACKS[index])
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status + ' loading ' + TRACKS[index]);
        return r.text();
      })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        while (wrapper.firstChild) stream.appendChild(wrapper.firstChild);
        loadTracksSequential(index + 1);
      })
      .catch(function (err) {
        console.warn('[FLIGHT400] Could not load track partial:', TRACKS[index], err);
        loadTracksSequential(index + 1);
      });
  }

  if (stream) {
    loadTracksSequential(0);
  }

  // ── CARD INIT (called after all partials are loaded) ──────────────────────
  function initCards() {

    // Inject Box folder link into Setup step 5 sub-step 2 if configured
    var cfg = window.FLIGHT400_CONFIG || {};
    if (cfg.boxFolderUrl) {
      var boxContainer = document.getElementById('box-folder-link-container');
      if (boxContainer) {
        boxContainer.innerHTML = ' You can find your credentials and <code>ssh_private_key.pem</code> in the <a href="' + cfg.boxFolderUrl + '" target="_blank" rel="noopener" style="color:var(--ibm-blue);font-weight:600">Box folder↗</a>.';
      }
    }

    var cards = document.querySelectorAll('.bubble-card');

    // Bubble pop-in via IntersectionObserver
    if ('IntersectionObserver' in window) {
      var cardObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Array.prototype.indexOf.call(cards, entry.target);
            var delay = Math.min(idx * 60, 420);
            setTimeout(function (t) { t.classList.add('bubble-in'); }, delay, entry.target);
            cardObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.10 });
      cards.forEach(function (card) { cardObserver.observe(card); });
    } else {
      cards.forEach(function (card) { card.classList.add('bubble-in'); });
    }

    // Card toggle: click summary to open/close
    cards.forEach(function (card) {
      var summary = card.querySelector('.card-summary');
      if (!summary) return;
      summary.addEventListener('click', function () {
        var isOpen = card.classList.contains('open');
        cards.forEach(function (c) { c.classList.remove('open'); });
        if (!isOpen) {
          card.classList.add('open');
          onTrackOpen(card.id);
          setTimeout(function () {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      });
    });

    // Use-case accordion inside cards
    document.addEventListener('click', function (e) {
      var header = e.target.closest('.use-case-header');
      if (!header) return;
      var uc = header.closest('.use-case');
      var isOpen = uc.classList.contains('uc-open');
      uc.closest('.use-cases').querySelectorAll('.use-case').forEach(function (s) {
        s.classList.remove('uc-open');
      });
      if (!isOpen) uc.classList.add('uc-open');
    });

    // Copy buttons
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.copy-btn');
      if (!btn) return;
      var box = btn.closest('.step-prompt, .prompt-box, .code-block');
      var pre = box ? box.querySelector('pre') : null;
      var text = pre ? pre.textContent : '';
      if (!text) return;
      fallbackCopy(text, btn);
    });
  }

  // ── TRACK OPEN: update global progress footer ─────────────────────────────
  var trackLabels = {
    'card-setup': 'Setup — Environment',
    'card-1':     'Exercise 1 — React Warm-Up',
    'card-2':     'Exercise 2 — Architecture Docs',
    'card-3':     'Exercise 3 — RPG Modernization',
    'card-4':     'Exercise 4 — Field Expansion',
    'card-5':     'Exercise 5 — Database Optimization',
    'card-6':     'Exercise 6 — Ask Bob About Your System',
    'card-7':     'Exercise 7 — RPGUnit Testing'
  };
  var trackColors = {
    'card-setup': '#0057B8',
    'card-1':     '#7c3aed',
    'card-2':     '#0057B8',
    'card-3':     '#1a7a4a',
    'card-4':     '#c2790a',
    'card-5':     '#c2120a',
    'card-6':     '#0078a0',
    'card-7':     '#8b5cf6'
  };

  var gfEl      = document.getElementById('global-footer');
  var gfBarEl   = document.getElementById('gf-bar');
  var gfCountEl = document.getElementById('gf-count');
  var gfNameEl  = document.getElementById('gf-track-name');
  var gfHintEl  = document.getElementById('gf-step-hint');
  var GF_KEY    = 'flight400-progress-v1';

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(GF_KEY) || '{}'); } catch (e) { return {}; }
  }
  function saveProgress(prog) {
    try { localStorage.setItem(GF_KEY, JSON.stringify(prog)); } catch (e) {}
  }

  function onTrackOpen(cardId) {
    var prog = loadProgress();
    var count = prog[cardId] || 0;
    updateGlobalFooter(cardId, count);
  }

  function updateGlobalFooter(trackId, count) {
    if (!gfEl) return;
    var label = trackLabels[trackId] || trackId;
    gfNameEl.textContent = label;
    gfHintEl.textContent = count === 0
      ? 'Copy a prompt to get started'
      : 'Paste into Bob, then continue to the next step';
    gfBarEl.style.width      = '0%';
    gfBarEl.style.background = trackColors[trackId] || 'var(--ibm-blue)';
    gfCountEl.textContent    = '';
    if (!gfEl.classList.contains('gf-visible')) {
      gfEl.classList.remove('gf-dismissing');
      requestAnimationFrame(function () { gfEl.classList.add('gf-visible'); });
    }
  }

  // ── COPY HELPER ───────────────────────────────────────────────────────────
  function fallbackCopy(text, btn) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { markCopied(btn); }).catch(function () { legacyCopy(text, btn); });
    } else {
      legacyCopy(text, btn);
    }
  }
  function legacyCopy(text, btn) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); markCopied(btn); } catch (e) {}
    document.body.removeChild(ta);
  }
  function markCopied(btn) {
    btn.textContent = '✓ Copied';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 2000);
  }

  // ── ESCAPE KEY ────────────────────────────────────────────────────────────
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNtb();
  });

})();
