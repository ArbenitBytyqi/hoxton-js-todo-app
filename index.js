function renderOptionsSection() {

    let optionsSection = document.createElement('section')
    optionsSection.classList.add('options')

    let optionsTitle = document.createElement('h2')
    optionsTitle.classList.add('section-title')
    optionsTitle.innerText = 'Options'

    let showCompletedLabel = document.createElement('label')

    let showCompletedInput = document.createElement('input')
    showCompletedInput.type = 'checkbox'

    showCompletedLabel.append('Show Completed', showCompletedInput)
    optionsSection.append(optionsTitle, showCompletedLabel)

    let appEl = document.querySelector('.app')
    appEl.append(optionsSection)
}

function renderApp() {
    let appEl = document.createElement('div')
    appEl.className = 'app'
    document.body.append(appEl)
}

function render() {
    document.body.textContent = ''

    renderApp()

    renderOptionsSection()
}

render()