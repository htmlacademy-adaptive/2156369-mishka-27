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

// модалка

let modal = document.querySelector('.modal');
let modalOpeners = document.querySelectorAll('.product__button, .popular__button');

for (const opener of modalOpeners) {
  opener.onclick = function (evt) {
    evt.preventDefault();
    modal.classList.toggle('modal--closed');
  };
}
