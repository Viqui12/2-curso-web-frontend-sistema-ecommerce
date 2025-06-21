console.log("Hello World");

// Lista de produtos disponíveis com nome e preço
const produtosDisponiveis = [
  { nome: "Camisa", preco: 50.0 },
  { nome: "Calça", preco: 100.0 },
  { nome: "Sapato", preco: 150.0 },
  { nome: "Boné", preco: 25.0 },
];

// Carrinho de comp<script>
        let carrinho = [];

        function adicionarAoCarrinho() {
            let produto = document.getElementById("produto");
            let quantidade = document.getElementById("quantidade").value;
            let nomeProduto = produto.options[produto.selectedIndex].text;
            let preco = produto.value;
            let total = preco * quantidade;

            carrinho.push({ nome: nomeProduto, quantidade: quantidade, total: total });

            alert(`${nomeProduto} adicionado! Quantidade: ${quantidade}, Total: R$${total}`);
        }

        function mostrarCarrinho() {
            let carrinhoDiv = document.getElementById("carrinho");
            carrinhoDiv.innerHTML = "<h3>Itens no carrinho:</h3>";
            carrinho.forEach(item => {
                carrinhoDiv.innerHTML += `<p>${item.nome} - Quantidade: ${item.quantidade}, Total: R$${item.total}</p>`;
            });
        }
    
  
  
