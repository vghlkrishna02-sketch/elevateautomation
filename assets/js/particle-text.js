/* ==========================================================================
   ParticleText — vanilla-JS adaptation (canvas particle headline)
   Auto-initialises any element with [data-particle-text]. Dependency-free.
   ========================================================================== */
(function () {
  "use strict";

  var hexToRgb = function (hex) {
    var clean = String(hex).replace("#", "").trim();
    if (!/^[0-9a-fA-F]{6}$/.test(clean)) return null;
    return {
      r: parseInt(clean.slice(0, 2), 16),
      g: parseInt(clean.slice(2, 4), 16),
      b: parseInt(clean.slice(4, 6), 16)
    };
  };
  var mixRgb = function (from, to, a) {
    return {
      r: Math.round(from.r + (to.r - from.r) * a),
      g: Math.round(from.g + (to.g - from.g) * a),
      b: Math.round(from.b + (to.b - from.b) * a)
    };
  };
  var rgbToCss = function (c) { return "rgb(" + c.r + ", " + c.g + ", " + c.b + ")"; };
  var clamp = function (v, min, max) { return Math.min(Math.max(v, min), max); };
  var easeOutCubic = function (t) { return 1 - Math.pow(1 - t, 3); };

  var resolveFontSize = function (value, container, fontWeight, fontFamily) {
    if (typeof value === "number") return value;
    var probe = document.createElement("span");
    probe.textContent = "M";
    probe.style.position = "absolute";
    probe.style.visibility = "hidden";
    probe.style.pointerEvents = "none";
    probe.style.fontSize = value;
    probe.style.fontWeight = String(fontWeight);
    probe.style.fontFamily = fontFamily;
    container.appendChild(probe);
    var size = parseFloat(window.getComputedStyle(probe).fontSize) || 96;
    probe.remove();
    return size;
  };

  var waitForFonts = function (font) {
    return new Promise(function (resolve) {
      if (!("fonts" in document)) { resolve(); return; }
      var done = function () { resolve(); };
      try { document.fonts.load(font).then(function () { document.fonts.ready.then(done, done); }, function () { document.fonts.ready.then(done, done); }); }
      catch (e) { resolve(); }
    });
  };

  function initParticleText(container, opts) {
    opts = opts || {};
    var text = opts.text != null ? opts.text : "Elevate Automation";
    var particleSize = opts.particleSize || 2;
    var density = opts.density || 4;
    var color = opts.color || "#0e1f3a";
    var highlightColor = opts.highlightColor || "#2e7be6";
    var scatter = opts.scatter != null ? opts.scatter : 180;
    var gatherDuration = opts.gatherDuration != null ? opts.gatherDuration : 1600;
    var stagger = opts.stagger != null ? opts.stagger : 420;
    var pointerRepel = opts.pointerRepel != null ? opts.pointerRepel : 40;
    var repelRadius = opts.repelRadius != null ? opts.repelRadius : 120;
    var idleDrift = opts.idleDrift != null ? opts.idleDrift : 0.7;
    var trigger = opts.trigger || "mount";
    var fontSize = opts.fontSize != null ? opts.fontSize : "clamp(3rem, 12vw, 8rem)";
    var fontWeight = opts.fontWeight != null ? opts.fontWeight : 800;
    var fontFamily = opts.fontFamily || "inherit";
    var glow = opts.glow !== false;

    var canvas = container.querySelector(".particle-text__canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "particle-text__canvas";
      canvas.setAttribute("aria-hidden", "true");
      container.appendChild(canvas);
    }
    var ctx = canvas.getContext("2d");
    if (!ctx) return function () {};

    var particles = [];
    var animationFrame = null;
    var resizeFrame = null;
    var buildId = 0;
    var gathering = false;
    var gatherStart = 0;
    var reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;
    var width = 0, height = 0, dpr = 1;
    var pointer = { active: false, x: 0, y: 0, smoothX: 0, smoothY: 0 };

    function startGather(fromScatter) {
      if (!particles.length) return;
      var now = performance.now();
      var spread = reducedMotion ? 0 : scatter;
      particles.forEach(function (p) {
        if (fromScatter) {
          var angle = p.seed * Math.PI * 2;
          var distance = spread * (0.35 + p.depth * 0.75);
          p.x = p.targetX + Math.cos(angle) * distance + (p.depth - 0.5) * spread * 0.55;
          p.y = p.targetY + Math.sin(angle) * distance + (p.seed - 0.5) * spread * 0.55;
        }
        p.startX = p.x;
        p.startY = p.y;
        p.delay = reducedMotion ? 0 : p.seed * stagger;
      });
      gatherStart = now;
      gathering = true;
    }

    function drawParticle(p) {
      var size = p.size;
      ctx.fillStyle = p.color;
      if (size <= 2.1) { ctx.fillRect(p.x - size / 2, p.y - size / 2, size, size); return; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, size / 2, 0, Math.PI * 2);
      ctx.fill();
    }

    function render(now) {
      ctx.clearRect(0, 0, width, height);
      if (glow && !reducedMotion) { ctx.shadowBlur = particleSize * 3; ctx.shadowColor = highlightColor; }
      else { ctx.shadowBlur = 0; }

      pointer.smoothX += (pointer.x - pointer.smoothX) * 0.18;
      pointer.smoothY += (pointer.y - pointer.smoothY) * 0.18;

      var complete = true;
      particles.forEach(function (p) {
        var baseX = p.targetX, baseY = p.targetY, progress = 1;
        if (gathering) {
          var local = (now - gatherStart - p.delay) / Math.max(1, reducedMotion ? 1 : gatherDuration);
          progress = clamp(local, 0, 1);
          var eased = easeOutCubic(progress);
          baseX = p.startX + (p.targetX - p.startX) * eased;
          baseY = p.startY + (p.targetY - p.startY) * eased;
          if (progress < 1) complete = false;
        } else if (!reducedMotion && idleDrift > 0) {
          var t = now * 0.001;
          baseX += Math.sin(t * 0.9 + p.seed * 10) * idleDrift * p.depth;
          baseY += Math.cos(t * 0.75 + p.depth * 10) * idleDrift * p.depth;
        }
        if (pointer.active && !reducedMotion && pointerRepel > 0 && repelRadius > 0) {
          var dx = baseX - pointer.smoothX, dy = baseY - pointer.smoothY;
          var distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < repelRadius) {
            var force = Math.pow(1 - distance / repelRadius, 2) * pointerRepel;
            baseX += (dx / distance) * force;
            baseY += (dy / distance) * force;
          }
        }
        var follow = reducedMotion ? 1 : 0.22;
        p.x += (baseX - p.x) * follow;
        p.y += (baseY - p.y) * follow;
        ctx.globalAlpha = clamp(0.35 + progress * 0.65, 0, 1);
        drawParticle(p);
      });

      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      if (gathering && complete) gathering = false;
      animationFrame = window.requestAnimationFrame(render);
    }

    function ensureRenderLoop() {
      if (animationFrame === null) animationFrame = window.requestAnimationFrame(render);
    }

    function sampleText() {
      var currentBuild = ++buildId;
      var rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      if (width <= 0 || height <= 0) return;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      var computed = window.getComputedStyle(container);
      var resolvedFamily = fontFamily === "inherit" ? (computed.fontFamily || "sans-serif") : fontFamily;
      var resolvedSize = resolveFontSize(fontSize, container, fontWeight, resolvedFamily);
      var font = fontWeight + " " + resolvedSize + "px " + resolvedFamily;

      waitForFonts(font).then(function () {
        if (currentBuild !== buildId) return;
        var offscreen = document.createElement("canvas");
        var offCtx = offscreen.getContext("2d", { willReadFrequently: true });
        if (!offCtx) return;

        var content = String(text || " ");
        var maxTextWidth = width * 0.92;
        offCtx.font = font;
        var metrics = offCtx.measureText(content);
        var measuredWidth = Math.max(1, metrics.width);
        if (measuredWidth > maxTextWidth) {
          resolvedSize = Math.max(18, resolvedSize * (maxTextWidth / measuredWidth));
          font = fontWeight + " " + resolvedSize + "px " + resolvedFamily;
          offCtx.font = font;
          metrics = offCtx.measureText(content);
        }

        var left = Math.ceil(metrics.actualBoundingBoxLeft || 0);
        var right = Math.ceil(metrics.actualBoundingBoxRight || metrics.width);
        var ascent = Math.ceil(metrics.actualBoundingBoxAscent || resolvedSize * 0.78);
        var descent = Math.ceil(metrics.actualBoundingBoxDescent || resolvedSize * 0.22);
        var padding = Math.max(12, Math.ceil(resolvedSize * 0.08));
        var textWidth = Math.max(1, left + right);
        var textHeight = Math.max(1, ascent + descent);

        offscreen.width = textWidth + padding * 2;
        offscreen.height = textHeight + padding * 2;
        offCtx.clearRect(0, 0, offscreen.width, offscreen.height);
        offCtx.font = font;
        offCtx.textAlign = "left";
        offCtx.textBaseline = "alphabetic";
        offCtx.fillStyle = "#ffffff";
        offCtx.fillText(content, padding - left, padding + ascent);

        var imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
        var targets = [];
        var step = Math.max(2, Math.floor(density));
        for (var y = 0; y < offscreen.height; y += step) {
          for (var x = 0; x < offscreen.width; x += step) {
            var alpha = imageData.data[(y * offscreen.width + x) * 4 + 3];
            if (alpha > 40) {
              targets.push({
                x: width / 2 - offscreen.width / 2 + x,
                y: height / 2 - offscreen.height / 2 + y,
                alpha: alpha / 255
              });
            }
          }
        }

        var maxParticles = Math.max(900, Math.min(5200, Math.floor((width * height) / 90)));
        var stride = Math.max(1, Math.ceil(targets.length / maxParticles));
        var baseRgb = hexToRgb(color);
        var highlightRgb = hexToRgb(highlightColor);
        var selected = targets.filter(function (_, i) { return i % stride === 0; });

        particles = selected.map(function (target, index) {
          var seed = ((index * 9301 + 49297) % 233280) / 233280;
          var depth = 0.45 + (((index * 233 + 97) % 1000) / 1000) * 0.9;
          var blend = baseRgb && highlightRgb ? clamp(target.x / Math.max(1, width) + (seed - 0.5) * 0.35, 0, 1) : 0;
          var particleColor = baseRgb && highlightRgb ? rgbToCss(mixRgb(baseRgb, highlightRgb, blend)) : color;
          var angle = seed * Math.PI * 2;
          var distance = (reducedMotion ? 0 : scatter) * (0.35 + depth * 0.75);
          var startX = target.x + Math.cos(angle) * distance + (seed - 0.5) * scatter * 0.45;
          var startY = target.y + Math.sin(angle) * distance + (depth - 0.9) * scatter * 0.45;
          return {
            x: reducedMotion ? target.x : startX,
            y: reducedMotion ? target.y : startY,
            startX: startX, startY: startY,
            targetX: target.x, targetY: target.y,
            size: Math.max(0.6, particleSize * (0.75 + target.alpha * 0.45)),
            color: particleColor, seed: seed, depth: depth, delay: seed * stagger
          };
        });

        pointer.x = width / 2; pointer.y = height / 2;
        pointer.smoothX = pointer.x; pointer.smoothY = pointer.y;

        if (reducedMotion) {
          particles.forEach(function (p) { p.x = p.targetX; p.y = p.targetY; p.startX = p.targetX; p.startY = p.targetY; p.delay = 0; });
          gathering = false;
        } else {
          startGather(false);
        }
        ensureRenderLoop();
      });
    }

    function queueSample() {
      if (resizeFrame) window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(sampleText);
    }
    function handlePointerMove(e) {
      var rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }
    function handlePointerLeave() { pointer.active = false; }
    function handlePointerEnter(e) { handlePointerMove(e); if (trigger === "hover") startGather(true); }
    function handleClick() { if (trigger === "click") startGather(true); }

    canvas.addEventListener("pointerenter", handlePointerEnter);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    canvas.addEventListener("click", handleClick);

    var resizeObserver = new ResizeObserver(queueSample);
    resizeObserver.observe(container);
    sampleText();

    return function cleanup() {
      buildId += 1;
      resizeObserver.disconnect();
      canvas.removeEventListener("pointerenter", handlePointerEnter);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.removeEventListener("click", handleClick);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
    };
  }

  function num(el, attr, def) { var v = el.getAttribute(attr); return v == null ? def : parseFloat(v); }

  function boot() {
    var els = Array.prototype.slice.call(document.querySelectorAll("[data-particle-text]"));
    els.forEach(function (el) {
      initParticleText(el, {
        text: el.getAttribute("data-particle-text") || "Elevate Automation",
        color: el.getAttribute("data-color") || "#0e1f3a",
        highlightColor: el.getAttribute("data-highlight") || "#2e7be6",
        trigger: el.getAttribute("data-trigger") || "hover",
        glow: el.getAttribute("data-glow") !== "false",
        particleSize: num(el, "data-particle-size", 2),
        density: num(el, "data-density", 4),
        scatter: num(el, "data-scatter", 180),
        gatherDuration: num(el, "data-gather", 1500),
        stagger: num(el, "data-stagger", 380),
        pointerRepel: num(el, "data-repel", 40),
        repelRadius: num(el, "data-repel-radius", 120),
        idleDrift: num(el, "data-idle", 0.6),
        fontSize: el.getAttribute("data-font-size") || "clamp(2.4rem, 9vw, 5rem)",
        fontWeight: num(el, "data-font-weight", 800),
        fontFamily: el.getAttribute("data-font-family") || "inherit"
      });
    });
  }

  window.initParticleText = initParticleText;
  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
