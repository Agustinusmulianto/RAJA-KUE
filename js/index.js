export const title = 'Raja Kue';

import { renderNav } from './nav.js';
import { home } from './home.js';

const webtittle = document.querySelector('title');
webtittle.textContent = title;
const app = document.getElementById('app');

app.appendChild(renderNav(title));
app.appendChild(home);
