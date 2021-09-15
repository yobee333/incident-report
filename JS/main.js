
document.querySelector('area').addEventListener('click', selectArea)

function selectArea(){
    const bodyPart = document.querySelector('area').value

    document.querySelector('#selectedArea').innerText = bodyPart
}