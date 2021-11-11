const parseDiceString = (diceString) => {
  return diceString.split(' ').map((dice) => parseDice(dice))
}

const parseDice = (dice) => {
  let result = 0
  let die = dice.toLowerCase().split(/(d|\+)/)
  console.log('die: ' + die)

  for (let i = 0; i < die[0]; i++) {
    result += rollNSidedDice(die[2])
  }

  if (die.find((element) => element === '+')) {
    result += Number(die[4])
  }
  console.log('parseDice: ' + result)

  return result
}

const rollNSidedDice = (n) => {
  return Math.ceil(Math.random() * n)
}

const DiceService = { parseDiceString, rollNSidedDice }

export default DiceService
