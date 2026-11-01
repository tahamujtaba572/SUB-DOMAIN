/* ============================================================
   iTAHA — Full Page Builder
   Created by TAHA MUJTABA
   Everything (head, style, body) is generated here.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- CONFIG ---------- */
  const CONFIG = {
    name: "iTAHA",
    author: "TAHA MUJTABA",
    liveWeb: "https://itaha.duckdns.org/",
    youtube: "https://www.youtube.com/@iTAHA-12",
    services: [
      { num: "01", icon: "🌐", title: "iTAHA Web Builder",            desc: "Build stunning, modern websites with drag & drop ease." },
      { num: "02", icon: "🎓", title: "BS Portal",                    desc: "Complete university BS program management system." },
      { num: "03", icon: "🤖", title: "Lyra AI",                      desc: "Smart AI assistant created by Taha Mujtaba." },
      { num: "04", icon: "🐦", title: "Flappy Bird",                  desc: "Classic arcade game reimagined in the browser." },
      { num: "05", icon: "🖼️", title: "Image Compressor",             desc: "Compress images instantly with zero quality loss." },
      { num: "06", icon: "📄", title: "PDF Editor",                   desc: "Edit, merge & sign PDFs directly in your browser." },
      { num: "07", icon: "❌", title: "Tic Tac Toe",                  desc: "Classic game with a modern UI and smart AI." }
    ]
  };

  /* ---------- HEAD ---------- */
  document.documentElement.lang = "en";
  document.title = CONFIG.name + " — Web Apps & Tools by " + CONFIG.author;

  const headTags = [
    ["meta", { charset: "UTF-8" }],
    ["meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }],
    ["meta", { name: "description", content: "iTAHA — Web apps, tools & games by Taha Mujtaba." }],
    ["meta", { name: "theme-color", content: "#05060d" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
    ["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap" }]
  ];

  headTags.forEach(function ([tag, attrs]) {
    const el = document.createElement(tag);
    Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    document.head.appendChild(el);
  });

  /* ---------- STYLE ---------- */
  const style = document.createElement("style");
  style.textContent = `
    *{margin:0;padding:0;box-sizing:border-box}
    :root{
      --bg:#05060d; --bg2:#0a0c1a;
      --card:rgba(255,255,255,.04);
      --border:rgba(255,255,255,.1);
      --text:#eaeaff; --muted:#8a8aa8;
      --accent:#00e0ff; --accent2:#7c5cff; --pink:#ff4ecb;
    }
    html{scroll-behavior:smooth}
    body{
      font-family:'Outfit',system-ui,-apple-system,sans-serif;
      background:var(--bg); color:var(--text);
      overflow-x:hidden; min-height:100vh; position:relative;
      -webkit-font-smoothing:antialiased;
    }
    /* Grid bg */
    body::before{
      content:""; position:fixed; inset:0; z-index:-2;
      background-image:
        linear-gradient(rgba(124,92,255,.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124,92,255,.07) 1px, transparent 1px);
      background-size:52px 52px;
      mask-image:radial-gradient(ellipse at center, #000 25%, transparent 75%);
      -webkit-mask-image:radial-gradient(ellipse at center, #000 25%, transparent 75%);
    }
    /* Glow blobs */
    .glow{
      position:fixed; border-radius:50%; filter:blur(120px);
      opacity:.5; z-index:-1; pointer-events:none;
      animation:float 16s ease-in-out infinite;
    }
    .glow-1{width:520px;height:520px;background:#00e0ff;top:-160px;left:-120px}
    .glow-2{width:480px;height:480px;background:#7c5cff;bottom:-180px;right:-100px;animation-delay:-6s}
    .glow-3{width:360px;height:360px;background:#ff4ecb;top:45%;left:50%;animation-delay:-10s}
    @keyframes float{
      0%,100%{transform:translate(0,0) scale(1)}
      50%{transform:translate(50px,-40px) scale(1.15)}
    }

    /* NAV */
    .nav{
      position:sticky; top:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:18px 6%;
      backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px);
      background:rgba(5,6,13,.65);
      border-bottom:1px solid var(--border);
    }
    .brand{display:flex; align-items:center; gap:12px; font-weight:900; font-size:1.25rem; letter-spacing:2px}
    .brand-dot{
      width:10px;height:10px;border-radius:50%;background:var(--accent);
      box-shadow:0 0 14px var(--accent);
      animation:pulseDot 2s ease-in-out infinite;
    }
    @keyframes pulseDot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(1.5)}}
    .brand-text{
      background:linear-gradient(90deg,#fff,#00e0ff,#7c5cff,#fff);
      background-size:200% auto;
      -webkit-background-clip:text; background-clip:text; color:transparent;
      animation:shine 4s linear infinite;
    }
    @keyframes shine{to{background-position:200% center}}
    .nav-links{display:flex; gap:28px}
    .nav-links a{
      color:var(--muted); text-decoration:none; font-weight:600;
      font-size:14px; letter-spacing:.5px; transition:.25s;
    }
    .nav-links a:hover{color:var(--accent)}

    /* HERO */
    .hero{padding:100px 8% 70px; text-align:center; position:relative}
    .badge{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 18px; border-radius:50px;
      background:rgba(0,224,255,.08);
      border:1px solid rgba(0,224,255,.3);
      color:var(--accent); font-size:12px; font-weight:700;
      letter-spacing:2px; margin-bottom:32px;
    }
    .badge::before{
      content:""; width:6px; height:6px; border-radius:50%;
      background:var(--accent); box-shadow:0 0 8px var(--accent);
      animation:pulseDot 2s infinite;
    }
    .hero-title{
      font-size:clamp(2.8rem, 8vw, 6.2rem);
      font-weight:900; line-height:1; letter-spacing:-2px;
      margin-bottom:24px;
    }
    .hero-title .grad{
      background:linear-gradient(135deg,#00e0ff 0%,#7c5cff 50%,#ff4ecb 100%);
      -webkit-background-clip:text; background-clip:text; color:transparent;
    }
    .hero-sub{
      color:var(--muted); font-size:clamp(1rem,2vw,1.18rem);
      max-width:640px; margin:0 auto 44px; line-height:1.75;
    }
    .hero-cta{display:flex; gap:16px; justify-content:center; flex-wrap:wrap}
    .cta{
      position:relative; display:inline-flex; align-items:center; gap:10px;
      padding:15px 34px; border-radius:50px;
      font-weight:700; font-size:15px; text-decoration:none;
      color:#05060d;
      background:linear-gradient(135deg,#00e0ff,#7c5cff);
      box-shadow:0 10px 30px rgba(0,224,255,.35);
      transition:.3s cubic-bezier(.2,.8,.2,1);
      overflow:hidden;
    }
    .cta:hover{transform:translateY(-3px); box-shadow:0 16px 44px rgba(0,224,255,.55)}
    .cta.yt{
      background:transparent; color:var(--text);
      border:2px solid rgba(255,255,255,.15); box-shadow:none;
    }
    .cta.yt:hover{border-color:#ff0033; color:#ff3355; box-shadow:0 0 28px rgba(255,0,50,.4)}

    /* SERVICES */
    .services{padding:80px 8% 100px}
    .services-head{text-align:center; margin-bottom:60px}
    .services-head h2{
      font-size:clamp(1.8rem,4vw,2.8rem); font-weight:900;
      letter-spacing:-1px; margin-bottom:14px;
    }
    .services-head p{color:var(--muted); font-size:1rem}
    .grid{
      display:grid;
      grid-template-columns:repeat(auto-fill, minmax(260px, 1fr));
      gap:22px; max-width:1200px; margin:0 auto;
    }
    .card{
      position:relative; padding:32px 26px;
      border-radius:20px;
      background:var(--card);
      border:1px solid var(--border);
      backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px);
      transition:.4s cubic-bezier(.2,.8,.2,1);
      overflow:hidden;
    }
    .card::before{
      content:""; position:absolute; inset:0; border-radius:20px;
      padding:1px;
      background:linear-gradient(135deg, rgba(0,224,255,.6), rgba(124,92,255,.6), rgba(255,78,203,.6));
      -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite:xor; mask-composite:exclude;
      opacity:0; transition:.4s; pointer-events:none;
    }
    .card:hover{transform:translateY(-8px); background:rgba(255,255,255,.06)}
    .card:hover::before{opacity:1}
    .card-num{
      font-size:.75rem; font-weight:700;
      color:var(--accent); letter-spacing:2px;
      margin-bottom:18px; opacity:.7;
    }
    .card-icon{
      width:54px; height:54px; border-radius:14px;
      display:grid; place-items:center;
      font-size:1.6rem; margin-bottom:20px;
      background:linear-gradient(135deg, rgba(0,224,255,.14), rgba(124,92,255,.14));
      border:1px solid rgba(255,255,255,.08);
    }
    .card-title{
      font-size:1.15rem; font-weight:800;
      line-height:1.35; margin-bottom:10px;
      position:relative; z-index:1;
    }
    .card-desc{
      font-size:.9rem; color:var(--muted);
      line-height:1.6; position:relative; z-index:1;
    }

    /* FOOTER */
    footer{
      padding:50px 8% 40px;
      border-top:1px solid var(--border);
      text-align:center;
      background:rgba(5,6,13,.75);
    }
    .footer-brand{
      font-size:1.5rem; font-weight:900; letter-spacing:4px;
      margin-bottom:14px;
      background:linear-gradient(90deg,#00e0ff,#7c5cff,#ff4ecb);
      -webkit-background-clip:text; background-clip:text; color:transparent;
    }
    .footer-line{
      color:var(--muted); font-size:.95rem; margin-bottom:6px;
      letter-spacing:1px;
    }
    .footer-line strong{
      color:#fff; letter-spacing:2px;
    }
    .footer-heart{
      color:#ff4ecb; display:inline-block;
      animation:beat 1.4s ease-in-out infinite;
    }
    @keyframes beat{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}
    .footer-copy{
      font-size:.78rem; color:var(--muted);
      opacity:.6; margin-top:22px;
    }

    /* RESPONSIVE */
    @media(max-width:640px){
      .nav-links{display:none}
      .hero{padding:60px 6% 40px}
      .services{padding:60px 6% 70px}
      .card{padding:26px 22px}
      .brand{font-size:1.1rem; letter-spacing:1.5px}
    }
  `;
  document.head.appendChild(style);

  /* ---------- BODY ---------- */
  const cardsHTML = CONFIG.services.map(function (s) {
    return (
      '<div class="card">' +
        '<div class="card-num">' + s.num + '</div>' +
        '<div class="card-icon">' + s.icon + '</div>' +
        '<div class="card-title">' + s.title + '</div>' +
        '<div class="card-desc">' + s.desc + '</div>' +
      '</div>'
    );
  }).join("");

  const year = new Date().getFullYear();

  document.body.innerHTML = `
    <div class="glow glow-1"></div>
    <div class="glow glow-2"></div>
    <div class="glow glow-3"></div>

    <nav class="nav">
      <div class="brand">
        <span class="brand-dot"></span>
        <span class="brand-text">${CONFIG.name}</span>
      </div>
      <div class="nav-links">
        <a href="#services">Services</a>
        <a href="${CONFIG.liveWeb}" target="_blank" rel="noopener">Live Web</a>
        <a href="${CONFIG.youtube}" target="_blank" rel="noopener">YouTube</a>
      </div>
    </nav>

    <section class="hero">
      <div class="badge">CREATED BY ${CONFIG.author}</div>
      <h1 class="hero-title">
        Welcome to <span class="grad">${CONFIG.name}</span>
      </h1>
      <p class="hero-sub">
        A growing collection of powerful web apps, tools, and games — all crafted with passion by
        ${CONFIG.author}. Explore live projects, watch tutorials, and dive into the ecosystem.
      </p>
      <div class="hero-cta">
        <a href="${CONFIG.liveWeb}" target="_blank" rel="noopener" class="cta">🚀 Live Web →</a>
        <a href="${CONFIG.youtube}" target="_blank" rel="noopener" class="cta yt">▶ YouTube Channel</a>
      </div>
    </section>

    <section class="services" id="services">
      <div class="services-head">
        <h2>My Services</h2>
        <p>Explore the tools and apps available on ${CONFIG.name}</p>
      </div>
      <div class="grid">${cardsHTML}</div>
    </section>

    <footer>
      <div class="footer-brand">${CONFIG.name}</div>
      <div class="footer-line">
        CREATED <span class="footer-heart">❤</span> BY <strong>${CONFIG.author}</strong>
      </div>
      <div class="footer-copy">
        © ${year} ${CONFIG.author} — All Rights Reserved
      </div>
    </footer>
  `;

  /* ---------- SMOOTH SCROLL FALLBACK ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
