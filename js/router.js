import { Navbar } from './components/navbar.js';
import { Footer } from './components/footer.js';
import { HomePage } from './pages/home.js';
import { MenuPage } from './pages/menu.js';
import { AboutPage } from './pages/about.js';
import { ContactPage } from './pages/contact.js';



const routes = {
  '/': HomePage,
  '/menu': MenuPage,
  '/about': AboutPage,
  '/contact': ContactPage,
};

export async function router() {
  const path = location.hash.slice(1) || '/';
  const page = routes[path];
  const app = document.getElementById('app');


  if (page) {
    const pageContent = await page();
    app.innerHTML = `
      ${Navbar()}
      <main class="main">
        ${pageContent}
      </main>
      ${Footer()}
    `;
  } else {
    app.innerHTML = `
      ${Navbar()}
      <main class="main">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </main>
    `;
  }
}
