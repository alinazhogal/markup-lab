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
    const searchButton = document.querySelectorAll('.search-button')

    document.addEventListener('click', (e) => {
        const { target } = e
        for (let i = 0; i < searchButton.length; i += 1) {
            for (let j = 0; j < search.length; j += 1) {
                const inputOpen = search[j].classList.contains('open')
                if (!target.classList.contains('search-button') && inputOpen) {
                    search[j].classList.remove('open')
                }
                if (target.closest('.search-button')) {
                    search[j].classList.toggle('open')
                }
            }
        }
    })

    // for (let i = 0; i < searchButton.length; i+=1) {
    // searchButton[i].addEventListener('click', (e) => {
    //     console.log(e.target)
    //     for (let j = 0; j < search.length; j+=1) {
    //         if (e.target !== searchButton[i]) {
    //             search[j].classList.remove('open')
    //         }
    //     search[j].classList.toggle('open')}

    // })}

    const burgerButton = document.querySelector('.burger-button')
    const mobileMenu = document.querySelector('.mobile-menu')
    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-menu-open')
    })
})
