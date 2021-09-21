const injuryInput = document.getElementById('injury')
const ul = document.querySelector('ul')
const injuryList = document.getElementsByTagName('li')

document.getElementById('injury').addEventListener('click', addText)


function addText() {
    
    let injuryText = injuryInput.options[injuryInput.selectedIndex].text
    let node = document.createElement('li')
    // document.getElementById('injury-list').innerHTML = injuryText

    node.appendChild(document.createTextNode(injuryText))
    document.querySelector('ul').appendChild(node)
}

