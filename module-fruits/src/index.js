import fruits from "./foods";
import { choice, remove } from "./helpers";


const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
