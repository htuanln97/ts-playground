// Declaring an array of strings
let fruits: string[] = ['apple', 'banana', 'watermelon'];
console.log(fruits);
console.log(fruits[0]);

// Declaring an array of numbers
let numbers: number[] = [1, 2, 3, 4];
numbers.push(100);
console.log(numbers);

// Using Array<T> syntax
let boolean_list: Array<boolean> = [true, false, true];
console.log(boolean_list[1]);
for (let fruit of fruits) {
    console.log(fruit.toUpperCase());
};


// Array of objects
type Identity = {
    id: number,
    name: string,
    address?: string,
};

const id_list: Identity[] = [
    { id: 1, name: 'yasuo', address: '123' },
    { id: 2, name: 'jinx', address: '123' },
    { id: 3, name: 'talon', address: '123' },
];
// using forEach
id_list.forEach(element => {
    console.log(`id: ${element.id} - name: ${element.name} - address: ${element.address}`);
});
// using for
for(const e of id_list){
    console.log(`id: ${e.id} - name: ${e.name} - address: ${e.address}`);
};