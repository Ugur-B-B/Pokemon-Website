let imageIndex = 1;
showImage(imageIndex);

function showImage(index) {
  const images = document.querySelectorAll('.slieder__image');

  // Dizin sınırlarını kontrol ediyoruz
  if (index > images.length) {
    imageIndex = 1;
  }
  if (index < 1) {
    imageIndex = images.length;
  }

  // Tüm resimleri gizle
  images.forEach((image) => {
    image.style.display = 'none';
  });

  // Yalnızca aktif olanı göster
  images[imageIndex - 1].style.display = 'block';
}

function prev() {
  showImage((imageIndex -= 1));
}

function next() {
  showImage((imageIndex += 1));
}
