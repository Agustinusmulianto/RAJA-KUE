import { PromoSection } from "../components/promo.js";
import { ProductSection, Products } from "../components/product.js";
export async function HomePage() {
  const promoPath = "assets/promos/Promosi.png";
  const promo = PromoSection(promoPath)
  const product = await Products();
  return `
${promo}
<hr>
<p>ahahahahah</p>
<hr>
${product}
  `;
}
