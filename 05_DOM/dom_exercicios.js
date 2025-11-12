// 1. Modifica o texto do parágrafo
document.getElementById('meuParagrafo').textContent = "Texto alterado com JavaScript";

// 2. Botão para adicionar itens à lista
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('minhaLista');
botaoAdicionar.addEventListener('click', function() {
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Novo item';
    lista.appendChild(novoItem);
});

// 3. Alterar cor do parágrafo para uma cor aleatória
function corAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
const paragrafo = document.getElementById('paragrafoEstilo');
const botaoCor = document.getElementById('btnMudaCor');
botaoCor.addEventListener('click', function() {
    paragrafo.style.color = corAleatoria();
});

// 4. Adiciona o atributo href ao link via botão
const link = document.getElementById('meuLink');
const botaoHref = document.getElementById('btnAdicionaHref');
botaoHref.addEventListener('click', function() {
    link.setAttribute('href', 'https://www.exemplo.com');
    link.textContent = 'Abrir exemplo.com';
});

// 5. Validação de campo obrigatório (nome)
const formNome = document.getElementById('formNome');
const nomeInput = document.getElementById('nome');
const erroNome = document.getElementById('erroNome');

formNome.addEventListener('submit', function(event) {
    if (nomeInput.value.trim() === "") {
        erroNome.style.display = "inline";
        event.preventDefault();
    } else {
        erroNome.style.display = "none";
    }
});

// 6. Validação de email com mensagem de erro
const formEmail = document.getElementById('formEmail');
const emailInput = document.getElementById('email');
const erroEmail = document.getElementById('erroEmail');

formEmail.addEventListener('submit', function(event) {
    if (!emailInput.value.includes('@')) {
        erroEmail.style.display = "inline";
        event.preventDefault();
    } else {
        erroEmail.style.display = "none";
    }
});

// 7. Validação de senha (campos iguais)
const formSenha = document.getElementById('formSenha');
const senhaInput = document.getElementById('senha');
const confirmaSenhaInput = document.getElementById('confirmaSenha');
const erroSenha = document.getElementById('erroSenha');

formSenha.addEventListener('submit', function(event) {
    if (senhaInput.value !== confirmaSenhaInput.value || senhaInput.value === "") {
        erroSenha.style.display = "inline";
        event.preventDefault();
    } else {
        erroSenha.style.display = "none";
    }
});

// 8. Contador dinâmico de caracteres
const comentario = document.getElementById('comentario');
const contador = document.getElementById('contador');
const limite = 200;

comentario.addEventListener('input', function() {
    const restante = limite - comentario.value.length;
    contador.textContent = restante;
});
