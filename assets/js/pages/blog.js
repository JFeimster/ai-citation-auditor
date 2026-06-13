(() => {
  const toc = document.querySelector('[data-article-toc]');
  const readingTime = document.querySelector('[data-reading-time]');
  const copyUrlButtons = document.querySelectorAll('[data-copy-url]');
  const article = document.querySelector('[data-article-content]');
  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  };
  if (readingTime && article) {
    const words = (article.textContent || '').trim().split(/\s+/).filter(Boolean).length;
    readingTime.textContent = `${Math.max(1, Math.round(words / 220))} min read`;
  }
  copyUrlButtons.forEach((button) => {
    const original = button.textContent || 'Copy URL';
    let timer = null;
    button.addEventListener('click', async () => {
      try { await copyText(window.location.href); button.textContent = 'Copied'; } catch { button.textContent = 'Copy failed'; }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => { button.textContent = original; }, 1600);
    });
  });
  if (!toc || !article) return;
  const headings = Array.from(article.querySelectorAll('h2[id]'));
  if (!headings.length) return;
  const list = document.createElement('ul');
  const tocLinks = new Map();
  headings.forEach((heading) => { const item = document.createElement('li'); const link = document.createElement('a'); link.href = `#${heading.id}`; link.textContent = heading.textContent || heading.id; item.appendChild(link); list.appendChild(item); tocLinks.set(heading.id, link); });
  toc.appendChild(list);
  const setActive = (id) => tocLinks.forEach((link, key) => link.toggleAttribute('aria-current', key === id));
  const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible?.target?.id) setActive(visible.target.id); }, { rootMargin: '-20% 0px -70% 0px', threshold: [0.1, 0.2, 0.4, 0.6] });
  headings.forEach((heading) => observer.observe(heading));
  setActive(headings[0].id);
})();
