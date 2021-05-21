import { apiBase,apiKey} from '../../lib/tmdb'

export default async (req, res) => {

    // Quanda a requisição da busca da página Busca em req.query, salva na variavel q
    let q = req.query.q
    // Faz a requisição da API
    const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`)
    const json = await result.json(); // Exporta o resultado em objeto JSON

    res.status(200).json({ 
        list: json.results
     })
  }
  