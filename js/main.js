  const scrollLine = document.getElementById('scroll-line');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    scrollLine.style.width = progress + '%';
  }, { passive: true });

  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // Before/After slider
  const slider = document.getElementById('heroSlider');
  if (slider) {
    const before = slider.querySelector('.ba-before');
    const handle = slider.querySelector('.ba-handle');
    let dragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pct = Math.min(Math.max((x - rect.left) / rect.width, 0.02), 0.98);
      before.style.clipPath = `inset(0 ${(1 - pct) * 100}% 0 0)`;
      handle.style.left = (pct * 100) + '%';
    }

    slider.addEventListener('mousedown', e => { dragging = true; setPosition(e.clientX); });
    window.addEventListener('mousemove', e => { if (dragging) setPosition(e.clientX); });
    window.addEventListener('mouseup', () => { dragging = false; });

    slider.addEventListener('touchstart', e => { dragging = true; setPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchmove', e => { if (dragging) setPosition(e.touches[0].clientX); }, { passive: true });
    window.addEventListener('touchend', () => { dragging = false; });
  }

  // Sticky mobile CTA: show after hero, hide near final CTA/footer
  const stickyCta = document.getElementById('sticky-cta');
  const heroEl = document.getElementById('hero');
  const footerEl = document.querySelector('footer');
  function updateSticky() {
    const heroBottom = heroEl.getBoundingClientRect().bottom;
    const footerTop = footerEl.getBoundingClientRect().top;
    const shouldShow = heroBottom < 0 && footerTop > window.innerHeight;
    stickyCta.classList.toggle('visible', shouldShow);
  }
  window.addEventListener('scroll', updateSticky, { passive: true });
  updateSticky();