import CardGame from '../../components/CardGame'

function BoardGaming(amountCards) {
  const $htmlCardGame = CardGame()
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards)

  return $htmlBoardGame
}

export default BoardGaming
