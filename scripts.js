// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Exercise 1

/**
 * Log each name and province to the console.
 */

// Log each name in the names array
names.forEach(name => console.log(name));
// Log each province in the provinces array
provinces.forEach(province => console.log(province));

// Log a combination of name and province
names.forEach((name, index) =>
  console.log(`${name} (${provinces[index]})`));

// Exercise 2

/**
 * Convert all province names to uppercase and log the result.
 */
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Exercise 3

/**
 * Create an array of the lengths of each name and log the result.
 */
const namesLength = names.map(name => name.length);
console.log(namesLength);

// Exercise 4

/**
 * Sort the provinces alphabetically and log the sorted array.
 */
const sortedProvinces = provinces.sort();
console.log(sortedProvinces);

// Exercise 5

/**
 * Filter out provinces that include the word "Cape" and log the count of remaining provinces.
 */
const filteringCape = provinces.filter(province => !province.includes("Cape"));
console.log("Remaining provinces: " + filteringCape.length);

// Exercise 6

/**
 * Check if each name contains the letter 's' and log the result.
 */
const containsSpecifiedLetter = names.map(name => name.includes("s"));
console.log(containsSpecifiedLetter);

// Exercise 7

/**
 * This code combines names and provinces into a single object.
 * To concatenate names and provinces, we can `reduce`:
 */
const namesObject = Object.entries(names.map((name, index) => ({ name, province: provinces[index] })))
  .reduce((acc, [key, { name, province }]) => {
    return acc + name + (province ? ` (${province})` : '');
  }, '');
console.log(namesObject);
