(function () {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function headingIdFromHref(href) {
    if (!href) return null;

    try {
      const url = new URL(href, window.location.href);
      if (url.pathname !== window.location.pathname || !url.hash) return null;
      return decodeURIComponent(url.hash.slice(1));
    } catch {
      return null;
    }
  }

  function scrollToHeading(id) {
    const target = document.getElementById(id);
    if (!target) return false;

    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "start",
    });
    return true;
  }

  document.addEventListener(
    "click",
    (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = event.target.closest("#table-of-contents a[href], .toc-item a[href]");
      if (!link) return;

      const id = headingIdFromHref(link.getAttribute("href"));
      if (!id || !document.getElementById(id)) return;

      event.preventDefault();
      event.stopPropagation();

      if (window.location.hash !== `#${id}`) {
        history.pushState(null, "", `#${id}`);
      }

      scrollToHeading(id);
    },
    true
  );
})();
