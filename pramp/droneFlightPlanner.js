function calcDroneMinEnergy(route) {
  let energy = 0
  let max = 0
  for (let i = 0; i + 1 < route.length; i++) {
    energy += (route[i][2] - route[i+1][2])
    max = Math.min(max, energy)
  }
  return Math.abs(max)
}
