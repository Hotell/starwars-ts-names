import { sampleSize } from 'lodash'
import { SW_NAMES } from './sw-names'

const getRandomItem = () => {
  return sampleSize(SW_NAMES, 1)[0]
}

export function random(howMany?: number) {
  if (howMany === undefined) {
    return getRandomItem()
  } else {
    const randomItems = []
    for (let i = 0; i < howMany; i++) {
      randomItems.push(getRandomItem())
    }
    return randomItems
  }
}
