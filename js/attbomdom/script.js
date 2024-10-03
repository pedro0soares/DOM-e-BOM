alert('Atividade FRONTEND');
console.log('Oi');

console.log(`largura: ${window.innerWidth}, altura${window.innerHeight}`);

localStorage.setItem("Pedro Soares Neto", "18");
var valor1 = localStorage.getItem('Pedro Soares Neto');
console.log(valor1);

var Div = document.createElement("div"); 
Div.id = "meuDiv"; 
document.body.appendChild(Div); 

Div.textContent = "texto pra div";
Div.style.background = 'blue';
Div.style.fontFamily = 'Arial';
Div.style.color = "White";
Div.style.border = "1px solid black";

var P = document.querySelector('p')

P.innerHTML = 'Novo conteudo';
P.style.backgroundColor = 'red';

var imagem = document.querySelector('img');

imagem.setAttribute("title", "Imagem dinâmica");

const botao = document.createElement("button"); 
botao.textContent = "Clique aqui"; 
document.body.appendChild(botao); 

botao.addEventListener("click", () => {
    Div.textContent = "Conteúdo alterado";
});


window.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        console.log("tecla Enter pressionada"); 
    }
});

const ul = document.createElement("ul");
document.body.appendChild(ul);

function adicionarItem() {
    const li = document.createElement("li");
    li.textContent = "Item da lista";
    
    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", () => {
        ul.removeChild(li);
    });
    
    li.appendChild(botaoRemover);
}


adicionarItem();
adicionarItem();
adicionarItem();
