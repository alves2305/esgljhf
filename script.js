function conferir() {
    let input = document.getElementById('input').value;
    let imagem = document.getElementById('imagem');
    let contain = document.getElementById('contain3')
    let titulo = document.getElementById('h1')
    if (input == "lino") {
        imagem.style.backgroundImage = 'url("./lino.png")'
        contain.style.display = 'none'
        titulo.innerHTML = ' <h1 id="h1">Filho da putinha mias lindo do bundo. Próximo a desbancar o temido rei tchala</h1> '

    }
    else if (input == 'estrela') {
        imagem.style.backgroundImage = 'url("./estrela.png")'
        contain.style.display = 'none'
        titulo.innerHTML = ' <h1 id="h1">Maior puxa saco dos pais. porem, com razao, gata mais linda desse mundo</h1> '
    }
    else if (input == 'tchala') {
        imagem.style.backgroundImage = 'url("./tchala.png")'
        contain.style.display = 'none'
        titulo.innerHTML = ' <h1 id="h1">temeroso rei tchala, o home é brabo, porem esta proximo de perder seu reinado</h1> '
    }
    
    

}

