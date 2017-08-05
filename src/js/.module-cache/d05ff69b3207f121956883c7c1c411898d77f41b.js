requirejs.config({
    baseUrl: '/js',
    waitSeconds: 60,
    paths: {
        libs: 'libs',
        app: 'app',
        jquery: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min'

//        jquery: '../a/offline/jquery',
//        React: '../a/offline/react-with-addons'
    }
});