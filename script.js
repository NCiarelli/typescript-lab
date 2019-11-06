// mountains array
var mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
// findNameOfTallestMountain function declaration
function findNameOfTallestMountain(arrayOfMountains) {
    var maxHeightIndex = 0;
    var currentMax = -Infinity;
    // Go through the whole array of mountains
    for (var i = 0; i < arrayOfMountains.length; i++) {
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
var nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log(nameOfTallestMountain);
// products: array of Products
var products = [
    { name: "soap", price: 2 },
    { name: "shampoo", price: 5 },
    { name: "conditioner", price: 6 },
    { name: "gel", price: 10 },
    { name: "lotion", price: 9 }
];
// calcAverageProductPrice function declaration
function calcAverageProductPrice(arrayOfProducts) {
    var averagePrice;
    // Sum all the prices of the products together
    // First declare a sum variable at 0
    var sumOfPrices = 0;
    // Then loop through the array of products
    for (var _i = 0, arrayOfProducts_1 = arrayOfProducts; _i < arrayOfProducts_1.length; _i++) {
        var oneProduct = arrayOfProducts_1[_i];
        // Add the price of each product to the sum
        sumOfPrices += oneProduct.price;
    }
    // Divide the sum of all the product prices by the number of products in the array
    averagePrice = sumOfPrices / arrayOfProducts.length;
    // Return that average price value
    return averagePrice;
}
var myAveragePrice = calcAverageProductPrice(products);
console.log(myAveragePrice);
// inventory array of InventoryItems
var inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
// calcInventoryValue function
function calcInventoryValue(arrayOfInventoryItems) {
    var totalValueOfInventory = 0;
    for (var _i = 0, arrayOfInventoryItems_1 = arrayOfInventoryItems; _i < arrayOfInventoryItems_1.length; _i++) {
        var oneItem = arrayOfInventoryItems_1[_i];
        totalValueOfInventory += oneItem.product.price * oneItem.quantity;
    }
    return totalValueOfInventory;
}
var inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
// export const mountainsTest = mountains;
