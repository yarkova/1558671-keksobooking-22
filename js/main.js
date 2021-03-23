import {createData, AMOUNT} from './data.js'
import {fillPopup} from './popup.js';


const data = [];


for (let i = 0; i < AMOUNT; i++) {
data[i] = createData();
}


fillPopup(data[0]);
console.log(data);
