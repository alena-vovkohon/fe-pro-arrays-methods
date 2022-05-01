import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  const newArray = goods.filter((item) => item.brand === brand)
  return newArray
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  const newArray = goods.filter((item) => item.color === color)
  return newArray
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  const newArray = goods.filter((item) => item.model === model)
  return newArray
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  // console.log(Number(memory))
  const newArray = goods.filter((item) => item.memory === Number(memory))
  return newArray
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  const newArray = goods.filter((item) => item.price === Number(price))
  return newArray
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  const newArray = goods.filter((item) => item.country === country)
  return newArray
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  const newArray = goods.filter((item) => item.os === os)
  return newArray
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  const newArray = goods.filter((item) => item.price <= Number(to) && item.price >= Number(from))
  return newArray
};

const minPriceReducer = () => {
  const minPrice = goods.reduce((accumulator, current) => {
    return Math.min(accumulator, current.price)
  }, 12999);
  return minPrice
};


const maxPriceReducer = () => {
  const maxPrice = goods.reduce((accumulator, current) => {
    return Math.max(accumulator, current.price) 
  }, 0);
  return maxPrice
};

const toMaxSorter = () => {
  const newArray = goods.sort((a, b) => {
    if (a.price < b.price) return 1
    if (a.price > b.price) return -1
    return 0
  })
  return newArray
};

const toMinSorter = () => {
  const newArray = goods.sort((a, b) => {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    return 0
  })
  return newArray
};

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
