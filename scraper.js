const axios = require('axios');
const cheerio = require('cheerio');

// Simulação de bancas e URLs de resultados
const bancas = [
  { nome: 'Banca A', url: 'https://exemplo.com/resultados-banca-a' },
  { nome: 'Banca B', url: 'https://exemplo.com/resultados-banca-b' },
  { nome: 'Banca C', url: 'https://exemplo.com/resultados-banca-c' }
];

async function getResults() {
  const results = [];

  for (const { nome, url } of bancas) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);

      // Extrair resultado (ajuste o seletor conforme o site)
      const resultado = $('selector-do-resultado').text().trim();

      // Gerar palpites
      const palpites = Array.from({ length: 10 }, () => {
        return Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      });

      results.push({ banca: nome, resultado, palpites });
    } catch (error) {
      console.error(`Erro ao buscar resultados da ${nome}:`, error.message);
    }
  }

  return results;
}

module.exports = { getResults };
