let count = 0;
const countElement = document.getElementById('count');
const button = document.getElementById('increment');
const container = document.getElementById('daddy-image-container');

button.addEventListener('click', () => {
  count++;
  countElement.textContent = count;

  const img = document.createElement('img');
  img.src = 'daddy.png';
  img.alt = 'Imagem de Daddy!';
  img.classList.add('daddy-image');

  container.appendChild(img);

  setTimeout(() => {
    container.removeChild(img);
  }, 800); // remove após a animação
});
