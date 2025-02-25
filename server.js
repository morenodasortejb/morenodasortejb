const express = require('express');
const path = require('path');
const { getResults } = require('./scraper');

const app = express();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para obter resultados
app.get('/api/results', async (req, res) => {
  try {
    const results = await getResults();
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar resultados' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
