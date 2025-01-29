# Desafio de Lógica de Programação - Amigo Secreto

Este repositório contém a solução para o desafio proposto pela Alura, cujo objetivo principal é desenvolver habilidades em lógica de programação utilizando JavaScript. O desafio foi projetado para que eu pudesse me concentrar exclusivamente na construção da lógica do código, enquanto o HTML e CSS foram fornecidos prontos.

## Objetivo

O desafio consiste em criar um sistema simples de sorteio de "Amigo Secreto". A aplicação permite que o usuário adicione nomes de amigos a uma lista e, em seguida, sorteie um nome aleatoriamente.

## Funcionalidades Implementadas

1. **Adicionar Amigos**: O usuário pode adicionar nomes de amigos a uma lista. O nome é validado para garantir que não seja vazio.
2. **Atualizar Lista**: A lista de amigos é atualizada dinamicamente na interface do usuário sempre que um novo nome é adicionado.
3. **Sortear Amigo**: O sistema sorteia um nome aleatoriamente da lista de amigos e exibe o resultado na tela.

## Código JavaScript

A lógica do projeto foi implementada utilizando os seguintes conceitos-chave de JavaScript:

- **Funções**: Para modularizar o código e reutilizar funcionalidades.
- **Arrays**: Para armazenar e manipular a lista de nomes.
- **Condicionais**: Para validar entradas e controlar o fluxo do programa.
- **Manipulação do DOM**: Para interagir com a interface do usuário e atualizar a lista de amigos e o resultado do sorteio.

Aqui está o código JavaScript desenvolvido:

```javascript
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
