export const allowVehicles = (locations = [], vehicles = []) => {
  let ans = []
  for (
    let indexLocation = 0;
    indexLocation < locations.length;
    indexLocation++
  ) {
    ans[indexLocation] = { allow: [] }
    for (let indexVehicle = 0; indexVehicle < vehicles.length; indexVehicle++) {
      const hasSkill = locations[indexLocation].skills.every(skill =>
        vehicles[indexVehicle].skills.includes(skill)
      )
      if (hasSkill) {
        ans[indexLocation].allow.push(indexVehicle)
      }
    }
  }

  return [...ans.map(a => a.allow)]
}
