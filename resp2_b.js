const frm = document.querySelector("form");
const respH3 = document.querySelector("h3");

frm.addEventListener("submit", (evt)=>{
    const minUso = Number(frm.inValor.value);
    const timeUso = Number(frm.inTime.value);
    
    const tempoUso = (timeUso*minUso)/15;
    
    respH3.innerText = `Valor a pagar R$: ${tempoUso.toFixed(2)}`;

    evt.preventDefault();
})