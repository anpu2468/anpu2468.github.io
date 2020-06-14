
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
export generators = []
// export created generators to main.js
