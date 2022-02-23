import './styles.scss'

const headerTemplate = require('./components/header/header.handlebars')
const topSectionTemplate = require('./components/top-section/top-section.handlebars')

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

    const topSection = document.createElement('section')
    topSection.innerHTML = topSectionTemplate()
    document.body.append(topSection)

    document.addEventListener('click', (e) => {
        const search = document.querySelectorAll('.nav-input')
        const { target } = e
        const mobInputSearch = document.querySelector('.mobile-nav .nav-input')
        const inputContainer = document.querySelector('.input-mob-container')

        for (let j = 0; j < search.length; j += 1) {
            if (
                !(
                    target.closest('#search-btn-desk') ||
                    target.closest('#search-btn-mob') ||
                    target.classList.contains('nav-input')
                ) &&
                !search[j].value &&
                !mobInputSearch.value
            ) {
                search[j].classList.remove('input-open')
                inputContainer.classList.remove('input-mob-container-open')
            }

            if (
                (target.closest('#search-btn-desk') ||
                    target.closest('#search-btn-mob')) &&
                !search[j].value
            ) {
                search[j].classList.toggle('input-open')
            }
        }

        if (target.closest('#search-btn-mob') && !mobInputSearch.value) {
            inputContainer.classList.toggle('input-mob-container-open')
        }

        const mobileMenu = document.querySelector('.mobile-menu')
        if (!(target.closest('.nav-list') || target.closest('#burger-btn'))) {
            mobileMenu.classList.remove('mobile-menu-open')
        }
        if (target.closest('#burger-btn')) {
            mobileMenu.classList.toggle('mobile-menu-open')
        }
    })
})
