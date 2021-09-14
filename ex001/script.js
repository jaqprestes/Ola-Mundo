function carregar() {   
     var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
if (hora>= 0 && hora < 12){
    msg.innerHTML += ' BOM DIA!'
    img.src = 'manha.png'
    document.body.style.background = '#d4bba4'
}else if (hora >= 12 && hora < 18) {
    msg.innerHTML += ' BOA TARDE!'
    img.src = 'tarde.png'
    document.body.style.background = '#f6bb3a'
}else {
    msg.innerHTML += ' BOA NOITE!'
    img.src = 'noite.png'
    document.body.style.background = '#071c1f'
}
}