import resolve  from "rollup-plugin-node-resolve";
import babel  from "rollup-plugin-babel";
import minify from 'rollup-plugin-babel-minify';
import ignore from 'rollup-plugin-ignore';

const CHECK_ENVIRONMENT = process.env.NODE_ENV == 'production' ? false : true;

export default {

	plugins: [
		resolve(),
		babel(),
		ignore(['test.js', '.ts']),
		minify({
			comments: false,
			sourceMap: CHECK_ENVIRONMENT
		})
	],

	input: "src/index.js",

	output: {
		file: "dist/soul.min.js",
		format: "cjs",
		name: "Soul",
		sourcemap: CHECK_ENVIRONMENT
	}

};