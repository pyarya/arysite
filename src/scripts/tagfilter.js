document.addEventListener('astro:page-load', () => {
  const posts = document.querySelectorAll('.project-card-sm');
  const buttons = document.querySelectorAll('.tag-filter');
  const active = new Set();

  function update() {
    posts.forEach(post => {
      const tags = post.dataset.tags ? post.dataset.tags.split(',') : [];
      const show = active.size === 0 || [...active].every(t => tags.includes(t));
      post.style.display = show ? '' : 'none';
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      if (active.has(tag)) {
        active.delete(tag);
        btn.classList.remove('active');
      } else {
        active.add(tag);
        btn.classList.add('active');
      }
      update();
    });
  });
});