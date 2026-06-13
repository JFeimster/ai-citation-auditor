/* 
  AI Citation Auditor — Landing Page Interactions
  Vanilla JS only. No dependencies.

  Features:
  - Mobile nav toggle
  - Smooth anchor scrolling
  - Active nav link highlighting
  - FAQ accordions
  - Copy audit prompt button
  - Sticky header state on scroll
  - Current year injection
*/

(function () {
  "use strict";

  const SELECTORS = {
    navToggle: "[data-nav-toggle]",
    navMenu: "[data-nav-menu]",
    navLinks: "a[href^='#']",
    header: "[data-header]",
    faqItem: "[data-faq-item]",
    faqButton: "[data-faq-button]",
    faqPanel: "[data-faq-panel]",
    copyButton: "[data-copy-prompt]",
    copySource: "[data-copy-source]",
    year: "[data-year]"
  };

  const COPY_SUCCESS_TEXT = "Copied";
  const COPY_DEFAULT_TEXT = "Copy audit prompt";
  const HEADER_SCROLLED_CLASS = "is-scrolled";
  const NAV_OPEN_CLASS = "is-open";
  const FAQ_OPEN_CLASS = "is-open";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileNav();
    initSmoothScroll();
    initActiveNavLinks();
    initFaqAccordions();
    initCopyPrompt();
    initStickyHeader();
    initCurrentYear();
  });

  function initMobileNav() {
    const toggle = document.querySelector(SELECTORS.navToggle);
    const menu = document.querySelector(SELECTORS.navMenu);

    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      const isOpen = menu.classList.toggle(NAV_OPEN_CLASS);

      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });

    menu.addEventListener("click", function (event) {
      const clickedLink = event.target.closest("a");

      if (!clickedLink) return;

      menu.classList.remove(NAV_OPEN_CLASS);
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;

      menu.classList.remove(NAV_OPEN_CLASS);
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    });
  }

  function initSmoothScroll() {
    const links = document.querySelectorAll(SELECTORS.navLinks);

    links.forEach(function (link) {
      link.addEventListener("click", function (event) {
        const href = link.getAttribute("href");

        if (!href || href === "#") return;

        const target = document.querySelector(href);

        if (!target) return;

        event.preventDefault();

        const headerOffset = getHeaderOffset();
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });

        history.pushState(null, "", href);
      });
    });
  }

  function initActiveNavLinks() {
    const sectionLinks = Array.from(document.querySelectorAll(SELECTORS.navLinks))
      .filter(function (link) {
        const href = link.getAttribute("href");
        return href && href.length > 1 && document.querySelector(href);
      });

    if (!sectionLinks.length) return;

    const sections = sectionLinks.map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          const id = entry.target.getAttribute("id");

          sectionLinks.forEach(function (link) {
            const isActive = link.getAttribute("href") === "#" + id;
            link.classList.toggle("is-active", isActive);

            if (isActive) {
              link.setAttribute("aria-current", "page");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      {
        root: null,
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px"
      }
    );

    sections.forEach(function (section) {
      if (section) observer.observe(section);
    });
  }

  function initFaqAccordions() {
    const faqItems = document.querySelectorAll(SELECTORS.faqItem);

    faqItems.forEach(function (item, index) {
      const button = item.querySelector(SELECTORS.faqButton);
      const panel = item.querySelector(SELECTORS.faqPanel);

      if (!button || !panel) return;

      const panelId = panel.id || "faq-panel-" + index;
      panel.id = panelId;

      button.setAttribute("aria-controls", panelId);
      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;

      button.addEventListener("click", function () {
        const isOpen = item.classList.contains(FAQ_OPEN_CLASS);

        closeFaqItem(item, button, panel);

        if (!isOpen) {
          openFaqItem(item, button, panel);
        }
      });
    });
  }

  function openFaqItem(item, button, panel) {
    item.classList.add(FAQ_OPEN_CLASS);
    button.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  }

  function closeFaqItem(item, button, panel) {
    item.classList.remove(FAQ_OPEN_CLASS);
    button.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  }

  function initCopyPrompt() {
    const copyButton = document.querySelector(SELECTORS.copyButton);

    if (!copyButton) return;

    copyButton.addEventListener("click", async function () {
      const source = document.querySelector(SELECTORS.copySource);
      const textToCopy = getCopyText(source);

      if (!textToCopy) return;

      try {
        await copyText(textToCopy);
        showCopySuccess(copyButton);
      } catch (error) {
        fallbackCopyText(textToCopy);
        showCopySuccess(copyButton);
      }
    });
  }

  function getCopyText(source) {
    if (!source) {
      return defaultAuditPrompt();
    }

    if (source.value) {
      return source.value.trim();
    }

    return source.textContent.trim();
  }

  async function copyText(text) {
    if (!navigator.clipboard || !window.isSecureContext) {
      throw new Error("Clipboard API unavailable");
    }

    return navigator.clipboard.writeText(text);
  }

  function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");

    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  function showCopySuccess(button) {
    const originalText = button.textContent;

    button.textContent = COPY_SUCCESS_TEXT;
    button.classList.add("is-copied");
    button.setAttribute("aria-live", "polite");

    window.setTimeout(function () {
      button.textContent = originalText || COPY_DEFAULT_TEXT;
      button.classList.remove("is-copied");
    }, 1800);
  }

  function initStickyHeader() {
    const header = document.querySelector(SELECTORS.header);

    if (!header) return;

    updateHeaderState(header);

    window.addEventListener(
      "scroll",
      function () {
        updateHeaderState(header);
      },
      { passive: true }
    );
  }

  function updateHeaderState(header) {
    const hasScrolled = window.scrollY > 12;
    header.classList.toggle(HEADER_SCROLLED_CLASS, hasScrolled);
  }

  function initCurrentYear() {
    const yearElements = document.querySelectorAll(SELECTORS.year);
    const year = new Date().getFullYear();

    yearElements.forEach(function (element) {
      element.textContent = year;
    });
  }

  function getHeaderOffset() {
    const header = document.querySelector(SELECTORS.header);

    if (!header) return 80;

    return header.offsetHeight + 18;
  }

  function defaultAuditPrompt() {
    return [
      "Audit this finance content for AI citation readiness.",
      "",
      "Review it for:",
      "- Answer clarity",
      "- Extraction-ready structure",
      "- Missing summary blocks",
      "- Risky financial, lending, funding, or credit claims",
      "- Internal link opportunities",
      "- FAQ improvements",
      "- Schema fit",
      "- Trust signals",
      "- CTA alignment",
      "",
      "Return:",
      "1. A citation readiness scorecard",
      "2. The biggest issues blocking AI answer extraction",
      "3. Specific rewrite recommendations",
      "4. Suggested H2s, tables, FAQs, and internal links",
      "5. Risky claim rewrites",
      "6. A final publish checklist",
      "",
      "Content to audit:",
      "[Paste content here]"
    ].join("\n");
  }
})();
