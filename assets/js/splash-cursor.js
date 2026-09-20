/* ==========================================================================
   Minimal cursor glow — a soft, brand-coloured light that trails the pointer.
   Dependency-free Canvas 2D. Lightweight, subtle, and never blocks clicks.
   (Replaces the heavier WebGL splash; tuned for a refined, minimal feel.)
   ========================================================================== */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia && window.matchMedia("(pointer: fine)").matches;
  if (reduce || !fine) return; // only for mouse users; respect reduced motion

  // Brand endpoints the glow drifts between (cyan <-> violet)
  var CYAN = [67, 219, 240];   // #43dbf0
  var VIOLET = [139, 92, 246]; // #8b5cf6

  function boot() {
    var canvas = document.createElement("canvas");
    canvas.className = "cursor-glow";
    canvas.setAttribute("aria-hidden", "true");
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0;
    function resize() {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    var mouse = { x: W / 2, y: H / 2, active: false };
    var fx = mouse.x, fy = mouse.y;              // eased follower
    var trail = [];                               // recent follower positions
    var MAX = 14;
    var hidden = false;

    window.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true;
    }, { passive: true });
    window.addEventListener("mouseout", function (e) {
      if (!e.relatedTarget) mouse.active = false;
    });
    document.addEventListener("visibilitychange", function () { hidden = document.hidden; });

    function mix(a, b, t) { return Math.round(a + (b - a) * t); }

    function frame(now) {
      requestAnimationFrame(frame);
      if (hidden) return;

      // ease the glow toward the pointer — the lag is what makes the trail
      fx += (mouse.x - fx) * 0.2;
      fy += (mouse.y - fy) * 0.2;
      trail.unshift({ x: fx, y: fy });
      if (trail.length > MAX) trail.pop();

      ctx.clearRect(0, 0, W, H);
      if (!mouse.active) return;

      // slow cyan <-> violet drift
      var t = (now || 0) * 0.00035;
      var m = Math.sin(t) * 0.5 + 0.5;
      var r = mix(CYAN[0], VIOLET[0], m);
      var g = mix(CYAN[1], VIOLET[1], m);
      var b = mix(CYAN[2], VIOLET[2], m);

      ctx.globalCompositeOperation = "lighter";
      for (var i = 0; i < trail.length; i++) {
        var p = trail[i];
        var f = 1 - i / trail.length;          // newest = brightest / largest
        var radius = 5 + 30 * f;
        var alpha = 0.16 * f * f;              // very soft
        var grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius);
        grad.addColorStop(0, "rgba(" + r + "," + g + "," + b + "," + alpha + ")");
        grad.addColorStop(1, "rgba(" + r + "," + g + "," + b + ",0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    }
    requestAnimationFrame(frame);
  }

  if (document.readyState !== "loading") boot();
  else document.addEventListener("DOMContentLoaded", boot);
})();
