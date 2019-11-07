"use strict";
const mountains = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(arrayOfMountains) {
    let maxHeightIndex = 0;
    let currentMax = -Infinity;
    for (let i = 0; i < arrayOfMountains.length; i++) {
        if (arrayOfMountains[i].height > currentMax) {
            currentMax = arrayOfMountains[i].height;
            maxHeightIndex = i;
        }
    }
    return arrayOfMountains[maxHeightIndex].name;
}
const nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log(nameOfTallestMountain);
let products = [
    { name: "soap", price: 2 },
    { name: "shampoo", price: 5 },
    { name: "conditioner", price: 6 },
    { name: "gel", price: 10 },
    { name: "lotion", price: 19 }
];
function calcAverageProductPrice(arrayOfProducts) {
    let averagePrice;
    let sumOfPrices = 0;
    for (const oneProduct of arrayOfProducts) {
        sumOfPrices += oneProduct.price;
    }
    averagePrice = sumOfPrices / arrayOfProducts.length;
    return averagePrice;
}
const myAveragePrice = calcAverageProductPrice(products);
console.log(myAveragePrice);
const inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 },
];
function calcInventoryValue(arrayOfInventoryItems) {
    let totalValueOfInventory = 0;
    for (const oneItem of arrayOfInventoryItems) {
        totalValueOfInventory += oneItem.product.price * oneItem.quantity;
    }
    return totalValueOfInventory;
}
const inventoryValue = calcInventoryValue(inventory);
console.log(inventoryValue);
