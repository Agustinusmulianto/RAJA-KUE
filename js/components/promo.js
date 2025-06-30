export function PromoSection(path) {
    const section = document.createElement('section');
    const img = document.createElement('img');
    img.className = 'promo-img';
    section.className = 'promo-section';
    img.src = path
    section.appendChild(img);
    return section.outerHTML
}