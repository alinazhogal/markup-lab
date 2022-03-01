import './styles.scss'
import 'video.js'

const environmentalBenefitIcon = require('./img/environmental-benefit.svg')
const saveMoneyBenefitIcon = require('./img/save-money-benefit.svg')
const travelBenefitIcon = require('./img/travel-benefit.svg')
const reviewerPhoto1 = require('./img/review-photo-1.png')
const teamPhoto1 = require('./img/team-1.png')
const teamPhoto2 = require('./img/team-2.png')
const teamPhoto3 = require('./img/team-3.png')

const headerTemplate = require('./components/header/header.handlebars')
const topSectionTemplate = require('./components/top-section/top-section.handlebars')
const topModalTemplate = require('./components/book-appointment-modal/book-appoin-modal.handlebars')
const clientMattersTemplate = require('./components/client-matters/client-matters.handlebars')
const aboutUsTemplate = require('./components/about-us/about-us.handlebars')
const reviewsTemplate = require('./components/reviews-section/reviews-section.handlebars')
const teamTemplate = require('./components/team-section/team-section.handlebars')
const contactUsTemplate = require('./components/contact-us-section/contact-us-section.handlebars')
const footerTemplate = require('./components/footer/footer.handlebars')

function createHTMLElement(element, template, templateObj, placeToAppend) {
    const elementHTML = document.createElement(element)
    elementHTML.innerHTML = template(templateObj)
    placeToAppend.append(elementHTML)
    return elementHTML
}

document.addEventListener('DOMContentLoaded', () => {
    const header = createHTMLElement(
        'header',
        headerTemplate,
        {
            sectionName: [
                { name: 'Home', url: '/home' },
                { name: 'Product', url: '/product' },
                { name: 'Pricing', url: '/pricing' },
                { name: 'Contact', url: '/contact' },
            ],
        },
        document.body
    )

    createHTMLElement(
        'section',
        topSectionTemplate,
        {},
        document.body
    ).classList.add('top-section')

    createHTMLElement(
        'div',
        topModalTemplate,
        {
            input: [
                {
                    label: 'Name',
                    type: 'text',
                    placeholder: 'Full Name',
                    id: 'name',
                },
                {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@gmail.com',
                    id: 'email',
                },
            ],
            select: [
                {
                    label: 'Department',
                    name: 'department',
                    default: 'Please Select',
                    option: [{ value: 'Dep' }, { value: 'Dep2' }],
                },
                {
                    label: 'Time',
                    name: 'time',
                    default: '4:00 Available',
                    option: [{ value: 'Time' }, { value: 'Time2' }],
                },
            ],
        },
        document.querySelector('.top-container')
    )

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

        window.addEventListener('resize', () => {
            mobInputSearch.classList.remove('input-open')
            inputContainer.classList.remove('input-mob-container-open')
        })

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

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset
        if (scrollY) {
            header.classList.add('scrolled')
        } else header.classList.remove('scrolled')
    })

    const topAppointButton = document.querySelector('#book-appoint-top')
    const topModal = document.querySelector('.modal')

    topAppointButton.addEventListener('click', () => {
        topModal.classList.toggle('modal-open')
        document.body.classList.add('stop-scrolling')
    })
    const closeModalBut = document.querySelector('#close-modal')

    closeModalBut.addEventListener('click', () => {
        topModal.classList.remove('modal-open')
        document.body.classList.remove('stop-scrolling')
    })

    createHTMLElement(
        'section',
        clientMattersTemplate,
        {
            benefitCard: [
                {
                    headerName: 'Environmental',
                    learnLink: '/',
                    benefitIcon: environmentalBenefitIcon,
                    iconAlt: 'environmental benefit icon',
                    benefitsList: [
                        { name: 'The best products start with Figma' },
                        { name: 'Design with real data' },
                        { name: 'Lightning fast prototyping' },
                        { name: 'Fastest way to organize' },
                        { name: 'Work at the speed of thought' },
                    ],
                },
                {
                    headerName: 'Save money and time',
                    learnLink: '/',
                    benefitIcon: saveMoneyBenefitIcon,
                    iconAlt: 'save money and time benefit icon',
                    benefitsList: [
                        { name: 'The best products start with Figma' },
                        { name: 'Design with real data' },
                        { name: 'Lightning fast prototyping' },
                        { name: 'Fastest way to organize' },
                        { name: 'Work at the speed of thought' },
                    ],
                },
                {
                    headerName: 'Travel & Aviation ',
                    learnLink: '/',
                    benefitIcon: travelBenefitIcon,
                    iconAlt: 'travel and aviation benefit icon',
                    benefitsList: [
                        { name: 'The best products start with Figma' },
                        { name: 'Design with real data' },
                        { name: 'Lightning fast prototyping' },
                        { name: 'Fastest way to organize' },
                        { name: 'Work at the speed of thought' },
                    ],
                },
            ],
        },
        document.body
    )

    createHTMLElement(
        'section',
        aboutUsTemplate,
        {},
        document.body
    ).classList.add('about-us')

    createHTMLElement(
        'section',
        reviewsTemplate,
        {
            reviewCard: [
                {
                    reviewText:
                        'Slate helps you see how many more days you need to work to reach your financial goal.',
                    reviewer: {
                        photo: reviewerPhoto1,
                        name: 'Regina Miles',
                        profession: 'Designer',
                    },
                },
                {
                    reviewText:
                        'Slate helps you see how many more days you need to work to reach your financial goal.',
                    reviewer: {
                        photo: reviewerPhoto1,
                        name: 'Regina Miles',
                        profession: 'Designer',
                    },
                },
                {
                    reviewText:
                        'Slate helps you see how many more days you need to work to reach your financial goal.',
                    reviewer: {
                        photo: reviewerPhoto1,
                        name: 'Regina Miles',
                        profession: 'Designer',
                    },
                },
            ],
        },
        document.body
    ).classList.add('reviews')

    createHTMLElement(
        'section',
        teamTemplate,
        {
            teamMemberCard: [
                { photo: teamPhoto1, name: 'Avie Beaton', role: 'CO Founder' },
                { photo: teamPhoto2, name: 'Ben Jonson', role: 'Consultant' },
                { photo: teamPhoto3, name: 'Ashley Fletcher', role: 'CEO' },
            ],
        },
        document.body
    ).classList.add('team')

    createHTMLElement(
        'section',
        contactUsTemplate,
        {},
        document.body
    ).classList.add('contact-us')

    createHTMLElement(
        'footer',
        footerTemplate,
        {
            lists: [
                {
                    listTitle: 'Company Info',
                    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
                },
                {
                    listTitle: 'Legal',
                    links: ['About Us', 'Carrier', 'We are hiring', 'Blog'],
                },
                {
                    listTitle: 'Features',
                    links: [
                        'Business Marketing',
                        'User Analytic',
                        'Live Chat',
                        'Unlimited Support',
                    ],
                },
                {
                    listTitle: 'Resources',
                    links: [
                        'IOS & Android',
                        'Watch a Demo',
                        'Customers',
                        'API',
                    ],
                },
            ],
        },
        document.body
    )
})
