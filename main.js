import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import BoardGaming from './src/objects/BoardGame'

const $root = document.querySelector('#root')
const $htmlBoardGame = BoardGaming(6)

$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
