let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// модалка в каталоге

let catalogModal = document.querySelector('.modal');
let productButton = document.querySelectorAll('.product__button');

for(let productButtons of productButton) {
  productButtons.onclick = function(e) {
    e.preventDefault();
    catalogModal.classList.toggle('modal--closed');
  }
}

// Модалка на главной

let indexModal = document.querySelector('.modal');
let orderButton = document.querySelector('.popular__button');

orderButton.onclick = function(e) {
  e.preventDefault();
  indexModal.classList.toggle('modal--closed');
}


