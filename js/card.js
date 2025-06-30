const jsonPath = '../products.json';

// Ambil data dari file JSON
async function fetchCardData(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error('Gagal memuat data produk');
    }
    const data = await response.json();
    return data.products;
}

// Buat elemen card HTML
function createCard(data) {
    const { image, name, price } = data;
    const after_discount = price - (price * 0.1);
    return `
        <div class="card">
            <img src="${image}" alt="${name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${name}</h3>
                <p class="card-price">Rp ${price.toLocaleString('id-ID')}</p>
                <p class="card-after-discount">Rp ${after_discount.toLocaleString('id-ID')}</p>
            </div>
            <button class="card-button">add to cart</button>
        </div>
    `;
}

// Fungsi utama pencarian/filter produk
const searchProducts = async (searchProduct = null) => {
    try {
        const products = await fetchCardData(jsonPath);
        const filtered = searchProduct
            ? products.filter(product =>
                product.category.toLowerCase().includes(searchProduct.toLowerCase()))
            : products;

        return filtered.map(createCard).join('');
    } catch (error) {
        console.error('Error fetching card data:', error);
        return '';
    }
}

// Ekspor fungsi search-nya
export const cardImport = (category = '') => searchProducts(category);
