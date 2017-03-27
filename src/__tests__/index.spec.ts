import * as starWars from '../index'

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      const expected = true
      const actual = isArrayOfStrings(starWars.all())
      expect(actual).toBe(expected)

      function isArrayOfStrings(array: string[]) {
        return array.every((item) => typeof item === 'string')
      }
    })

    it('should contain `Luke Skywalker`', () => {
      const actual = starWars.all()
      const expected = 'Luke Skywalker'
      expect(actual).toContain(expected)
    })
  })

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random()
      expect(starWars.all()).toContain(randomItem)
    })

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3)
      expect(randomItems).toHaveLength(3)

      if (Array.isArray(randomItems)) {

        randomItems.forEach(function(item) {
          expect(starWars.all()).toContain(item)
        })

      }

    })
  })
})
