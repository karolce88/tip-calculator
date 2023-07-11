const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = (e) => {
    const textFromInput = e.target.value.toLowerCase()

    li.forEach(textElement =>{

        if (textElement.textContent.toLocaleLowerCase().indexOf(textFromInput) !== -1) { 
            textElement.style.display = 'flex'
        } else { 
            textElement.style.display = 'none'
        }
    })
}

search.addEventListener('keyup', searchEngine)