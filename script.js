function conferir() {
    let input = document.getElementById('input').value.trim().toUpperCase(); // Adicionando trim() para remover espaços em branco extras
    let imagem = document.getElementById('imagem');
    let contain = document.getElementById('contain3');
    let titulo = document.getElementById('titulo');

    if (!input) {
        alert("Por favor, insira um nome de pet válido.");
        return; // Se o input estiver vazio, não faça nada
    }

    if (input === "LINO") {
        imagem.style.backgroundImage = 'url("./lino.png")';
        contain.style.display = 'none';
        titulo.textContent = 'Filho da putinha mais lindo do mundo. Próximo a desbancar o temido rei TChalla'; // Usando textContent para definir o texto
    } else if (input === 'ESTRELA') {
        imagem.style.backgroundImage = 'url("./estrela.png")';
        contain.style.display = 'none';
        titulo.textContent = 'Maior puxa saco dos pais, mas com razão. Gata mais linda desse mundo';
    } else if (input === 'TCHALA') {
        imagem.style.backgroundImage = 'url("./tchala.png")';
        contain.style.display = 'none';
        titulo.textContent = 'Temeroso rei T\'Challa, o homem é brabo, mas está próximo de perder seu reinado';
    } 
    else if (input === 'NAKIA') {
        imagem.style.backgroundImage = 'url("./nakia.png")';
        contain.style.display = 'none';
        titulo.textContent = 'Tímida, medrosa e com problemas de interação social. Nossa adolescente que fica trancada o dia todo no quarto assistindo dorama e anime';
    } 
    else {
        alert("Nome de pet não reconhecido.");
    }


}

function voltar() {
    let testeF = document.getElementById("contain3");
    let imagem = document.getElementById('imagem');
    let voltar = document.getElementById('div-voltar');
    let titulo = document.getElementById('titulo');

    // Removendo a imagem e ajustando o texto do título
    imagem.style.backgroundImage = 'none';
    titulo.textContent = 'Caracteristicas dos nossos pets';

    // Mostrando novamente o container e removendo a classe "teste" do botão voltar
    testeF.style.display = 'block';
    voltar.classList.remove("teste");
}


