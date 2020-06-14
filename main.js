import {generators} from './js/generators.js';
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
