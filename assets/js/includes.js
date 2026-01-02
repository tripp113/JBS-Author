async function loadPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Missing partial: ${url} (${res.status})`);
    el.innerHTML = await res.text();
  } catch (err) {
    console.warn(err.message);
    // IMPORTANT: don't block page if partial is missing
    el.innerHTML = "";
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadPartial("#nav-slot", "assets/partials/nav.html");
  await loadPartial("#footer-slot", "assets/partials/footer.html");

  // signal that partials are now in the DOM (so site.js can bind UI)
  window.dispatchEvent(new Event("partials:loaded"));
});
