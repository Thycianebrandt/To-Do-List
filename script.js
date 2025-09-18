document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('tarefaInput');
  const botao = document.getElementById('adicionarBtn');
  const lista = document.getElementById('listaTarefas');
  const modoBtn = document.getElementById('modoNoturnoBtn');

  botao.addEventListener('click', adicionarTarefa);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') adicionarTarefa();
  });

  modoBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  function adicionarTarefa() {
    const texto = input.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.textContent = texto;

    const botoes = document.createElement('div');

    const concluir = document.createElement('button');
    concluir.textContent = '✔';
    concluir.style.marginRight = '10px';
    concluir.style.backgroundColor = '#2196F3';
    concluir.onclick = () => {
      li.classList.toggle('completed');
    };

    const excluir = document.createElement('button');
    excluir.textContent = '🗑';
    excluir.style.backgroundColor = '#f44336';
    excluir.onclick = () => {
      lista.removeChild(li);
    };

    botoes.appendChild(concluir);
    botoes.appendChild(excluir);
    li.appendChild(botoes);

    lista.appendChild(li);
    input.value = '';
  }
});