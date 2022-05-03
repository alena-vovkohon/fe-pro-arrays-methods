import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter((item) => item.brand === brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter((item) => item.color === color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter((item) => item.model === model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter((item) => item.memory === Number(memory));

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter((item) => item.price === Number(price));

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter((item) => item.country === country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter((item) => item.os === os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter((item) => item.price <= Number(to) && item.price >= Number(from));

const minPriceReducer = () => goods.reduce((accumulator, current) =>  Math.min(accumulator, current.price), Infinity);

const maxPriceReducer = () => goods.reduce((accumulator, current) => Math.max(accumulator, current.price), -Infinity);

const toMaxSorter = () => goods.sort((a, b) => b.price - a.price);

const toMinSorter = () => goods.sort((a, b) => a.price - b.price);

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
