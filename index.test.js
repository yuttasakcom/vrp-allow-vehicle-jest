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

const locations3 = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['d', 'e', 'f'],
  },
]
const vehicles3 = [
  {
    skills: ['d', 'e', 'f'],
  },
]

const locations4 = [
  {
    skills: ['a', 'b', 'c'],
  },
  {
    skills: ['d', 'e', 'f'],
  },
  {
    skills: ['g', 'h', 'i'],
  },
  {
    skills: ['j', 'k', 'l'],
  },
  {
    skills: ['m', 'n', 'o'],
  },
  {
    skills: ['p', 'q', 'r'],
  },
  {
    skills: ['s', 't', 'u'],
  },
  {
    skills: ['v', 'w', 'x'],
  },
  {
    skills: ['y', 'z'],
  },
]
const vehicles4 = [
  {
    skills: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
  {
    skills: ['a', 'b', 'c', 'g', 'h', 'i'],
  },
  {
    skills: ['j', 'k', 'l', 'm', 'n', 'o'],
  },
  {
    skills: ['p', 'q', 'r', 'v', 'w', 'x', 'y', 'z'],
  },
  {
    skills: ['a', 'b', 'c', 'y', 'z'],
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

  it('location3 and vehicle3 has skills', () => {
    const ans = [[], [0]]
    expect(allowVehicles(locations3, vehicles3)).toEqual(ans)
  })

  it('location4 and vehicle4 has skills', () => {
    const ans = [[0, 1, 4], [0], [1], [2], [2], [3], [], [3], [3, 4]]
    expect(allowVehicles(locations4, vehicles4)).toEqual(ans)
  })
})
