import test from 'ava';

import Soul from '../src'
import dataArray from './mockups/dataArray';

test('Rank function with an array of objects', t => {
	t.is(
		Soul.Rank(dataArray, "age"), 
		dataArray.sort((a, b) => {
			return a.age < b.age
		})
	);
});

test('bar', async t => {
	const bar = Promise.resolve('bar');
	console.log('bar');
	t.is(await bar, 'bar');
});