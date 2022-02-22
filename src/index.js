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
    const search = document.querySelector('.nav-input')
    const searchButton = document.querySelector('.search-button')

    searchButton.addEventListener('click', () => {
        search.classList.toggle('open')
    })
    document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(searchButton)
        if (!withinBoundaries) {
            search.classList.remove('open')
        }
    })
})
