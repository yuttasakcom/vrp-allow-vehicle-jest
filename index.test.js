import { allowVehicles } from './index'

const locations = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['c', 'd', 'e'],
  },
]
const vehicles = [
  {
    skills: ['a', 'b', 'c'],
  },
]

describe('Test allow vehicles', () => {
  it('call allowVehicles is empty array', () => {
    expect(allowVehicles()).toEqual([])
  })

  it('vehicle has skills', () => {
    const ans = [[0], []]
    expect(allowVehicles(locations, vehicles)).toEqual(ans)
  })
})
