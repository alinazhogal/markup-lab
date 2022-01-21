import './styles.scss'

const teamSectionTemplate = require('./components/team-section/team-section.handlebars')

document.addEventListener('DOMContentLoaded', () => {
    // Team Section component start
    const teamSection = document.createElement('section')
    teamSection.innerHTML = teamSectionTemplate({
        title: 'Meet Our Team',
        description:
            'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics',
        team: [
            { name: 'Avie Beaton', position: 'CO Founder' },
            { name: 'Ben Jonson', position: 'Consultant' },
            { name: 'Ashley Fletcher', position: 'CEO' },
        ],
    })
    teamSection.classList.add('team-section')
    // Team Section component end

    document.body.appendChild(teamSection)
})
