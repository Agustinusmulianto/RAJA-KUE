export function Footer() {
    const footerElement = document.createElement('footer');
    footerElement.className = 'footer';
    const pElement = document.createElement('p');
    pElement.textContent = '© 2024 Raja Kue. All rights reserved.';

    // Array of class names for the divs
    const section = document.createElement('section');
    section.className = 'footer-section';
    const divClasses = [
        {
            name: 'footer-info',
            divChild: [
                {
                    name: 'Store Location',
                    url: '#store-location'
                },
                {
                    name: 'Disclaimer',
                    url: '#disclaimer'
                },
                {
                    name: 'Privacy Policy',
                    url: '#privacy-policy'
                },
                {
                    name: 'Terms of Use',
                    url: '#terms-of-use'
                },
                {
                    name: 'Contact Us',
                    url: '#contact-us'
                },
                {
                    name: 'About Us',
                    url: '#about-us'
                },
                {
                    name: 'FAQ',
                    url: '#faq'
                },
            ]
        },
        {
            name: 'footer-social',
            divChild: [
                {
                    icon: 'Instagram',
                    url: '#instagram',
                },
                {
                    icon: 'Facebook',
                    url: '#facebook',
                },
            ]
        },
        {
            name: 'footer-delivery',
            divChild: [
                {
                    name: 'Delivery',
                    numb: '0853-4946-1201'
                }
            ]
        }
    ];

    divClasses.forEach(classObj => {
        const div = document.createElement('div');
        div.className = classObj.name;

        classObj.divChild.forEach(child => {
            if (child.url && child.name) {
                // For info links
                const a = document.createElement('a');
                a.href = child.url;
                a.textContent = child.name;
                div.appendChild(a);
            } else if (child.url && child.icon) {
                // For social icons
                const a = document.createElement('a');
                a.href = child.url;
                a.innerText = child.icon;
                div.appendChild(a);
            } else if (child.numb) {
                // For delivery number
                const span = document.createElement('span');
                span.textContent = `${child.name}: ${child.numb}`;
                div.appendChild(span);
            }
        });

        section.appendChild(div);
    });

    footerElement.appendChild(section);
    footerElement.appendChild(pElement);
    return footerElement.outerHTML;
}
