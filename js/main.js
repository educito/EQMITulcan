(function () {
  'use strict';
  var data = window.TALLERES || [];
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var el = function (tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ── Cuenta regresiva (hora de Ecuador, UTC-5) ── */
  var START = new Date('2026-11-24T08:00:00-05:00').getTime();
  var END = new Date('2026-11-27T11:00:00-05:00').getTime();
  var two = function (n) { return String(n).padStart(2, '0'); };
  var timer;
  function tick() {
    var now = Date.now();
    if (now >= START) {
      $('#cdGrid').hidden = true;
      $('#cdLabel').textContent = now < END ? '¡El campamento está en marcha!' : '¡Gracias por ser parte del campamento!';
      clearInterval(timer);
      return;
    }
    var s = Math.floor((START - now) / 1000);
    $('#cdD').textContent = two(Math.floor(s / 86400));
    $('#cdH').textContent = two(Math.floor(s / 3600) % 24);
    $('#cdM').textContent = two(Math.floor(s / 60) % 60);
    $('#cdS').textContent = two(s % 60);
  }
  tick();
  timer = setInterval(tick, 1000);

  /* ── Navegación ── */
  var nav = $('#nav'), toggle = $('#navToggle'), links = $('#navLinks');
  var setNav = function () { nav.classList.toggle('is-solid', window.scrollY > 40); };
  window.addEventListener('scroll', setNav, { passive: true });
  setNav();
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { links.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  });

  /* ── Tarjetas ── */
  var cards = $('#cards');
  function tagRow(t) {
    var p = el('p', 'tag');
    p.append(el('span', '', t.institucion), el('span', t.tipo === 'Hackatón' ? 't-hack' : '', t.tipo));
    return p;
  }
  data.forEach(function (t) {
    var c = el('button', 'card' + (t.tipo === 'Hackatón' ? ' is-hack' : ''));
    c.type = 'button';
    c.dataset.tipo = t.tipo;
    c.dataset.publico = t.publico.join(' ');
    c.setAttribute('aria-label', t.titulo + ': ver detalle');
    var meta = el('p', 'card-meta');
    var cup = el('span'); cup.append(el('b', '', t.participantes), document.createTextNode(' cupos · ' + t.lugar));
    meta.append(cup, el('span', 'card-more', 'Ver más →'));
    c.append(el('span', 'card-num', two(t.id)), tagRow(t), el('h3', '', t.titulo), el('p', '', t.dirigido), meta);
    c.addEventListener('click', function () { openModal(t); });
    cards.append(c);
  });

  /* ── Filtros ── */
  var chips = $$('.chip');
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter, n = 0;
      chips.forEach(function (x) { x.classList.toggle('is-on', x === chip); x.setAttribute('aria-pressed', x === chip); });
      $$('.card', cards).forEach(function (c) {
        var show = f === 'all' || c.dataset.tipo === f || c.dataset.publico.split(' ').indexOf(f) > -1;
        c.hidden = !show;
        if (show) {
          n++;
          if (window.gsap) gsap.fromTo(c, { autoAlpha: 0, y: 24, rotateX: -25 }, { autoAlpha: 1, y: 0, rotateX: 0, duration: .5, delay: n * .03, ease: 'back.out(1.6)' });
        }
      });
      $('#filterStatus').textContent = n + (n === 1 ? ' actividad' : ' actividades');
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  });

  /* ── Detalle (modal) ── */
  var modal = $('#modal'), body = $('#modalBody');
  function meta(label, value) { var d = el('div'); d.append(el('b', '', label), document.createTextNode(value)); return d; }
  function ueList(list) {
    var d = el('details'); d.append(el('summary', '', 'Instituciones convocadas (' + list.length + ')'));
    var ul = el('ul', 'ue-list'); list.forEach(function (u) { ul.append(el('li', '', u)); }); d.append(ul);
    return d;
  }
  function openModal(t) {
    var w = el('div', 'm-in');
    var h = el('h2', '', t.titulo); h.id = 'mTitle';
    w.append(tagRow(t), h);
    var m = el('div', 'm-meta');
    m.append(meta('Dirigido a', t.dirigido), meta('Cupos', t.cupos), meta('Lugar', t.lugar));
    if (t.apoyo && t.apoyo.length) m.append(meta('Facilitadores', t.apoyo.join(' · ')));
    w.append(m);
    t.descripcion.forEach(function (p) { w.append(el('p', '', p)); });
    if (t.impacto) { var i = el('p', 'm-impact'); i.append(el('b', '', 'Impacto en la educación'), document.createTextNode(t.impacto)); w.append(i); }
    if (t.nota) w.append(el('p', 'm-note', t.nota));
    w.append(el('h3', '', 'Horarios'));
    t.grupos.forEach(function (g) {
      var box = el('div', 'm-group');
      var b = el('b', '', g.nombre + ' '); b.append(el('span', '', '· ' + g.detalle));
      var ul = el('ul');
      g.sesiones.forEach(function (s) { var li = el('li'); li.append(el('span', '', s.dia), el('time', '', s.hora), el('span', '', s.actividad)); ul.append(li); });
      box.append(b, ul);
      if (g.instituciones) box.append(ueList(g.instituciones));
      w.append(box);
    });
    if (t.instituciones) w.append(ueList(t.instituciones));
    body.replaceChildren(w);
    modal.showModal();
    modal.scrollTop = 0;
  }
  $('#modalClose').addEventListener('click', function () { modal.close(); });
  modal.addEventListener('click', function (e) { if (e.target === modal) modal.close(); });

  /* ── Animaciones en scroll ── */
  if (!window.gsap || !window.ScrollTrigger) return; // sin CDN el sitio queda completo y estático
  gsap.registerPlugin(ScrollTrigger);
  var mm = gsap.matchMedia();

  mm.add({ motion: '(prefers-reduced-motion: no-preference)', wide: '(min-width: 861px)' }, function (ctx) {
    if (!ctx.conditions.motion) return;
    var wide = ctx.conditions.wide;
    document.documentElement.classList.add('js-motion');

    /* 1 · HERO: el logotipo entra por capas; Eugenia llega flotando y el gato salta */
    gsap.from('.logotype span', { y: 60, autoAlpha: 0, duration: .9, stagger: .12, ease: 'power3.out' });
    gsap.from('.lt-2 b', { rotate: -200, scale: .2, duration: 1.2, delay: .35, ease: 'elastic.out(1, .55)' });
    gsap.from('.hero-band', { xPercent: -110, duration: .9, delay: .45, ease: 'power4.out' });
    gsap.from('.hero-sub, .countdown, .hero-kicker', { autoAlpha: 0, y: 20, duration: .7, delay: .6, stagger: .08 });
    gsap.from('.hc-eugenia', { x: 160, y: -90, rotate: 18, autoAlpha: 0, duration: 1.6, delay: .6, ease: 'power3.out' });
    gsap.from('.hc-gato', { y: 140, rotate: -10, autoAlpha: 0, duration: 1.1, delay: .9, ease: 'back.out(1.6)' });
    gsap.to('.hc-eugenia', { y: -16, rotate: -2, duration: 2.6, delay: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    var heroTl = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    heroTl
      .to('.hero-photo img', { scale: 1.18, yPercent: 8, ease: 'none' }, 0)
      .to('.lt-1', { xPercent: -18, ease: 'none' }, 0)
      .to('.lt-3', { xPercent: 18, ease: 'none' }, 0)
      .to('.lt-2', { letterSpacing: '0.02em', ease: 'none' }, 0)
      .to('.hc-eugenia', { xPercent: 35, yPercent: -45, rotation: 14, ease: 'none' }, 0)
      .to('.hc-gato', { xPercent: -25, yPercent: 50, ease: 'none' }, 0);

    /* 2 · HOLOGRAMA: Eugenia llega flotando, el gato salta y los anillos se encienden */
    var growTl = gsap.timeline({ scrollTrigger: { trigger: '.grow', start: 'top top', end: 'bottom bottom', scrub: .8 } });
    growTl
      .from('.grow-copy > *', { autoAlpha: 0, x: -50, stagger: .08, duration: .3 }, 0)
      .from('.holo-ring', { scale: 0, autoAlpha: 0, stagger: .06, duration: .3, ease: 'back.out(1.6)' }, .05)
      .to('.holo-ring.r1', { rotation: 360, duration: 1, ease: 'none' }, 0)
      .to('.holo-ring.r3', { rotation: -120, duration: 1, ease: 'none' }, 0)
      .fromTo('.gc-eugenia', { xPercent: 70, yPercent: -70, rotation: 28, autoAlpha: 0 }, { xPercent: 0, yPercent: 0, rotation: 0, autoAlpha: 1, duration: .45, ease: 'power2.out' }, .12)
      .fromTo('.gc-gato', { xPercent: -90, yPercent: 30, rotation: -18, autoAlpha: 0 }, { xPercent: 0, yPercent: 0, rotation: 0, autoAlpha: 1, duration: .4, ease: 'back.out(1.5)' }, .3)
      .to('.gc-eugenia', { y: -24, rotation: -3, duration: .2, yoyo: true, repeat: 1, ease: 'sine.inOut' }, .6)
      .to('.gc-gato', { y: -26, duration: .1, yoyo: true, repeat: 3, ease: 'power1.out' }, .62);
    $$('.spark').forEach(function (sp, i) {
      var a = i / 8 * Math.PI * 2, r = gsap.utils.random(160, 300);
      growTl.fromTo(sp, { opacity: 0, x: 0, y: 0, scale: .4 },
        { opacity: 1, x: Math.cos(a) * r, y: Math.sin(a) * r, scale: 1.4, duration: .3, ease: 'power2.out' }, .45 + i * .02)
        .to(sp, { opacity: 0, duration: .1 }, '>-0.05');
    });

    /* 3 · Revelados genéricos */
    $$('.reveal').forEach(function (r) {
      gsap.to(r, { autoAlpha: 1, y: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: r, start: 'top 88%' } });
    });

    /* Cifras que cuentan */
    $$('.stat b').forEach(function (b) {
      var target = +b.dataset.count, o = { v: 0 };
      gsap.from(b.parentNode, { y: 30, autoAlpha: 0, duration: .6, scrollTrigger: { trigger: b, start: 'top 90%' } });
      gsap.to(o, { v: target, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: b, start: 'top 90%' },
        onUpdate: function () { b.textContent = String(Math.round(o.v)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); } });
    });

    /* 4 · PROGRAMA: la línea se llena y el gato baja día a día */
    var tl = $('#timeline');
    gsap.to('.tl-fill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 60%', end: 'bottom 60%', scrub: true } });
    gsap.fromTo('.tl-walker', { y: 0 }, {
      y: function () { return tl.offsetHeight - 90; }, ease: 'none',
      scrollTrigger: { trigger: tl, start: 'top 60%', end: 'bottom 60%', scrub: .6, invalidateOnRefresh: true,
        onUpdate: function (self) { gsap.set('.tl-walker', { rotate: Math.sin(self.progress * 40) * 9 }); } }
    });
    $$('.day').forEach(function (d, i) {
      gsap.from(d, { x: (i % 2 ? 1 : -1) * (wide ? 80 : 30), autoAlpha: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: d, start: 'top 85%' } });
      gsap.from($('.day-poster', d), { rotate: i % 2 ? 12 : -12, scale: .6, autoAlpha: 0, duration: .9, ease: 'back.out(1.7)', scrollTrigger: { trigger: d, start: 'top 80%' } });
    });

    /* 5 · TARJETAS: se voltean en cascada */
    ScrollTrigger.batch('.card', {
      start: 'top 92%',
      onEnter: function (batch) {
        gsap.fromTo(batch, { autoAlpha: 0, rotateX: -55, y: 50, transformOrigin: '50% 0%' },
          { autoAlpha: 1, rotateX: 0, y: 0, duration: .75, stagger: .07, ease: 'back.out(1.4)', overwrite: true });
      }
    });
    gsap.set('.card', { autoAlpha: 0 });

    /* 6 · ESPACIO: Eugenia cruza el cielo, el gato corre debajo y las palabras se encienden */
    var spTl = gsap.timeline({ scrollTrigger: { trigger: '.space', start: 'top top', end: 'bottom bottom', scrub: .7, invalidateOnRefresh: true } });
    spTl
      .fromTo('.space-eugenia',
        { x: function () { return -innerWidth * .45; }, y: function () { return innerHeight * .75; }, rotation: -18 },
        { x: function () { return innerWidth * 1.05; }, y: function () { return -innerHeight * .55; }, rotation: 22, ease: 'none', duration: 1 }, 0)
      .fromTo('.space-gato', { x: 320 }, { x: function () { return -innerWidth - 120; }, ease: 'none', duration: 1 }, .05)
      .to('.space-gato', { yPercent: -18, duration: .08, yoyo: true, repeat: 9, ease: 'power1.out' }, .05)
      .fromTo('.sw', { opacity: .12, scale: .85 }, { opacity: 1, scale: 1, stagger: .14, duration: .2 }, .15)
      .to('.orbit.o1', { rotation: 160, scale: 1.25, ease: 'none', duration: 1 }, 0)
      .to('.orbit.o2', { rotation: -90, scale: .85, ease: 'none', duration: 1 }, 0)
      .to('.stars', { yPercent: 12, ease: 'none', duration: 1 }, 0);

    /* 7 · CAFÉ: el afiche flota con parallax */
    gsap.to('.cafe-poster img', { yPercent: -8, rotate: -2, ease: 'none', scrollTrigger: { trigger: '.cafe', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from('.yellow-card', { xPercent: -40, autoAlpha: 0, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: '.yellow-card', start: 'top 85%' } });

    /* 8 · SEDES: los volcanes se desplazan lento */
    gsap.to('.sedes-photo img', { yPercent: -15, ease: 'none', scrollTrigger: { trigger: '.sedes', start: 'top bottom', end: 'bottom top', scrub: true } });

    /* 9 · PARTICIPA: los personajes llegan flotando */
    gsap.from('.p-eugenia', { xPercent: -80, yPercent: -40, rotation: -20, autoAlpha: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.participa-box', start: 'top 75%' } });
    gsap.from('.p-gato', { xPercent: 80, autoAlpha: 0, duration: 1, delay: .2, ease: 'back.out(1.5)', scrollTrigger: { trigger: '.participa-box', start: 'top 75%' } });
    gsap.to('.p-eugenia', { y: -12, duration: 2.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
    gsap.to('.p-gato', { rotation: 4, duration: 1, yoyo: true, repeat: -1, ease: 'sine.inOut', transformOrigin: '60% 100%', delay: .3 });

    return function () { document.documentElement.classList.remove('js-motion'); };
  });
})();
