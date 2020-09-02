import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import visualizer from 'rollup-plugin-visualizer';

const globals  = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

export default {
    input: 'src/index.js',
    external: ['react', 'react-dom'],
    output: [
        {
            file: 'build/bundle-iife.js',
            format: 'iife',
            globals,
            sourcemap: 'inline',
        },
        {
            file: 'build/bundle-cjs.js',
            format: 'cjs',
            globals,
            sourcemap: 'inline',
        },
        {
            file: 'build/bundle-es.js',
            format: 'es',
            globals,
            sourcemap: 'inline',
        },
        {
            file: 'build/bundle-umd.js',
            format: 'umd',
            globals,
            sourcemap: 'inline',
        }
    ],
    plugins: [
        babel({ babelHelpers: 'bundled' }), // jsx, es6
        // resolve({
        //     extensions: ['.js'],
        //     browser: true
        // }),
        commonjs(),
        visualizer({ template: 'sunburst', filename: 'build/stats.html' }),
    ]
};
