document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Login realizado com sucesso!');
    });

    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Registro realizado com sucesso!');
    });

    document.getElementById('forgot-password').addEventListener('click', function() {
        alert('Link de recuperação de senha enviado!');
    });

    const produtosDestaque = document.getElementById('destaques');
    produtosDestaque.innerHTML = `
        <div>
            <img src="produto1.jpg" alt="Produto 1">
            <p>Produto 1</p>
            <p>R$ 100,00</p>
            <button>Adicionar ao Carrinho</button>
        </div>
    `;

});
