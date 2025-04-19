'use strict';

import { randInt } from "./randInt.js";

export const pickRandom = (arr) => arr[randInt(arr.length)];

// [1,5,4,3,7,8,5]
// ["people", "fruit", "pickles", true, 56, "Guy"]

// pickRandom([6,3,2,7.2,1]);
// pickRandom();