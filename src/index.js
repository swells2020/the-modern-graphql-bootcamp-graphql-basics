import message from "./myModule";
import { name } from "./myModule";
import sum from "./math";
import { square, cube } from "./math";

console.log(message, name);
console.log(sum(1, 2), square(3), cube(4));
