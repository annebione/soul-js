import resolve  from "rollup-plugin-node-resolve";
import babel  from "rollup-plugin-babel";
import minify from 'rollup-plugin-babel-minify';
import ignore from 'rollup-plugin-ignore';

export default {

	plugins: [
		resolve(),
		babel(),
		ignore(['test.js', '.ts']),
		minify({
			comments: false 
		})
	],

	input: "src/index.js",

	output: {
		file: "dist/soul.min.js",
		format: "cjs",
		name: "Soul",
		sourcemap: true
	}

};