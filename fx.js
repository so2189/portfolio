const expandableImages = document.querySelectorAll('.expandable');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  expandableImages.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = "block";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.onclick = () => lightbox.style.display = "none";
  window.onclick = (e) => { if (e.target == lightbox) lightbox.style.display = "none"; }
