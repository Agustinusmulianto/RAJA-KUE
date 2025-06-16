const menuItems = [
    { name: 'Home', href: './index.html' },
    { name: 'Products', href: './products.html' },
    { name: 'About', href: './about.html' },
    { name: 'Contact', href: './contact.html' }
];

export const navIcons = [
    {
        name: 'Search',
        href: './search.html',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>'
    },
    {
        name: 'Cart',
        href: './cart.html',
        icon: ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>'
    },
    {
        name: 'Profile',
        href: './profile.html',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>'
    }
];
// ======= Helper Functions =======
const generateList = (items, wrapper = 'li', itemClass = '') =>
    items.map(item =>
        `<${wrapper} class="${itemClass}"><a href="${item.href}">${item.icon || item.name}</a></${wrapper}>`
    ).join('');

// ======= Create Nav Element =======
export function renderNav(title) {
    const navElement = document.createElement('nav');
    navElement.className = 'navbar';
    navElement.innerHTML = `
        <a href="index.html" class="homepage">${title}</a>
        <ul class="nav-list">
            ${generateList(menuItems, 'li', 'list-item')}
        </ul>
        <div class="nav-icons">
            ${generateList(navIcons, 'span', 'icon-item')}
        </div>
    `;
    return navElement;
}
