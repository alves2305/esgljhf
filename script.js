function conferir() {
    let input = document.getElementById('input').value;
    let imagem = document.getElementById('imagem');
    
    if (input == "lino") {
        imagem.style.backgroundImage = 'url("./lino.png")'
    }
    else if (input == 'estrela') {
        imagem.style.backgroundImage = 'url("./estrela.png")'
    }
    else if (input == 'tchala') {
        imagem.style.backgroundImage = 'url("./tchala.png")'
    }
    
    

}

