({
    appDir: 'src',
    baseUrl: 'js',
    dir: 'bin',
    fileExclusionRegExp: /^\..*|^jsx$|.scss$|^exclude$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        jquery: 'empty:',
        'React': 'empty:'
    },
    modules: [
        {
            name: 'index'
        },
    ]
})