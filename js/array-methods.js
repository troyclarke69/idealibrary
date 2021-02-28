const items = [
    {name: "Bike",      price: 100 },
    {name: "TV",        price: 200 },
    {name: "Album",     price: 10 },
    {name: "Book",      price: 5 },
    {name: "Phone",     price: 500 },
    {name: "Computer",  price: 1000 },
    {name: "Keyboard",  price: 25 }
]
// filter
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});
console.log(filteredItems);
// map
const itemNames = items.map((item) => {
    return item.name;
});
console.log(itemNames);
// find
const found = items.find((item) => {
    return item.name === 'Book';
});
console.log(found);
// forEach
items.forEach((item) => {
    console.log(item.name);
});
// some - T/F
const hasCheapItems = items.some((item) => {
    return item.price <= 100;
})
console.log(hasCheapItems);
// every - T/F
const allCheapItems = items.every((item) => {
    return item.price <= 100;
})
console.log(allCheapItems);
// reduce
const total = items.reduce((curTotal, item) => {
    return curTotal + item.price;
}, 0)
console.log(total);
// includes
const counter = [1,2,3,4,5];
const includesTwo = counter.includes(2);
console.log(includesTwo);
