import { navIcons } from './nav.js';
import { cardImport } from './card.js';


const promo = [
    {
        image: 'assets/promos/Promosi.png',
        alt: 'Diskon by App',
        title: 'Diskon by App',
        description: 'Dapatkan diskon menarik dengan menggunakan aplikasi kami.',
        link: '#diskon-by-app'
    },
]

function generatePromoHTML(promo) {
    return promo.map(item => `
            <img src="${item.image}" alt="${item.alt}" class="promo-image">
    `).join('');
}

function iconsHTML(navIcons) {
    return navIcons.filter(icon => icon.name === 'Cart').map(icon => `
        <span class="icon-section">
            ${icon.icon}
        </span>
    `).join('');
}

const cards = await cardImport.then(card => card);


export const home = document.createElement('main');
home.className = 'home';
home.innerHTML = `
    <section class= "promo-section" >
        ${generatePromoHTML(promo)}
    </section >
    <section class="shop-section">
        ${iconsHTML(navIcons)}
        <div class="menu-title">
            <h2 class="section-title">Featured Menu</h2>
            <p>Temukan menu terbaru kami yang lezat dan menggugah selera.</p>
        </div>
        <div class="category-section">
            <span class="category-item category-active">All</span>
            <span class="category-item">Roti</span>
            <span class="category-item">Kue Tradisional</span>
            <span class="category-item">Puding</span>
            <span class="category-item">Donat</span>
        </div>
        <hr>
        <div class="menu-items">
            ${cards}
        </div>
    </section >
 `;
