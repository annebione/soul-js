import { resolve } from "rollup-plugin-node-resolve";
import { babel } from "rollup-plugin-babel";

export default {

	plugins: [
		resolve(),
		babel()
	],

	input: "src/index.js",

	output: {
		file: "dist/soul.min.js",
		format: "umd",
		name: "Soul"
	}

};