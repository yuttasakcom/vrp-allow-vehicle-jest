export const allowVehicles = (location, vehicle) => {
  for (
    let indexLocation = 0;
    indexLocation < location.length;
    indexLocation++
  ) {
    for (let indexVehicle = 0; indexVehicle < vehicle.length; indexVehicle++) {
      const allowSlot = location[indexLocation].slot.every(l =>
        vehicle[indexVehicle].slot.includes(l)
      )
      const allowSkills = location[indexLocation].skills.every(l =>
        vehicle[indexVehicle].skills.includes(l)
      )
      if (allowSlot && allowSkills) {
        location[indexLocation].allow.push(indexVehicle)
      }
    }
  }

  return [...location.map(o => o.allow)]
}
