import { allowVehicles } from './index'

const locations1 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['1'],
  },
]
const vehicles1 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
]

const locations2 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2'],
  },
]
const vehicles2 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['1', '2'],
  },
]

const locations3 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2'],
  },
]
const vehicles3 = [
  {
    skills: ['d', 'e', 'f'],
    slots: ['2'],
  },
]

const locations4 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1'],
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2'],
  },
  {
    skills: ['g', 'h', 'i'],
    slots: ['3'],
  },
  {
    skills: ['j', 'k', 'l'],
    slots: ['4'],
  },
  {
    skills: ['m', 'n', 'o'],
    slots: ['5'],
  },
  {
    skills: ['p', 'q', 'r'],
    slots: ['6'],
  },
  {
    skills: ['s', 't', 'u'],
    slots: ['7'],
  },
  {
    skills: ['v', 'w', 'x'],
    slots: ['8'],
  },
  {
    skills: ['y', 'z'],
    slots: ['9'],
  },
]
const vehicles4 = [
  {
    skills: ['a', 'b', 'c', 'd', 'e', 'f'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    skills: ['a', 'b', 'c', 'g', 'h', 'i'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    skills: ['j', 'k', 'l', 'm', 'n', 'o'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    skills: ['p', 'q', 'r', 'v', 'w', 'x', 'y', 'z'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  },
  {
    skills: ['a', 'b', 'c', 'y', 'z'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
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
