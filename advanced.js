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

console.log(
    // Advanced Exercise 1

    /**
     * Log Products: Iterate over the products array, logging each product name.
     */
    products.forEach(product => console.log(product.product)),

    // Advanced Exercise 2

    /**
     * Filter by Name Length: Filter out products with names longer than 5 characters.
     */
    products.filter(product => product.product.length <= 5),

    // Advanced Exercise 3

    /**
     * Price Manipulation: Filter out products without prices, convert string prices to numbers, and calculate the total price using`reduce`.
     */
    products.filter(product => product.price !== '' && product.price !== ' ')
        .map(product => Number(product.price))
        .reduce((acc, current) => acc + current, 0),

    // Advanced Exercise 4

    /**
     * Concatenate Product Names: Use `reduce` to concatenate all product names into a single string.
     */
    products.reduce((acc, product) => acc + product.product + " ", ""),

    // Advanced Exercise 5

    /**
     * Find Extremes in Prices: Identify the highest and lowest - priced items, returning a string formatted as "Highest: X. Lowest: Y."
     */
    "Highest: " +
    Math.max(...products.filter(product => product.price !== '' && product.price !== ' ').map(product => Number(product.price))) +
    ". Lowest: " +
    Math.min(...products.filter(product => product.price !== '' && product.price !== ' ').map(product => Number(product.price))),
);
