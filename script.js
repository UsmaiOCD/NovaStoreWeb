import { data } from './products.js';

let slideIndex = 1;
let autoSlideInterval;
showSlides(slideIndex);

function plusSlides(n) {
  clearInterval(autoSlideInterval);
  showSlides(slideIndex += n, n > 0 ? 'left' : 'right');
  startAutoSlide();
}

function currentSlide(n) {
  clearInterval(autoSlideInterval);
  showSlides(slideIndex = n);
  startAutoSlide();
}

function showSlides(n, direction = 'left') {
  let i;
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("slide-in-left", "slide-in-right");
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add(direction === 'left' ? "slide-in-left" : "slide-in-right");
  dots[slideIndex - 1].className += " active";
}

function startAutoSlide() {
  autoSlideInterval = setInterval(function() {
    plusSlides(1);
  }, 3000);
}

startAutoSlide();

// Dropdown menu toggle
const dropdownToggle = document.querySelector('.dropdown i');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', function(event) {
  event.stopPropagation();
  dropdownContent.classList.toggle('show');
});

document.addEventListener('click', function(event) {
  if (!event.target.matches('.dropdown i') && !event.target.closest('.dropdown-content')) {
    if (dropdownContent.classList.contains('show')) {
      dropdownContent.classList.remove('show');
    }
  }
});

function displayProducts(products) {
  let container = document.getElementById('product-list');
  products.forEach(product => {
      let productHTML = `
        <div class="product">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Giá: ${product.price}</p>
          <a href="${product.link}" target="_blank">Mua ngay</a>
        </div>
      `;
      container.innerHTML += productHTML;
  });
}

displayProducts(data);