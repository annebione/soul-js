import resolve  from "rollup-plugin-node-resolve";
import babel  from "rollup-plugin-babel";
import minify from 'rollup-plugin-babel-minify';

export default {

	plugins: [
		resolve(),
		babel(),
		minify()
	],

	input: "src/index.js",

	output: {
		file: "dist/soul.min.js",
		format: "cjs",
		name: "Soul",
		sourcemap: true
	}

};