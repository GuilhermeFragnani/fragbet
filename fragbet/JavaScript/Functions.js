const titulo = document.querySelector('h1');
titulo.textContent = 'Texto Modificado';
//Uso principal: Buscar e modificar Html

//Document.createElement()
//Cria novos elementos dinamicamente
const novoElemento = document.createElement('p');
novoElemento.textContent = 'Paragrafo Adicionado';
document.body.appendChild(novoElemento); // Adicionar novos elementos ao Dom
//addEventListener()
// Funcoes que lidam com interacoes dos usuarios