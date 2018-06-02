import { isEqual } from 'lodash';
import { Greeter } from './export-class';
import { f } from './export-possiblly-side-effects';
import { foo } from './reexport';

console.log(isEqual(new Greeter('foo').greet(), f), foo);