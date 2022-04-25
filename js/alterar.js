// pegar o botão e criar uma função para substituir o texto
document.querySelector('#alterarConteudo').addEventListener('click', () => {
    
    //recuperar o id dados - quando pegamos um elemento do html ele pega tudo do elemento
    //para pegar o que foi digitado use .value
    const novosDados = document.querySelector('#dados').value;

    // passar conteúdo digitado para a div
    document.querySelector('#conteudo').textContent = novosDados;
})