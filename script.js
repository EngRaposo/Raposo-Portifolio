function enviarwhats(event){
event.preventDefault()
const nome= document.getElementById('input-nome').value;
const mensagem= document.getElementById('mensagem').value;
const telefone= '258861690693';
const texto = `olá! Me chamo ${nome}, ${mensagem}`
const msgFormatada = encodeURIComponent(texto)
const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

window.open(url, '_blank')

}


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked= elem.getAttribute("data-percent")
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360 / dots;


    for(let i = 0 ; i <dots ; i++){
        points += ` <div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked= elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    } 
}) 