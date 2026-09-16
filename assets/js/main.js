/* ==========================================================================
   Elevate Automation — site interactions (dependency-free)
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Sticky header state ---------- */
  var header = $("#siteHeader");
  var toTop = $("#toTop");
  function onScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 12);
    if (toTop) toTop.classList.toggle("show", y > 640);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Mobile navigation ---------- */
  var toggle = $("#navToggle");
  var menu = $("#navMenu");
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.removeProperty("overflow");
  }
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", closeMenu); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
    window.addEventListener("resize", function () { if (window.innerWidth > 860) closeMenu(); });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var decimals = (el.getAttribute("data-decimals") || "0") | 0;
    var suffix = el.getAttribute("data-suffix") || "";
    var prefix = el.getAttribute("data-prefix") || "";
    if (reduceMotion) { el.textContent = prefix + target.toFixed(decimals) + suffix; return; }
    var dur = 1500, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + (target * eased).toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(step);
  }
  var counters = $$("[data-count]");
  if (counters.length) {
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { animateCount(en.target); cio.unobserve(en.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(animateCount);
    }
  }

  /* ---------- FAQ: single-open accordion ---------- */
  var faqItems = $$(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) { if (other !== item) other.open = false; });
      }
    });
  });

  /* ---------- WhatsApp chat player ---------- */
  // Reveals pre-written bubbles sequentially, showing a typing indicator
  // before each inbound (AI) message. Works on any .wa-body container.
  function playChat(body, opts) {
    opts = opts || {};
    var bubbles = $$(".bubble", body);
    if (!bubbles.length) return;
    if (reduceMotion) { bubbles.forEach(function (b) { b.classList.add("show"); }); return; }

    // reset
    bubbles.forEach(function (b) { b.classList.remove("show"); });
    var typing = $(".typing", body);
    if (typing) typing.remove();

    var i = 0;
    function scrollDown() { body.scrollTop = body.scrollHeight; }
    function showTyping(cb, wait) {
      var t = document.createElement("div");
      t.className = "typing";
      t.innerHTML = "<span></span><span></span><span></span>";
      body.appendChild(t);
      scrollDown();
      setTimeout(function () { t.remove(); cb(); }, wait);
    }
    function next() {
      if (i >= bubbles.length) { if (opts.onDone) opts.onDone(); return; }
      var b = bubbles[i];
      var isIn = b.classList.contains("in");
      var reveal = function () {
        b.classList.add("show");
        scrollDown();
        i++;
        setTimeout(next, isIn ? 850 : 550);
      };
      if (isIn) showTyping(reveal, 1000 + Math.random() * 500);
      else setTimeout(reveal, 350);
    }
    next();
  }

  // Auto-play any chat with data-autoplay when scrolled into view
  $$("[data-autoplay] .wa-body, .wa-body[data-autoplay]").forEach(function (body) {
    var played = false;
    if ("IntersectionObserver" in window) {
      var pio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && !played) { played = true; setTimeout(function () { playChat(body); }, 400); }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -6% 0px" });
      pio.observe(body);
    } else {
      playChat(body);
    }
  });

  // Replay buttons
  $$("[data-replay]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = $(btn.getAttribute("data-replay"));
      if (body) playChat(body);
    });
  });

  /* ---------- Contact form → WhatsApp / email ---------- */
  var form = $("#contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get("name") || "").toString().trim();
      var company = (data.get("company") || "").toString().trim();
      var email = (data.get("email") || "").toString().trim();
      var phone = (data.get("phone") || "").toString().trim();
      var interest = (data.get("interest") || "").toString().trim();
      var message = (data.get("message") || "").toString().trim();

      var lines = [
        "New enquiry from the Elevate Automation website",
        "",
        "Name: " + name,
        company ? "Company: " + company : "",
        "Email: " + email,
        phone ? "Phone: " + phone : "",
        interest ? "Interested in: " + interest : "",
        message ? "" : null,
        message ? "Message:" : "",
        message
      ].filter(function (l) { return l !== "" && l !== null; });
      var text = lines.join("\n");

      var mode = form.getAttribute("data-mode") || "whatsapp";
      var wa = form.getAttribute("data-wa") || "918200191137";
      var mail = form.getAttribute("data-email") || "team@elevateautomation.in";

      var success = $("#formSuccess");
      if (success) {
        success.classList.add("show");
        success.textContent = "Thanks, " + (name || "there") + "! Opening " +
          (mode === "email" ? "your email app" : "WhatsApp") + " so you can send this to our team…";
      }

      setTimeout(function () {
        if (mode === "email") {
          window.location.href = "mailto:" + mail +
            "?subject=" + encodeURIComponent("Website enquiry — " + (company || name)) +
            "&body=" + encodeURIComponent(text);
        } else {
          window.open("https://wa.me/" + wa + "?text=" + encodeURIComponent(text), "_blank", "noopener");
        }
      }, 600);

      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- Subtle pointer parallax on hero glow ---------- */
  var heroGlow = $(".hero-glow");
  if (heroGlow && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 22;
      var y = (e.clientY / window.innerHeight - 0.5) * 22;
      heroGlow.style.transform = "translate(" + x + "px," + y + "px)";
    }, { passive: true });
  }
})();
