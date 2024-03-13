import './style.css';

const mult = (x) => 2 * x;

// можно импортнуть списком, некоторых с алиасом, чтоб не пересекались именами с функциями в этом модуле
import { sum, mult as multiply} from './math';
// можно так же импортнуть весь модуль под видом объекта, тогда к его функциям можно обращаться как к методам
import * as math from './math';

console.log(`вызов функции sum(2, 3) из модуля math вщзвращает результат: ${sum(2, 3)}`);
console.log(`вызов функции mult(3) из текущего модулы возвращает: ${mult(3)}`);
console.log(`а это вызов импортированной функции mult(3, 4) под алиасом multiply: ${multiply(3, 4)}`);
console.log(`площадь круга с радиусом 3 = ${math.circleArea(3)}`);