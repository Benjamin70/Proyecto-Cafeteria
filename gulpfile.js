const { src, dest, watch, series, parallel } = require('gulp');

//CSS y SASS Dependencia
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

//Imagenes Dependencias
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function css( done ){
    //Compilar Sass
    // Pasos: 1- Identificar archivos, 2- Compilarla, 3-Guardar el .css

    //Pasos en orden
    src('src/scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe( sass() )
        .pipe( postcss( [autoprefixer(), cssnano() ]))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('build/css') )
    done();
}

function imagenes() {
    return src('src/img/**/*')
        .pipe( imagemin ({z: 3}))
        .pipe(dest ('build/img') )
}

function versionWebp() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe( webp(opciones) )
        .pipe(dest('build/img'))

}

function versionAvif() {
    const opciones = {
        quality: 50
    }
    return src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe(dest('build/img'))

}

function dev() {
    watch( 'src/scss/**/*.scss', css );
    watch('src/img/**/*', imagenes);
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.default = series(imagenes, versionWebp, versionAvif, css, dev);

// Series- Se inicia una tarea , y hasta que finaliza incia la siguiente
// Paralel- Todas inician al mismo tiempo