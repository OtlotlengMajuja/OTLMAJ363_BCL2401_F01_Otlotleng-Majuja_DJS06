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


// Log each name in the names array
names.forEach(name => console.log(names));
// Log each province in the provinces array
provinces.forEach(province => console.log(provinces));

// Log a combination of name and province
names.forEach((name, index) =>
  console.log(`${names} (${provinces[index]})`));

// Exercise 2

/**
 * Convert all province names to uppercase and log the result.
 */
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Exercise 3

// Exercise 4   

// Exercise 5

// Exercise 6

// Exercise 7