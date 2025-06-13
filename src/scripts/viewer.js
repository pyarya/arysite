document.addEventListener('astro:page-load', () => {
    const viewer = document.getElementById('viewer');
    const viewerImg = document.getElementById('viewer-img');
    const viewerMeta = document.getElementById('viewer-meta');
    const closeBtn = viewer.querySelector('.close');
  
    document.querySelectorAll('.art-card img').forEach((img) => {
      img.addEventListener('click', () => {
        const card = img.closest('.art-card');
        viewerImg.src = img.src;
        viewerImg.alt = img.alt;
        const desc = card.dataset.description || '';
        viewerMeta.innerHTML = `${card.dataset.id || ''}<br>${
          card.dataset.date || ''}<br><br>${desc}`;
        requestAnimationFrame(() => viewer.classList.add('open'));
      });
    });
  
    closeBtn.addEventListener('click', () => {
      viewer.classList.remove('open');
    });
  
    viewer.addEventListener('click', (e) => {
      if (e.target === viewer) {
        viewer.classList.remove('open');
      }
    });
  });