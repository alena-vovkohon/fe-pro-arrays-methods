import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const newArray = goods.filter((item) => item.brand === brand)
  return newArray
};

console.log(brandFilter('Samsung'))

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const newArray = goods.filter((item) => item.color === color)
  return newArray
};

console.log(colorFilter('white'))

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  // console.log(model)
  const newArray = goods.filter((item) => {
    // console.log(item.model)
      return(item.model === model)
  })
  return newArray
};

console.log(modelFilter('Galaxy M52'))

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  // console.log(Number(memory))
  const newArray = goods.filter((item) => (item.memory === Number(memory)))
  return newArray
};

console.log(memoryFilter('128'))

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  // console.log(Number(price))
  // const newArray = goods.filter((item) => item.price === Number(price))

  const newArray = goods.filter((item) => {
    // console.log(item.price)
    return (item.price === Number(price))
  })
  return newArray
};
console.log(priceFilter('6499'))

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  console.log(country)
  const newArray = goods.filter((item) => {
    console.log(item.country)
    return (item.country === country)
  })
  return newArray
};
console.log(countryFilter('Korea'))

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  // const newArray = goods.filter((item) => item.os === os)
  console.log(os)
  const newArray = goods.filter((item) => {
    console.log(item.os)
    return (item.os === os)
  })
  return newArray
};
console.log(osFilter('iOs'))

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  const newArray = goods.filter((item) => item.price <= Number(to) && item.price >= Number(from))
  return newArray
};

console.log(rangeFilter(8000, 20000))

const minPriceReducer = () => {
  const minPrice = goods.reduce((accumulator, current) => {
    return Math.min(accumulator, current.price)
  }, 6499);
  return minPrice
};
console.log(minPriceReducer())

const maxPriceReducer = () => {
  const maxPrice = goods.reduce((accumulator, current) => {
    return Math.max(accumulator, current.price) 
  }, 0);
  return maxPrice
};

console.log(maxPriceReducer())

const toMaxSorter = () => {
  const newArray = goods.sort((a, b) => {
    if (a.price < b.price) return 1
    if (a.price > b.price) return -1
    return 0
  })
  return newArray
};

console.log(toMaxSorter())

const toMinSorter = () => {
  const newArray = goods.sort((a, b) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    return 0
  })
  return newArray
};

console.log(toMinSorter())

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
