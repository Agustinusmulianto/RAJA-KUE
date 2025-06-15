import { nav } from './nav.js';
const tittle = document.querySelector('title');
tittle.textContent = 'Kaisar Store';
export const app = document.getElementById('app');

app.appendChild(nav);