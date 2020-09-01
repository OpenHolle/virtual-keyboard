export default {
    input: 'src/index.js',
    output: [
        {
            file: 'build/bundle-cjs.js',
            sourcemap: 'inline',
            format: 'cjs'
        },
        {
            file: 'build/bundle-es.js',
            sourcemap: 'inline',
            format: 'es'
        },
        {
            file: 'build/bundle-umd.js',
            sourcemap: 'inline',
            format: 'umd'
        }
    ]
};
