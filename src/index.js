import './styles.scss'

const headerTemplate = require('./components/header/header.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement('header')
    header.innerHTML = headerTemplate({
        sectionName: [
            { name: 'Home' },
            { name: 'Product' },
            { name: 'Pricing' },
            { name: 'Contact' },
        ],
    })
    header.classList.add('header')
    document.body.append(header)
    const search = document.querySelector('.nav-input')
    const searchButton = document.querySelector('.search-button')

    searchButton.addEventListener('click', () => {
        search.classList.toggle('display')
    })
})
