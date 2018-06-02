import { isEqual } from 'lodash';
import { Greeter } from './export-class';
import { b } from './export-possiblly-side-effects';
import { foo } from './reexport';

console.log(isEqual(new Greeter('foo').greet(), b), foo);