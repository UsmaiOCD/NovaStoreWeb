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

// document.querySelector('.logo a').addEventListener('click', function(e) {
//   e.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// fetch('products.json')
//   .then(response => response.json())
//   .then(products => {
//     // Dữ liệu JSON đã được đọc và lưu vào biến data
//     displayProducts(products);
//   })
//   .catch(error => {
//     console.error('Lỗi khi đọc file JSON:', error);
//   });

const data = [
  {
    "name": "Đèn học",
    "price": 1000000,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4H6RCBkspv_PDlZV6ocoS9vF6xVM94vj2es1V69L15XeKs19vohYuGFAH5djnGLAgCwC1oA8G5-qW2sO8Wt-aDeYGu7Qm5l0D2KLIwBt3&usqp=CAc",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  },
  {
    "name": "Đèn sưởi",
    "price": 2000000,
    "image": "https://cdn.mediamart.vn/images/product/-HZ342O.png",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  },
  {
    "name": "Đèn bể cảnh",
    "price": 3000000,
    "image": "https://media.loveitopcdn.com/18218/den-cho-ho-ca-canh-7.png",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  },
  {
    "name": "Ổ mèo",
    "price": 4000000,
    "image": "https://bizweb.dktcdn.net/100/240/380/products/dbd42c6a2345821bdb54.jpg?v=1715332416667",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  },
  {
    "name": "Cần câu đồ chơi",
    "price": 5000000,
    "image": "https://cutepetshop.vn/wp-content/uploads/2023/03/images-upload-woo2F061b8536ab1cbaa384b5f2bd4c5ec1fd.jpg",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  },
  {
    "name": "Thảm mèo",
    "price": 6000000,
    "image": "https://pethouse.com.vn/wp-content/uploads/2023/01/ezgif-3-2203a41889.jpg",
    "link": "https://shopee.vn/%C4%90%C3%A8n-ng%E1%BB%A7-%C4%91%E1%BB%83-b%C3%A0n-b%C3%B3ng-led-t%C3%ADch-%C4%91i%E1%BB%87n-3-ch%E1%BA%BF-%C4%91%E1%BB%99-s%C3%A1ng-3-m%C3%A0u-v%C3%A0ng-t%C3%ADm-h%E1%BB%93ng.-i.623465927.15497025506?xptdk=06ab5776-dcd0-4f54-a65b-1b4005f0efcc"
  }
]

function displayProducts(products) {
  let container = document.getElementById('product-list');
  products.forEach(product => {
      let productHTML = `
        <div class="product">
          <img src="${product.image}" alt="${product.name}" />
          <h3>${product.name}</h3>
          <p>Giá: ${product.price}</p>
          <a href="${product.link}" target="_blank">Xem sản phẩm</a>
        </div>
      `;
      container.innerHTML += productHTML;
    });
  }

displayProducts(data);