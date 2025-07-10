const products = [
   {
     id: 1,
     name: "Wireless Headphones",
     price: 1999,
     image: "https://via.placeholdom/200x150?text=Headphones"
   },
   {
     id: 2,
     name: "Smart Watch",
     price: 3499,
     image: "https://via.placeholder.com/200x150?text=Smart+Watch"
   },
   {
     id: 3,
     name: "Gaming Mouse",
     price: 999,
     image: "https://via.placeholder.com/200x150?text=Gaming+Mouse"
   }
 ];
 
 let cartCount = 0;
 
 function renderProducts() {
   const productList = document.getElementById("product-list");
 
   products.forEach(product => {
     const card = document.createElement("div");
     card.className = "product-card";
 
     card.innerHTML = `
       <img src="${product.image}" alt="${product.name}" />
       <h3>${product.name}</h3>
       <p>₹${product.price}</p>
       <button onclick="addToCart()">Add to Cart</button>
     `;
 
     productList.appendChild(card);
   });
 }
 
 function addToCart() {
   cartCount++;
   document.getElementById("cart-count").textContent = cartCount;
 }
 
 renderProducts();
 






 