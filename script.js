const mainTag=document.querySelector('main')
const modalBtn=document.querySelector('button')
const modalInfo=document.createElement('div')
modalInfo.className='box_alert' // agrego el nombre de la clase

modalBtn.addEventListener('click',()=>{
    mainTag.appendChild(modalInfo)
})
const userTag=document.createElement('input')
userTag.setAttribute('type','text')
modalInfo.appendChild(userTag)
const btnInpt=document.createElement('button')
btnInpt.textContent='boton de prueba'
btnInpt.setAttribute('type','submit')
modalInfo.appendChild(btnInpt)
function reloadMyWebPage(){
    location.reload()
}