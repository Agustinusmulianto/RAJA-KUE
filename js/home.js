import { navIcons } from './nav.js';
const promo = [
    {
        image: 'assets/promos/diskon-by-App.jpeg',
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
        <hr>
        <div class="menu-items">
            <div class="menu-item">
                <img src="assets/menu/1.jpg" alt="Menu 1" class="menu-image">
                <h4 class="menu-name">Kue Coklat</h4>
                <p class="menu-description">Kue coklat lezat dengan lapisan krim yang lembut.</p>                    <span class="menu-price">Rp 25.000</span>
            </div>
        </div>
    </section>
    `;
