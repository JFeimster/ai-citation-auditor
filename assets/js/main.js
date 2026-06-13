(() => {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const copyButtons = document.querySelectorAll("[data-copy]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setHeaderState = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  let closeNav = () => {};

  if (navToggle && navMenu) {
    const openNav = () => {
      navMenu.classList.add("is-open");
      document.body.classList.add("nav-open");
      navToggle.setAttribute("aria-expanded", "true");
    };

    closeNav = () => {
      navMenu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      if (navMenu.classList.contains("is-open")) {
        closeNav();
      } else {
        openNav();
      }
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest("a")) {
        closeNav();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navMenu.classList.contains("is-open")) return;
      if (navMenu.contains(event.target) || navToggle.contains(event.target)) return;
      closeNav();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNav();
      }
    });
  }

  const smoothScrollToHash = (hash) => {
    if (!hash || hash === "#") return false;
    const target = document.querySelector(hash);
    if (!target) return false;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start"
    });

    if (history.pushState) {
      history.pushState(null, "", hash);
    }

    return true;
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!smoothScrollToHash(hash)) return;
      event.preventDefault();
      closeNav();
    });
  });

  document.querySelectorAll("a[href*='#']:not([href^='#'])").forEach((link) => {
    link.addEventListener("click", (event) => {
      const url = new URL(link.href, window.location.href);
      const samePage =
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.hash &&
        url.hash !== "#";

      if (!samePage) return;
      if (!smoothScrollToHash(url.hash)) return;
      event.preventDefault();
      closeNav();
    });
  });

  const writeClipboard = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "true");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
  };

  copyButtons.forEach((button) => {
    const originalLabel = button.textContent || "Copy";
    let resetTimer = null;

    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy");
      if (!text) return;

      try {
        await writeClipboard(text);
        button.textContent = "Copied";
        button.classList.add("is-copied");
      } catch (error) {
        button.textContent = "Copy failed";
        button.classList.remove("is-copied");
      }

      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }

      resetTimer = window.setTimeout(() => {
        button.textContent = originalLabel;
        button.classList.remove("is-copied");
      }, 1600);
    });
  });

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });
})();
