// Declaring tuple
let my_tuple: [string, number];
my_tuple = ['tuple', 1];
console.log(my_tuple);
// Access tuple
console.log(my_tuple[0]);
console.log(my_tuple[1]);

// Tuple with optional & rest elements
let optional_tuple : [number, string?, boolean?];
optional_tuple = [1, 'optional']
optional_tuple = [1, 'optional', true]
console.log(optional_tuple);

let tuple_with_rest_element : [id: number, ...string[]];
tuple_with_rest_element = [1, 'this is string', '2']
console.log(tuple_with_rest_element);

// Destructuring tuple
const tuple1 : [number, number] = [10, 20];
const [value1, value2] = tuple1
console.log(`value1: ${value1} - value2: ${value2}`);

// Readonly Tuple
const readonly_tuple:readonly [number, string, boolean] = [1, 'this is string', true];
console.log(`readonly tuple with values: number: ${readonly_tuple[0]} - string: '${readonly_tuple[1]}' - boolean: ${readonly_tuple[2]}`);