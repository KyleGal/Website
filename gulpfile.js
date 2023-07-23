// Compile all css files into style.css using: 'gulp cssBundle'

const {src, dest} = require('gulp')
const concat = require('gulp-concat')

const cssBundle = () =>
    src([
        'css/loadingScreen.css',
        'css/general.css',
        'css/navbar.css',
        'css/backgroundBanner.css',
        'css/about.css',
        'css/personalProjects.css',
        'css/footer.css',
    ])

    .pipe(concat('style.css'))
    .pipe(dest('./'));

exports.cssBundle = cssBundle;