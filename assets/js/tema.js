function trocaTema(){
  const tema = document.querySelector('.trocaTema')
  tema.addEventListener('click', (e) => {
    document.body.classList.add('dark')  
  })
  tema.addEventListener('dblclick' , () => {
    document.body.classList.remove('dark')
    document.body.classList.add('transition')
  })

}
trocaTema()