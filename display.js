import { data } from './products.js';

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