const form = document.querySelector('form');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const total = parseFloat(document.getElementById('total').value);
  const pessoas = parseInt(document.getElementById('pessoas').value);

  if (total && pessoas) {
    const valorPorPessoa = (total / pessoas).toFixed(2);
    resultado.innerHTML = `Cada pessoa deve pagar R$ ${valorPorPessoa}`;
  } else {
    resultado.innerHTML = 'Por favor, preencha todos os campos';
  }
});





