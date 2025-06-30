export function Logo() {
    const img = document.createElement('img');
    const div = document.createElement('div');
    const a = document.createElement('a');
    img.src = './assets/icons/raja-kue-icon.png';
    img.className = 'logo'

    a.href = 'index.html'
    div.className = 'nav-logo'

    div.appendChild(a).appendChild(img)
    return div.outerHTML
}