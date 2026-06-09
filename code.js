const container = document.getElementById("container");

function abrirFeed(i) {
  container.classList.add("hide");

  setTimeout(() => {
    container.innerHTML = feeds[i];

    requestAnimationFrame(() => {
      container.classList.remove("hide");
    });

    const cards = document.querySelectorAll(".card");
    const imagens = document.querySelectorAll(".card img");

    if (imagens.length === 0) {
      // Sem imagens, anima direto
      setTimeout(() => {
        cards.forEach(card => card.classList.add("active"));
      }, 100);
    } else {
      // Espera todas as imagens carregarem
      let carregadas = 0;

      imagens.forEach(img => {
        const ativar = () => {
          carregadas++;
          if (carregadas === imagens.length) {
            setTimeout(() => {
              cards.forEach(card => card.classList.add("active"));
            }, 100);
          }
        };

        if (img.complete) {
          ativar(); // Já estava em cache
        } else {
          img.addEventListener("load", ativar);
          img.addEventListener("error", ativar); // Imagem quebrada não trava tudo
        }
      });
    }
  }, 300);
}
//==========
//Feed area
//==========
const feeds = {
  pessoal: `
<div class="feed grid">

  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>

  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>

  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>
  <div class="card">
    <h1>Tio Rafael</h1>
    <div class="details">
      <img src="foto.jpg">
      <p>Me amarro em moto</p>
    </div>
  </div>

</div>
`,
  

  fotos: `
  <div class="feed grid">

    <div class="card">
      <img src="https://placehold.co/300x300">
      <p>Legenda da foto</p>
    </div>

    <div class="card">
      <img src="https://placehold.co/300x300">
      <p>Legenda da foto</p>
    </div>

    <div class="card">
      <img src="https://placehold.co/300x300">
      <p>Legenda da foto</p>
    </div>

    <div class="card">
      <img src="https://placehold.co/300x300">
      <p>Legenda da foto</p>
    </div>

  </div>
  `,
  videos: `
  <div class="feed grid">
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  <div class="card">
    <iframe
    src="https://www.youtube.com/embed/IjxBCCKIJH8?si=7AXvmM3U-CO0zfJj"
      width="100%"
      height="200px"
      frameborder=0 
      allowfullscreen>
    </iframe>
  </div>
  </div>
  `
}
window.addEventListener("load", () => {
  abrirFeed("pessoal");
});