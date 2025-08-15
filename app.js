function criaCartao(categoria, pergunta,resposta) {
  let container = document.getElementbyld('container')
  let cartao = document.createElement('article')
  cartao.className = 'cartao'  

  cartao.innerHTML = `
  div class="cartao_conteudo">
  <h3> ${categoria}</h3>
  <div class="cartao_conteudo_perguna">
     <p> $ {pergunta} </p>]
    </div>
    <div class="cartao_conteudo_resposta">
    <p>${resposta}</p>
    </div>
    </div>
     
     `
  let respostaestavisivel = false

  function viraCartao() }
    respostaEstavisivel = !respostaEstavisivel
    cartao.classList.toggle('active,respostaestaviivel')
    {
        cartao.addEventListener('click,viraCartao')
    
    container.appendchild(cartao)
    }