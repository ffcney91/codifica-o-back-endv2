import { Router } from 'express';
import filmesService from '../services/filmes.service.js';

const router = Router();

// Rota GET para listar os filmes
router.get('/filmes', async (req, res) => {
  try {
    const filmes = await filmesService.listarFilmes();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;