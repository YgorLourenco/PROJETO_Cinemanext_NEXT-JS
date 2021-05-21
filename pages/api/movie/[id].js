import { apiBase,apiKey} from '../../../lib/tmdb'

export default async (req, res) => {
    // Faz a requisição da API para dar a pasta de ID de informação do filme
    const result = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json(); // Exporta o resultado em objeto JSON

    res.status(200).json({ 
        info: json
     })
  }
  