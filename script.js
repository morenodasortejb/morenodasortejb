// Função para gerar milhar aleatória
function gerarMilhar() {
  return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
}

// Frases motivacionais
const frases = [
  "Que o universo faça de ti um grande ganhador hoje!",
  "A sorte está ao seu lado, acredite!",
  "Hoje é o dia da virada!",
  "O jogo do bicho te espera com grandes prêmios!"
];

// Botão Oráculo
document.getElementById('sorte-button').addEventListener('click', () => {
  const milhar = gerarMilhar();
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById('milhar').textContent = `Milhar: ${milhar}`;
  document.getElementById('frase').textContent = frase;
});

// Atualizar resultados e palpites via API
async function atualizarResultadosEBanca() {
  const response = await fetch('/api/results');
  const data = await response.json();

  const resultadosContainer = document.getElementById('banca-results');
  const palpitesContainer = document.getElementById('palpites-container');

  resultadosContainer.innerHTML = '';
  palpitesContainer.innerHTML = '';

  data.forEach(({ banca, resultado, palpites }) => {
    // Exibir resultados
    resultadosContainer.innerHTML += `
      <div>
        <h3>${banca}</h3>
        <p>Resultado: ${resultado} <img src="images/bichos/${resultado.slice(-2)}.png" alt="Bicho"></p>
      </div>
    `;

    // Exibir palpites
    palpitesContainer.innerHTML += `
      <div>
        <h3>Palpites para ${banca}</h3>
        <ul>
          ${palpites.map(palpite => `<li>${palpite} <img src="images/bichos/${palpite.slice(-2)}.png" alt="Bicho"></li>`).join('')}
        </ul>
      </div>
    `;
  });
}

// Atualizar resultados a cada 5 minutos
setInterval(atualizarResultadosEBanca, 5 * 60 * 1000);
atualizarResultadosEBanca(); // Atualiza imediatamente ao carregar
