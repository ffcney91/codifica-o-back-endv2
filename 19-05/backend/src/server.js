import express from 'express';

const app = express();
const PORT = 3000; // Porta onde o servidor vai rodar

// Configura o Express para entender dados em formato JSON
app.use(express.json());

// Rota inicial de teste (página inicial)
app.get('/', (req, res) => {
  res.json({ message: "O backend está funcionando perfeitamente!" });
});

// Liga o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
});