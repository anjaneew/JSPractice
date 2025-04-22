//ES6 Modules

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(PI);
console.log(`Circumference is: ${circumference}cm`);
console.log(`Area is: ${area}cm^2`);
console.log(`Volume is: ${volume}cm^3`);