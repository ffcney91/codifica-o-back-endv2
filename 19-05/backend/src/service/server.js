import express from 'express';
import dotenv from 'dotenv';
import filmesRouter from '../routes/filmes.route.js';

// Carrega as variáveis de ambiente antes de tudo
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Integrando as rotas de filmes no servidor
app.use(filmesRouter);

app.get('/', (req, res) => {
  res.json({ message: "Servidor integrado e rodando!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});