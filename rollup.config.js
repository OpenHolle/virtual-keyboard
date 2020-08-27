export default {
    input: 'src/index.js',
    output: [
        {
            file: 'bundle-cjs.js',
            format: 'cjs'
        },
        {
            file: 'build/bundle-es.js',
            format: 'es'
        }
    ]
};
