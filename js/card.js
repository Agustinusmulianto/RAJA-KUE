const jsonPath = '../products.json';

async function fetchCardData(path) {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error('Gagal memuat data produk');
    }

    const data = await response.json();
    return data.products;
}

const searchProducts = (searchProduct = null) => {

    if (searchProduct) {
        return fetchCardData(jsonPath)
            .then(products => products.filter(product => product.category.toLowerCase().includes(searchProduct.toLowerCase()))
                .map(createCard).join(''));
    } else {
        return fetchCardData(jsonPath)
            .then(products => products.map(createCard).join(''));
    }
}
let contoh = '';
export const cardImport = searchProducts(contoh)
    .then(products => products)
    .catch(error => {
        console.error('Error fetching card data:', error);
        return '';
    });


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
