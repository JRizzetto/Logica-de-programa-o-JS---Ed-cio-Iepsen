const frm = document.querySelector("form");
const resp01 = document.querySelector(".resp01")
const resp02 = document.querySelector(".resp02")

frm.addEventListener("submit", (evt)=>{
    const produto = frm.inProduto.value;
    const preco = Number(frm.inPreco.value);

    const promocao = 3*preco-(preco*.5);

    resp01.innerHTML = `${produto} - Promoção: Leve 3 por R$: ${promocao.toFixed(2)}`;
    resp02.innerHTML = `O terceiro produto custa apenas ${(preco*0.5).toFixed(2)}`;

    evt.preventDefault();
})