import pool from '../config/db.js';

class FilmesService {
  // Função assíncrona para buscar todos os filmes (READ do CRUD)
  async listarFilmes() {
    try {
      const resultado = await pool.query('SELECT * FROM filmes;');
      return resultado.rows;
    } catch (error) {
      console.error('Erro ao buscar filmes no banco de dados:', error);
      throw new Error('Erro ao processar a busca de filmes.');
    }
  }
}

// Exporta uma instância da classe (requisito obrigatório)
export default new FilmesService();