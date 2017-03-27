import { sampleSize } from 'lodash'
import { SW_NAMES } from './sw-names'

const getRandomItem = (count) => {
  const returnArray = count > 1
  const randomName = sampleSize(SW_NAMES, count)
  return returnArray ? randomName : randomName[0]
}

export function random(howMany?: number) {
  if (howMany === undefined) {
    return getRandomItem(1)
  } else {
    const randomItems = []
    for (let i = 0; i < howMany; i++) {
      randomItems.push(getRandomItem(1))
    }
    return randomItems
  }
}
