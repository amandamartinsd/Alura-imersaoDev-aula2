var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');


//BOTÃO 1
button1.addEventListener('click', function(e) {
  e.preventDefault();
  // obtem o valor digitado
  var valorDigitado = document.querySelector('.resultado1').value;
  
  var resposta = document.querySelector('.resposta1');
  resposta.style.opacity = '1';
  
  // transforma o valor digitado em letra minuscula
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'michael') {
    resposta.innerHTML = 'Oba! Acertou!'
  } else {
    resposta.innerHTML = 'Quase... tente novamente.'
  }
});

// BOTÃO 2
button2.addEventListener('click', function(e) {
  e.preventDefault();
  // obtem o valor digitado.
  var valorDigitado = document.querySelector('.resultado2').value;
  
  var resposta = document.querySelector('.resposta2');
  resposta.style.opacity = '1';
  
  // Transforma o valor digitado em letra minúscula.
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'dwight') {
    resposta.innerHTML = 'Oba! Acertou!'
  } else {
    resposta.innerHTML = 'Quase... tente novamente.'
  }
});

// BOTÃO 3
button3.addEventListener('click', function(e) {
  e.preventDefault();
  // Obtem o valor digitado
  var valorDigitado = document.querySelector('.resultado3').value;
  
  var resposta = document.querySelector('.resposta3');
  resposta.style.opacity = '1';
  
  // Transforma o valor digitado em letra minúscula.
  valorDigitado = valorDigitado.toLowerCase();
  
  if (valorDigitado === 'stanley') {
    resposta.innerHTML = 'Oba! Acertou!'
  } else {
    resposta.innerHTML = 'Quase... tente novamente.'
  }
});

//escrendo na tela - document.write() - podemos colocar texto, número, texto, um monte de coisa e exibindo na tela
//h2 neste caso é o quadradinho branco da calculadora - a pessoa que fez o CSS (fron-end) já deixou determinado que este espaço era o h2
//contatenação - juntar vários resultados para que faça sentido - juntamos tudo hehe
// == que usamos para comparação é diferente do = que usamos para fazer atribuição

//if = se
//else = senão - nao vai validar nada, ele é como o "resto"
//else if = senão se