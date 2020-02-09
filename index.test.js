import { allowVehicles } from './index'

test('default empty array', () => {
  expect(allowVehicles()).toEqual([])
})

const locations1 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['1']
  }
]
const vehicles1 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  }
]

test('location1 index 0 has skill', () => {
  const ans = [[0], []]
  expect(allowVehicles(locations1, vehicles1)).toEqual(ans)
})

const locations2 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2']
  }
]
const vehicles2 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['1', '2']
  }
]

test('location2 index 1 has skill', () => {
  const ans = [[0], [1]]
  expect(allowVehicles(locations2, vehicles2)).toEqual(ans)
})

const locations3 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2']
  }
]
const vehicles3 = [
  {
    skills: ['d', 'e', 'f'],
    slots: ['2']
  }
]

test('location3 and vehicle3 has skills', () => {
  const ans = [[], [0]]
  expect(allowVehicles(locations3, vehicles3)).toEqual(ans)
})

const locations4 = [
  {
    skills: ['a', 'b', 'c'],
    slots: ['1']
  },
  {
    skills: ['d', 'e', 'f'],
    slots: ['2']
  },
  {
    skills: ['g', 'h', 'i'],
    slots: ['3']
  },
  {
    skills: ['j', 'k', 'l'],
    slots: ['4']
  },
  {
    skills: ['m', 'n', 'o'],
    slots: ['5']
  },
  {
    skills: ['p', 'q', 'r'],
    slots: ['6']
  },
  {
    skills: ['s', 't', 'u'],
    slots: ['7']
  },
  {
    skills: ['v', 'w', 'x'],
    slots: ['8']
  },
  {
    skills: ['y', 'z'],
    slots: ['9']
  }
]
const vehicles4 = [
  {
    skills: ['a', 'b', 'c', 'd', 'e', 'f'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    skills: ['a', 'b', 'c', 'g', 'h', 'i'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    skills: ['j', 'k', 'l', 'm', 'n', 'o'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    skills: ['p', 'q', 'r', 'v', 'w', 'x', 'y', 'z'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  },
  {
    skills: ['a', 'b', 'c', 'y', 'z'],
    slots: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  }
]

test('locations have skills', () => {
  const ans = [[0, 1, 4], [0], [1], [2], [2], [3], [], [3], [3, 4]]
  expect(allowVehicles(locations4, vehicles4)).toEqual(ans)
})
