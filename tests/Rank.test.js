import test from 'ava';

import Soul from '../src'
import dataArray from './mocks/dataArray';

test('Rank function with an array of objects', t => {
	t.is(
		Soul.Rank(dataArray, "age"), 
		dataArray.sort((a, b) => {
			return a.age < b.age
		})
	);
});

test('Rank function with an array of numbers', t => {
	t.is(
		Soul.Rank([2,4,7,9,7,0]), [0,2,4,7,7,9]
	);
});