import path from "path";
import sass from 'rollup-plugin-sass';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import { terser } from "rollup-plugin-terser";
import browsersync from "rollup-plugin-browsersync";

const port = 12345;

export default {
  input: 'src/js/index.js',
  output: {
    file: path.resolve(__dirname, "../src/wp-content/themes/neoplan-app/bundle.js"),
    format: 'umd',
  },
  plugins: [
    terser(),
    browsersync({
      proxy: 'http://localhost:3001',
      port: port,
      files: ["../**/*.php", "../**/*.js"],
      notify: true,
      ignore: ['node_modules/**/*']
    }),
    sass({
      output: path.resolve(__dirname, "../src/wp-content/themes/neoplan-app/style.css")
    }),
    alias({
        entries: [
          { find: '@js', replacement: path.join(__dirname, './src/js') },
          { find: '@sass', replacement: path.join(__dirname, './src/sass') }
        ],
    }),
    babel({
        exclude: 'node_modules/**',
        presets: [
          [
            '@babel/preset-env', 
            {
              useBuiltIns: 'usage',
              corejs: 3,
              targets: {
                  browsers: ['chrome >= 40', 'ie >= 8']
              }
            }
          ]
        ],
        babelrc: false,
        runtimeHelpers: true
    }),
    {
      name: 'afterBuild',
      generateBundle(options, bundle) {
        console.log('\n');
        console.log('\x1b[34m%s\x1b[0m', '> By: Hállan Neoplan');
        console.log('\x1b[33m%s\x1b[0m', `> Live reload running: http://localhost:${port}`);
        console.log('\x1b[32m%s\x1b[0m', '> Success build');
        console.log('\n');
      }
    },
  ]
};