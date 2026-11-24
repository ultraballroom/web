// Header & footer dipakai bersama di semua halaman
const halaman = location.pathname.split("/").pop() || "index.html";
const menu = [["index.html","Home"],["koleksi.html","The Vault"],["review.html","Review"],["jual.html","Ready Stock"]];

document.body.insertAdjacentHTML("afterbegin", `
<header><div class="wrap nav">
  <a href="index.html"><img src="assets/logo-black.png" alt="UltraBall"></a>
  <ul>${menu.map(([h,t])=>`<li><a href="${h}" class="${halaman.startsWith(h.replace('.html',''))?'active':''}">${t}</a></li>`).join("")}</ul>
</div></header>`);

document.body.insertAdjacentHTML("beforeend", `
<footer><div class="wrap">
  <span>© ${new Date().getFullYear()} UltraBall — Football culture, one shirt at a time.</span>
  <a href="https://instagram.com/ultraball_id" target="_blank">Instagram @ultraball_id</a>
</div></footer>`);

const foto = (f, alt) => f ? `<img src="foto/${f}" alt="${alt}" loading="lazy">` : "Foto menyusul";
const waLink = (teks) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(teks)}`;

function renderKoleksi(el, batas){
  el.innerHTML = KOLEKSI.slice(0, batas || KOLEKSI.length).map(j => `
    <div class="card">
      <div class="ph">${foto(j.foto, j.pemain)}</div>
      <div class="body">
        <span class="meta">${j.klub} · ${j.musim}</span>
        <h3>${j.pemain}</h3>
        <span class="badge">${j.tipe}</span>
        <p>${j.catatan}</p>
      </div>
    </div>`).join("");
}

function renderJual(el){
  el.innerHTML = DIJUAL.map(j => {
    const sold = j.status === "terjual";
    return `
    <div class="card ${sold?'sold':''}">
      <div class="ph">${foto(j.foto, j.nama)}</div>
      <div class="body">
        <span class="badge">${sold?'Terjual':'Tersedia'}</span>
        <h3>${j.nama}</h3>
        <p>Ukuran ${j.ukuran} · Kondisi ${j.kondisi}</p>
        <div class="price">${j.harga}</div>
        <a class="wa" target="_blank" href="${waLink('Halo UltraBall, saya tertarik dengan '+j.nama)}">${sold?'Sudah terjual':'Tanya via WhatsApp'}</a>
      </div>
    </div>`}).join("");
}

function renderReviewList(el){
  el.innerHTML = REVIEW.map((r,i) => `
    <a class="card" href="artikel.html?id=${i}">
      <div class="ph">${foto(r.foto, r.judul)}</div>
      <div class="body">
        <span class="meta">${r.kicker} · ${r.tanggal}</span>
        <h3>${r.judul}</h3>
        <p>${r.ringkasan}</p>
      </div>
    </a>`).join("");
}

function renderArtikel(el){
  const r = REVIEW[new URLSearchParams(location.search).get("id")] || REVIEW[0];
  document.title = r.judul + " — UltraBall";
  el.innerHTML = `
    <span class="kicker">${r.kicker}</span>
    <h1>${r.judul}</h1>
    <div class="date">${r.tanggal}</div>
    ${r.foto ? `<img src="foto/${r.foto}" alt="">` : ""}
    ${r.isi.map(p=>`<p>${p}</p>`).join("")}
    <a class="btn" href="review.html">← Semua review</a>`;
}
