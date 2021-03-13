import {createData, AMOUNT} from './data.js'
const data = [];

for (let i = 0; i < AMOUNT; i++) {
data[i] = createData();
}

console.log(data);
