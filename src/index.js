import './styles.scss'

const headerTemplate = require('./components/header/header.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header')
    header.innerHTML = headerTemplate({
        sectionName: [
            { name: 'Home', url: '/home' },
            { name: 'Product', url: '/product' },
            { name: 'Pricing', url: '/pricing' },
            { name: 'Contact', url: '/contact' },
        ],
    })
    document.body.append(header)

    const search = document.querySelectorAll('.nav-input')

    document.addEventListener('click', (e) => {
        const { target } = e
        for (let j = 0; j < search.length; j += 1) {
            if (
                !(
                    target.closest('.search-button') ||
                    target.classList.contains('nav-input')
                ) &&
                !search[j].value
            ) {
                search[j].classList.remove('input-open')
            }
            if (target.closest('.search-button') && !search[j].value) {
                search[j].classList.toggle('input-open')
            }
        }

        const mobileMenu = document.querySelector('.mobile-menu')
        if (
            !(target.closest('.nav-list') || target.closest('.burger-button'))
        ) {
            mobileMenu.classList.remove('mobile-menu-open')
        }
        if (target.closest('.burger-button')) {
            mobileMenu.classList.toggle('mobile-menu-open')
        }
    })
})
