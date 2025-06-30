export function Footer() {
    const footerElement = document.createElement('footer');
    footerElement.className = 'footer'
    const pElement = document.createElement('p');
    pElement.textContent = '© 2024 Raja Kue. All rights reserved.';
    footerElement.appendChild(pElement)
    return footerElement.outerHTML
}
