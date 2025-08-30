const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");

galleryItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const thumbnailSrc = e.target.src;
    const fullSrc = thumbnailSrc.replace("-thumbnail", "");
    lightboxImage.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImage && e.target !== closeBtn) {
    lightbox.style.display = "none";
  }
});
