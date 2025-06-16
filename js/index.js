export const rajaKue = {
    title: 'Raja Kue',
    logo: 'assets/icons/raja-kue-icon.png',
};

import { renderNav } from './nav.js';
import { home } from './home.js';

const webtittle = document.querySelector('title');
webtittle.textContent = rajaKue.title;
const app = document.getElementById('app');

app.appendChild(renderNav(rajaKue));
app.appendChild(home);
