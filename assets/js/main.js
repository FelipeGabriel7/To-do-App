let listaTarefa = document.querySelector('.tarefas');
let totaltarefas = document.querySelector('.total-tarefas');
let armazenaTarefas = JSON.parse(localStorage.getItem('Tarefa')) || [];
let contagemTarefas = 0;
let erro = document.querySelector('.erro')


function AdicionaTarefas() {

  let botaoTarefa = document.querySelector('.btn-adiciona')
  let addTarefa = document.querySelector('.adicionaTarefa');

  botaoTarefa.addEventListener('click', (e) => {

    e.preventDefault();
    
    let tarefa = addTarefa.value;

    if (tarefa === '' || tarefa.value === 'number') {
      erro.classList.add('erro')
      return erro.innerHTML = 'Não é possível adicionar uma tarefa vazia'
    }

    erro.classList.add('erro-none')
    contagemTarefas++
    addTarefa.textContent = ''

    let buttonDelete = document.createElement('button')
    let buttonEdit = document.createElement('button')
    let liTarefas = document.createElement('li')

    liTarefas.textContent = tarefa
    buttonDelete.textContent = 'Deletar'
    buttonEdit.textContent = 'Editar'
    buttonDelete.classList.add('delete-tarefa')
    buttonEdit.classList.add('edit-tarefa')

    liTarefas.classList.add('tarefa-text')
    totaltarefas.innerHTML = ' Tarefas :  ' + contagemTarefas

    liTarefas.appendChild(buttonEdit)
    liTarefas.appendChild(buttonDelete)
    listaTarefa.appendChild(liTarefas)

    deletaTarefa(buttonDelete, liTarefas)
    editaTarefa(buttonEdit, liTarefas, buttonDelete)
    armazena(tarefa)
  })
}

function deletaTarefa(buttonDelete, liTarefas) {
  buttonDelete.addEventListener('click', (e) => {
    let confirma = confirm(' Você deseja remover essa Tarefa ')

    if (confirma === true) {

      contagemTarefas--
      totaltarefas.innerHTML = ' Tarefas : ' + contagemTarefas
      liTarefas.remove()
      localStorage.removeItem(e.target.value);
      addTarefa.textContent = ''

    } else {
      return;
    }
  })
}

function editaTarefa(buttonEdit, liTarefas, buttonDelete) {
  buttonEdit.addEventListener('click', () => {

    let promp = prompt(' Edite a Tarefa ');

    if (!promp) return liTarefas;

    liTarefas.textContent = promp;
    liTarefas.appendChild(buttonEdit)
    liTarefas.appendChild(buttonDelete)
  })
}

function armazena(tarefa) {
  const indice = armazenaTarefas.indexOf(armazenaTarefas)
  const existeNoLocalStorage = indice !== -1

  if (existeNoLocalStorage) {
    armazenaTarefas.splice(indice, 1)
  } else {
    armazenaTarefas.push(tarefa)
  }

  localStorage.setItem('Tarefa', JSON.stringify
    (armazenaTarefas))

}

AdicionaTarefas();