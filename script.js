document.addEventListener("DOMContentLoaded", function () {
    atualizarResultados();
    gerarPalpites();
});

// Simulação da coleta de resultados (depois podemos integrar com uma fonte real)
function atualizarResultados() {
    let resultados = document.getElementById("resultados");
    let agora = new Date().toLocaleTimeString();
    
    resultados.innerHTML = `
        <h2>Resultados ao Vivo</h2>
        <p>Última atualização: ${agora}</p>
        <p>Banca A: 1234 - Grupo 10</p>
        <p>Banca B: 5678 - Grupo 20</p>
    `;

    // Atualiza os resultados a cada 5 minutos
    setTimeout(atualizarResultados, 300000);
}

// Gerar 10 palpites automáticos
function gerarPalpites() {
    let palpites = document.getElementById("palpites");
    let numeros = [];

    for (let i = 0; i < 10; i++) {
        let milhar = Math.floor(1000 + Math.random() * 9000);
        let grupo = Math.floor(1 + Math.random() * 25);
        numeros.push(`Milhar: ${milhar} - Grupo: ${grupo}`);
    }

    palpites.innerHTML = `
        <h2>Palpites do Dia</h2>
        <ul>
            ${numeros.map(num => `<li>${num}</li>`).join("")}
        </ul>
    `;

    // Atualiza os palpites a cada 3 horas
    setTimeout(gerarPalpites, 10800000);
      }
