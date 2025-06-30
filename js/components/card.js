export function Card(data) {

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
