import babel from 'rollup-plugin-babel'
import css from "rollup-plugin-import-css";
import jsx from 'rollup-plugin-jsx'

// rollup.config.js
const config = {
    input: 'src/Modal.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'modalnoob',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            plugins: [
                [
                    "react-css-modules"
                ]
            ]
        }),
        css()
    ]
}
export default config