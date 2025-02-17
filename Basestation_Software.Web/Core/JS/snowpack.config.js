module.exports = {
    plugins: [
        ["@snowpack/plugin-optimize"]
    ],

    buildOptions: {
        out: "../../wwwroot/js/",
        clean: true,
    },

    mount: {
        src: "/",
    },

    optimize: {
        minify: true,
        bundle: false,
        treeshake: true,
        splitting: true,
        target: "es2020",
    },

    //alias: {
    //    "three-examples": "three/examples/jsm"
    //},
}