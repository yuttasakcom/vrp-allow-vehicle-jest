import { allowVehicles } from './index'

const locations1 = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['d', 'e', 'f'],
  },
]
const vehicles1 = [
  {
    skills: ['a', 'b', 'c'],
  },
]

const locations2 = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['d', 'e', 'f'],
  },
]
const vehicles2 = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['d', 'e', 'f'],
  },
]

describe('Test allow vehicles', () => {
  it('call allowVehicles is empty array', () => {
    expect(allowVehicles()).toEqual([])
  })

  it('location1 and vehicle1 has skills', () => {
    const ans = [[0], []]
    expect(allowVehicles(locations1, vehicles1)).toEqual(ans)
  })

  it('location2 and vehicle2 has skills', () => {
    const ans = [[0], [1]]
    expect(allowVehicles(locations2, vehicles2)).toEqual(ans)
  })
})
