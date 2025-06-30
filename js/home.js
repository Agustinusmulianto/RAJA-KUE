import { navIcons } from './nav.js';
import { cardImport } from './card.js';
import { categories } from './searchProducts.js';


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
        <div class="category-section">
            <span class="category-item category-active">All</span>
            ${categories}
        </div>
        <hr>
        <div id="product-container" class="menu-items">
            <!-- Produk akan dimuat di sini -->
        </div>
    </section >
 `;
cardImport().then(cardsHTML => {
    const container = home.querySelector('#product-container');
    container.innerHTML = cardsHTML;
});

home.addEventListener('click', (event) => {
    if (event.target.classList.contains('category-item')) {
        const selected = event.target.textContent;
        const container = home.querySelector('#product-container');


        const categoryItems = home.querySelectorAll('.category-item');
        // Hapus kelas 'category-active' dari semua kategori
        categoryItems.forEach(item => item.classList.remove('category-active'));
        // Tambahkan kelas 'category-active' pada kategori yang dipilih
        event.target.classList.add('category-active');
        // Hapus kelas fade-in jika ada

        // Tambahkan efek fade-out
        container.classList.add('fade-out');

        const category = (selected === 'All') ? '' : selected;

        setTimeout(() => {

            cardImport(category).then(cardsHTML => {
                container.innerHTML = cardsHTML;
                container.classList.remove('fade-out');
                container.classList.add('fade-in');

                // Hapus kelas fade-in setelah animasi selesai
                setTimeout(() => {
                    container.classList.remove('fade-in');
                }, 300);
            });
        }, 200); // delay sinkron dengan durasi CSS fade-out
    }
});

