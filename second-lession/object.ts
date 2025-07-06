/*======================================================= type */
// Define a type for the object
type Persion = {
    name: string;
    age: number;
    isStudent: boolean;
};

// Create an object
const student: Persion = {
    name: 'henry',
    age: 18,
    isStudent: true,
};

console.log(`${student.name} is ${student.age} - student: ${student.isStudent}`);


/*======================================================= interface */

interface Product {
    id: number;
    name: string;
    price: number;
    inStock: boolean;
};

const phone:Product = {
    id: 1000,
    name: 'iphone 14 pro',
    price: 400,
    inStock: false,
};

console.log(`product id: ${phone.id} - name: ${phone.name} - price: ${phone.price} - available: ${phone.inStock}`);



/*======================================================= Optional properties and methods */
interface User {
    username: string;
    email?: string; //optional property
    sayHello(): void;
};

const user:User = {
    username: 'username_001@gmail.com',
    sayHello() {
        console.log(`Welcome - ${user.username}`);
        
    },
};

console.log(`username: ${user.username} - email: ${user.email}`);
user.sayHello();
