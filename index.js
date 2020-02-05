export const allowVehicles = (locations = [], vehicles = []) => {
  let ans = []
  for (
    let indexLocation = 0;
    indexLocation < locations.length;
    indexLocation++
  ) {
    for (let indexVehicle = 0; indexVehicle < vehicles.length; indexVehicle++) {
      const hasSkill = locations[indexLocation].skills.every(skill =>
        vehicles[indexVehicle].skills.includes(skill)
      )
      if (hasSkill) {
        ans[indexLocation] = [indexVehicle]
      } else {
        ans[indexLocation] = []
      }
    }
  }

  return ans
}
