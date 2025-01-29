//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = '';
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpa a lista para atualizá-la

  amigos.forEach((nome, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = nome;
    listItem.className = 'list-item'; // Classe para estilização
    lista.appendChild(listItem);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista está vazia. Adicione ao menos um nome antes de sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li class="result-item">Amigo secreto sorteado: <strong>${amigoSorteado}</strong></li>`;
}
