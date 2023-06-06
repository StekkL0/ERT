function showPhoto(img) {
  const src = img.getAttribute('src');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalImg = document.createElement('img');
  modalImg.setAttribute('src', src);
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  modal.addEventListener('click', function() {
    modal.remove();
  });
}