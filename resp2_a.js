const frm = document.querySelector("form");
const resp3 = document.querySelector("h3");
const resp4 = document.querySelector("h4");

frm.addEventListener("submit", (evt)=>{
    const produto = frm.inMed.value;
    const price = Number(frm.inPrice.value);

    const total = price*2;
   
    resp3.innerText = `Promoção de ${produto}`;
    resp4.innerText = `Leve 2 por apenas ${(Math.floor(total)).toFixed(2)}`;
    
    evt.preventDefault();
})