const injuryInput = document.getElementById('injury')


document.getElementById('add-injury').addEventListener('click', addText)


function addText() {
    const ul = document.getElementById('anatomy-list')
    const injuryLiList = ul.children
    const injuryTextList = [...injuryLiList].map(li=> li.textContent)
    console.log(injuryTextList)

    let injuryText = injuryInput.value
    
    if(!injuryTextList.includes(injuryText)){
        let node = document.createElement('li')
        node.appendChild(document.createTextNode(injuryText))
        
        let button = document.createElement('button')
        
        button.textContent = '    X'
        node.appendChild(button)
        node.addEventListener('click', (event)=>{
            const deleteButton = event.target;
            const listItem = deleteButton.parentNode
            listItem.remove()
        })
        document.querySelector('ul').appendChild(node)
    }
}

