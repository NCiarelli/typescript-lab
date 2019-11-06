// Mountains Section
// Mountain interface
interface Mountain {
  name: string;
  height: number;
}

// mountains array
const mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

// findNameOfTallestMountain function declaration
function findNameOfTallestMountain(arrayOfMountains: Mountain[]): string {
  let maxHeightIndex: number = 0;
  let currentMax: number = -Infinity;
  // Go through the whole array of mountains
  for (let i: number = 0; i < arrayOfMountains.length; i++) {
    // Check if the current mountain is higher than what has been stored
    if (arrayOfMountains[i].height > currentMax) {
      // If so, store the new height
      currentMax = arrayOfMountains[i].height;
      // Store the current index as the index of the highest mountain
      maxHeightIndex = i;
    }
  }
  // After checking all the mountains, return the name of the current tallest mountain
  return arrayOfMountains[maxHeightIndex].name;
}

const nameOfTallestMountain: string = findNameOfTallestMountain(mountains);
console.log(nameOfTallestMountain);

// Products Section
// Product interface
interface Product {
  name: string;
  price: number;
}

// products: array of Products
let products: Product[] = [
  { name: "soap", price: 2 },
  { name: "shampoo", price: 5 },
  { name: "conditioner", price: 6 },
  { name: "gel", price: 10 },
  { name: "lotion", price: 9 }
];

// calcAverageProductPrice function declaration
function calcAverageProductPrice(arrayOfProducts: Product[]): number {
  let averagePrice: number;
  // Sum all the prices of the products together
  // First declare a sum variable at 0
  let sumOfPrices: number = 0;
  // Then loop through the array of products
  for (const oneProduct of arrayOfProducts) {
    // Add the price of each product to the sum
    sumOfPrices += oneProduct.price;
  }
  // Divide the sum of all the product prices by the number of products in the array
  averagePrice = sumOfPrices / arrayOfProducts.length;
  // Return that average price value
  return averagePrice;
}

const myAveragePrice: number = calcAverageProductPrice(products);
console.log(myAveragePrice);

// export const mountainsTest = mountains;