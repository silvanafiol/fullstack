var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
//var users = require('./routes/users');
var users = require('./routes/users_con_conection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(function(req,res,next){

  //quiero loggear el verbo de la solicitud, el pass
  console.log(req.method,req.url);
  //ahora le digo como sigue o como termina, si yo finalizo la solicitud, entonces no va a llegar al resta
  //de los middlewares, entonces no puedo terminarlo, lo debo continuar
  //finalizar yo como middleware es darle paso al siguiente
  //o sino, corto, pero ahi finalizo la aplicacion
  //dependiendo de algunos parametros de la solicitud voy a estar en condiciones de decidir si sigo o no
  //siempre voy a tener que tener un middleware que maneje el error
  next();
//que pasa si quiero terminar en este middleware? si detecto que hay un error.. por ej en el sist de autenticacion
//es el concepto de si estoy logueado o no, si no corresponde le contesto 400 y no lo dejo seguir
//el concepto es cortar el flujo previo eso es el concepto dentro de express
//para cada middleware tengo que manejar el error de mi middleware, no de los demas

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
