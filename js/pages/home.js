import { PromoSection } from "../components/promo.js";
import { Products } from "../components/product.js";
export async function HomePage() {
  const promoPath = "assets/promos/Promosi.png";
  const promo = PromoSection(promoPath)
  const product = await Products();
  return `
${promo}
<section class="menu-section">
<hr>
<div class="menu-title">
<h2>Featured Menu</h2>
<p>The best from our kitchen</p>
</div>
<hr>
${product}
</section>
  `;
}
