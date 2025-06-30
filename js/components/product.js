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

export async function Products() {
    const path = './api/products.json';
    const data = await fetchData(path);

    if (data) {
        const productElements = ProductSection(data); // data sudah ready
        const div = document.createElement('div');
        div.className = 'cards';
        div.innerHTML = productElements.join(""); // gabungkan hasil map ke HTML string

        return div.outerHTML; // ⬅️ inilah yang akan dikembalikan ke HomePage
    }

    return '<p>Produk tidak tersedia.</p>'; // fallback jika data null
}


export function ProductSection(datas) {

    return datas.map(data => Card(data));
}