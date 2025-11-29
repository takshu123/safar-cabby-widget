
mkdir -p public
# create file with your editor; example using cat:
cat > public/safar-cabby-widget.js <<'JS'
(function () {
  const scriptTag = document.currentScript || document.querySelector('script[src*="safar-cabby-widget.js"]');
  if (!scriptTag) { console.error("SafarCabby Widget: script tag not found"); return; }

  const business = scriptTag.getAttribute("data-business") || "SafarCabby";
  const rating = scriptTag.getAttribute("data-rating") || "4.9";
  const reviews = scriptTag.getAttribute("data-reviews") || "1,248";

  const target = document.getElementById("safarCabby_rated");
  if (!target) { console.error("SafarCabby Widget: #safarCabby_rated not found"); return; }

  const widget = document.createElement("div");
  widget.style.fontFamily = "Arial, sans-serif";
  widget.style.maxWidth = "280px";
  widget.style.textAlign = "center";
  widget.style.border = "1px solid #c9ec66";
  widget.style.borderRadius = "10px";
  widget.style.padding = "12px";
  widget.style.background = "#fff";
  widget.innerHTML = `
    <img src="https://images.safarcabby.com/logo.png" alt="${business} Logo" style="width:110px;display:block;margin:0 auto 8px;">
    <div style="font-size:18px;font-weight:700;margin-bottom:6px">${business}</div>
    <div style="font-size:16px;margin-bottom:8px">⭐ ${rating} — <small style="color:#666">${reviews} reviews</small></div>
    <a href="https://safarcabby.com" target="_blank" style="display:inline-block;padding:8px 12px;background:#c9ec66;border-radius:6px;text-decoration:none;color:#000;font-weight:700;">Book a Ride</a>
  `;
  target.appendChild(widget);
})();
JS

git add public/safar-cabby-widget.js
git commit -m "Add widget script"
git push
