import AlfredCF94 from './assets/players/AlfredCF94.webp'
import ByOnex from './assets/players/ByOnex.webp'
import Chones from './assets/players/Chones.webp'
import Cyrox from './assets/players/Cyrox.png'
import Darkness from './assets/players/Darkness.webp'
import DieGOAT from './assets/players/DieGOAT.webp'
import Duende from './assets/players/Duende.webp'
import ElChris from './assets/players/ElChris.webp'
import Jaredftp13 from './assets/players/Jaredftp13.webp'
import JosDre from './assets/players/JosDre.webp'

import kitLocal from './assets/kits/local.jpg'
import kitVisitante from './assets/kits/visitante.jpg'
import kitAlternativa from './assets/kits/alternativa.jpg'

import trophyPremierTiktok from './assets/trophies/premier-tiktok.jpg'
import trophyPrRelampago from './assets/trophies/pr-relampago.jpg'
import trophyCarabao from './assets/trophies/carabao.jpg'
import trophyChampions from './assets/trophies/champions.jpg'
import trophyEuropaLeague from './assets/trophies/europa-league.jpg'
import trophySupercopa from './assets/trophies/supercopa.jpg'
import trophyPremierLeague from './assets/trophies/premier-league.jpg'
import trophyPremierLeagueDorada from './assets/trophies/premier-league-dorada.jpg'
import trophyFaCup from './assets/trophies/fa-cup.jpg'

// Perfil de Instagram del equipo.
export const INSTAGRAM_URL = 'https://www.instagram.com/wolfzone.esports/'

// `number` es el dorsal de cada jugador; déjalo en null si no tiene.
// Las fotos son recortes de medio cuerpo con fondo transparente.
export const players = [
  { name: 'AlfredCF94', number: 9, image: AlfredCF94 },
  { name: 'ByOnex', number: 96, image: ByOnex },
  { name: 'Chones', number: 8, image: Chones },
  { name: 'Cyrox', number: 11, image: Cyrox },
  { name: 'Darkness', number: 18, image: Darkness },
  { name: 'DieGOAT', number: 10, image: DieGOAT },
  { name: 'Duende', number: 17, image: Duende },
  { name: 'ElChris', number: 6, image: ElChris },
  { name: 'Jaredftp13', number: 13, image: Jaredftp13 },
  { name: 'JosDre', number: 23, image: JosDre },
]

// `wins` es cuántas veces se ganó el torneo. `fit: 'cover'` recorta imágenes muy anchas para llenar la tarjeta.
export const trophies = [
  { name: 'Premier League', detail: 'Premier Pro', wins: 2, image: trophyPremierLeague },
  { name: 'Premier League', detail: 'Premier Pro', wins: 1, image: trophyPremierLeagueDorada },
  { name: 'Champions League', detail: 'Premier Pro', wins: 1, image: trophyChampions },
  { name: 'Europa League', detail: 'Premier Pro', wins: 1, image: trophyEuropaLeague, fit: 'cover' },
  { name: 'UEFA Super Cup', detail: 'Premier Pro', wins: 1, image: trophySupercopa, fit: 'cover' },
  { name: 'FA Cup', detail: 'Premier Pro', wins: 2, image: trophyFaCup },
  { name: 'Carabao Cup', detail: 'Premier Pro', wins: 2, image: trophyCarabao },
  { name: 'Relámpago Premier TikTok', detail: 'Premier Pro · FC 26', wins: 1, image: trophyPremierTiktok, fit: 'cover' },
  { name: 'PR Relámpago', detail: 'Premier Pro', wins: 1, image: trophyPrRelampago },
]

export const kits = [
  { name: 'Local', description: 'Negro y dorado, los colores de la manada.', image: kitLocal },
  { name: 'Visitante', description: 'Naranja con patrón geométrico.', image: kitVisitante },
  { name: 'Alternativa', description: 'Crema con ondas en magenta.', image: kitAlternativa },
]
