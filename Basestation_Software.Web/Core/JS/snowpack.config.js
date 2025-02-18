module.exports = {
    plugins: [
        ["@snowpack/plugin-optimize"]
    ],

    buildOptions: {
        out: "../../wwwroot/js/",
        clean: false,
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
}