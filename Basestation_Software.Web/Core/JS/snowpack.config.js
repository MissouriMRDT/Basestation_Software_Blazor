module.exports = {
    plugins: [
        ["@snowpack/plugin-optimize"]
    ],

    buildOptions: {
        out: "../../wwwroot/js/",
        clean: true,
        metaUrlPath: 'lib',
    },

    mount: {
        src: "/",
    },

    optimize: {
        minify: true, // this is false so that js can be debugged easily
        bundle: false,
        treeshake: true,
        splitting: true,
        target: "es2020",
    },
}