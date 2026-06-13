(() => {
  const copyButtons = document.querySelectorAll('[data-copy-example]');
  const filters = document.querySelectorAll('[data-example-filter]');
  const items = document.querySelectorAll('[data-example-category]');
  const liveRegion = document.querySelector('[data-example-live]');
  const announce = (message) => { if (liveRegion) liveRegion.textContent = message; };
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
  const setCopiedState = (button, copied) => { button.classList.toggle('is-copied', copied); button.setAttribute('aria-pressed', copied ? 'true' : 'false'); button.textContent = copied ? 'Copied' : (button.getAttribute('data-copy-label') || 'Copy example'); };
  copyButtons.forEach((button) => {
    const original = button.textContent || button.getAttribute('data-copy-label') || 'Copy example';
    let timer = null;
    button.addEventListener('click', async () => {
      const text = button.getAttribute('data-copy-example');
      if (!text) return;
      try { await copyText(text); setCopiedState(button, true); announce('Example copied to clipboard.'); } catch { announce('Copy failed.'); }
      window.clearTimeout(timer);
      timer = window.setTimeout(() => { button.textContent = original; setCopiedState(button, false); }, 1600);
    });
  });
  const applyFilter = (value) => {
    items.forEach((item) => { item.hidden = !(value === 'all' || item.getAttribute('data-example-category') === value); });
    filters.forEach((filter) => { filter.setAttribute('aria-pressed', filter.getAttribute('data-example-filter') === value ? 'true' : 'false'); });
  };
  filters.forEach((filter) => { filter.addEventListener('click', () => applyFilter(filter.getAttribute('data-example-filter') || 'all')); filter.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); filter.click(); } }); });
  if (filters.length) applyFilter(filters[0].getAttribute('data-example-filter') || 'all');
})();
