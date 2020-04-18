import {
    //transformer,
    createTranfsormer,
    transformText,
    transformPipe
} from '../src/index';

import { readFile, readFileSync, readdirSync, writeFileSync } from 'fs';

var path = require('path');

var testFiles = readFileSync(path.join(__dirname, './markdowns/basic.md')).toString();

var output = transformText(testFiles);

writeFileSync(path.join(__dirname, './markdowns.output/basic.html'), output);

console.log(output);