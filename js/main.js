let hearts = document.querySelectorAll('.heart');

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function(e) {
    e.preventDefault();
    this.classList.toggle('added');
  })
}