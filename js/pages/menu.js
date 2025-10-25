import { ProductsAll } from "../components/product.js";

const listItems = ['All', 'Cake', 'Bread', 'Pastry', 'Dessert'];

export async function MenuPage() {
  const productList = await ProductsAll();
  return `
  <section class="menu-section">
    <h1 class="menu-title">What We Serve</h1>
    <p>Home / Menu</p>
    <div class="main-menu-container">
      <aside class="menu-sidebar">
        <h2>Categories</h2>
        <ul class="menu-categories">
          ${listItems.map(item => `<li class="category-item"> <a href="">${item}</a></li>`).join('')}
        </ul>
      </aside>
      <div class="menu-content">
        ${productList}
      </div>
    </div>
  </section>
  `;
}