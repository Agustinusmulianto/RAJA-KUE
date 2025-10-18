import { Card } from "./card.js";
async function fetchData(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('HTTP not found');
        }
        const data = await response.json();
        return data.products;
    } catch (error) {
        console.error(error);
        return null
    }
}

export function ProductSection(datas) {

    const dataProducts = datas.slice(0, 4);

    return dataProducts.map(data => Card(data));
}

export function allProducts(datas) {

    return datas.map(data => Card(data));
}


export async function Products() {
    const path = 'api/products.json';
    const data = await fetchData(path);

    if (data) {
        const productPreview = ProductSection(data);
        const div = document.createElement('div');
        div.className = 'cards';
        div.innerHTML = productPreview.join("");
        return div.outerHTML;
    }

    return '<p>Produk tidak tersedia.</p>';
}

export async function ProductsAll() {
    const path = 'api/products.json';
    const data = await fetchData(path);

    if (data) {
        const productAll = allProducts(data);
        const div = document.createElement('div');
        div.className = 'cards';
        div.innerHTML = productAll.join("");
        return div.outerHTML;
    }

    return '<p>Produk tidak tersedia.</p>';
}
