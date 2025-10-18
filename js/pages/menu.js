import { ProductsAll } from "../components/product.js";


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
          <li class="category-item">All</li>
          <li class="category-item">Cake</li>
          <li class="category-item">Bread</li>
          <li class="category-item">Pastry</li>
        </ul>
      </aside>
      <div class="menu-content">
        ${productList}
      </div>
    </div>
  </section>
  `;
}