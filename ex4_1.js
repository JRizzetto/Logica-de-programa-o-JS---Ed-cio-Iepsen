const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    const nome = frm.inNome.value; 
    const nota1 = Number(frm.inNota1.value); 
    const nota2 = Number(frm.inNota2.value); 

    const media = (nota1 + nota2) / 2;
    
    resp1.innerText = `Média das notas: ${media.toFixed(2)}`

    if(media >= 7){
        resp2.innerText = `Parabéns ${nome}, Você foi aprovado(a)!`
        resp2.style.color = "blue"
    } else if (media >=4){
        resp2.innerHTML = `${nome}, você está de exame`
        resp2.style.color = "green"
    } else{
        resp2.innerText = `${nome}, você foi reprovado =(`
        resp2.style.color = "red"
    }

    evt.preventDefault();
})

