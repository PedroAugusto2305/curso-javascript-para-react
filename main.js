import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BoardGaming from './src/objects/BoardGame'
import PlayerName from './src/components/PlayerName'
import ScoreBoard from './src/objects/ScoreBoard'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
  ${ScoreBoard()}
  ${BoardGaming(6)}
  `
)
