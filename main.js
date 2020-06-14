//import { generators }  from './js/generators.js';
let generators = []
function createGenerators(gen) {
  for (let i in gen) {
    let generator = {
      cost: gen[i][0],
      production: gen[i][1],
      costIncrease: gen[i][2],
      name: gen[i][3],
      amount: 0
    }
    generators.push(generator)

  }

}
createGenerators([[10, 0.5, 20, "The Intern"]])
let player = {
  cash: 0,
}

player.generators = generators
console.log(player.generators)
function updateGUI(GUI) {
  for (let i in GUI) {
    document.getElementById(GUI[i][0]).innerHTML = GUI[i][1]
  }
}
function mainLoop() {
   updateGUI([
    ["amountOfCash", "You have $" + player.cash]
  ])
}
setTimeout(function() {
  document.getElementById("getCash").hidden = false
  document.getElementById("getCash").addEventListener("click", function () {
    player.cash++
  })
  setInterval(mainLoop,100)
},500)
