module.exports = {
  entry: './index.js', //este es el script raiz del proyecto que se va a compilar

  output: {
    filename: 'bundle.js', //salida del proyecto sera con este archivo bundle.js
    // Como nota al ejecutrar el script del webpack no se generara un archivo llamado bundle.js
    // Este lo genera temporalmente al vuelo y lo visualizara el proyecto
    publicPath: ''
  },

  module: {
    loaders: [
      //en los loaders nos ayuda a configurar que tipo de archivo vamos a escuchar,
      //excluir carpetas a escuchar, y que loader vamos a ejecutar para esta secuencia
      //en este ejemplo vemos que cargamos el babel-loader con los presets es2015 y react
      //que nos ayuda a escribir en EcmaScript 2015 y JSX respectivamente.
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
