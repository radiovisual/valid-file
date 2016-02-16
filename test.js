import test from 'ava';
import path from 'path';
import fn from './index.js';

test('function', t => {
	t.is(typeof fn, 'function');
});

test('expects a path string', t => {
	t.throws(() => {
		fn();
	}, 'true-file expects a path string');
});

test('expects a path string sync', t => {
	t.throws(() => {
		fn.sync({});
	}, 'true-file expects a path string');
});

test('returns true on valid files (async)', t => {
	fn(__filename, valid => {
		t.is(valid, true);
	});
});

test('returns true on valid files (sync)', t => {
	t.is(fn.sync(__filename), true);
});

test('returns false on invalid files (async)', t => {
	fn(path.join(__dirname, 'invalid-file.txt'), valid => {
		t.is(valid, false);
	});
});

test('returns false on invalid files (sync)', t => {
	t.is(fn.sync(path.join(__dirname, 'invalid-file.txt')), false);
});

test('returns false on directory (sync)', t => {
	t.is(fn.sync(__dirname), false);
});

test('returns false on directory (async)', t => {
	fn(__dirname, valid => {
		t.is(valid, false);
	});
});
