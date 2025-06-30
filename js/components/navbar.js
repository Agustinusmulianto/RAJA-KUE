import { Logo } from "./logo.js";
import { user, cart, search } from './icons/icon.js';

const icons = [
    {
        name: 'Pencarian',
        image: search,
    },
    {
        name: 'Keranjang',
        image: cart,
    },
    {
        name: 'Login',
        image: user,
    },
];

const li = [
    {
        name: 'Home',
        url: '/'
    },
    {
        name: 'Menu',
        url: '/menu'
    },
    {
        name: 'Contact',
        url: '/contact'
    },
    {
        name: 'About Us',
        url: '/about'
    },
];

function IconsImage(icons) {
    return icons.map(icon => {
        const span = document.createElement('span');
        span.title = icon.name;
        span.innerHTML = icon.image;
        return span.outerHTML
    }).join('');
}

function ListItems(li) {
    return li.map(item => {
        const liElement = document.createElement('li');
        liElement.className = 'item';
        const a = document.createElement('a');
        a.className = 'nav-list';
        a.href = '#' + item.url;
        a.textContent = item.name;
        liElement.appendChild(a);
        return liElement.outerHTML;
    }).join('');
}

export function Navbar() {
    return `
        <nav class="nav-bar">
        ${Logo()}
            <ul class="list-items">
            ${ListItems(li)}
            </ul>
        <div class="nav-login">
            ${IconsImage(icons)}
        </div>
        </nav>
    `;
}