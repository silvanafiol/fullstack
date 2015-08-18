var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var apiRoutes = require('./routes/api');
var userRoutes = require('./routes/users');

var app = express();
var genConn = require('./lib/dbConnect'); //felix
//var userModule = require('./routes/users');//felix
//var connectionRoute = require('./routes/generaConexion'); //felix
var strConnection = 'mongodb://localhost:27017/test';
var db = genConn(strConnection); //felix

//userModule(db, app); //FELIX!!!!
//ver si es lo mismo!!!! app.use('/users', userModule(db,app));

// view engine setup
app.set('views', path.join(__dirname, 'views'));//directorio desde donde esta corriendo node!!!!
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', userRoutes);
app.use('/api', apiRoutes);
var apiRoutes = require('./routes/api');
var userRoutes = require('./routes/users');
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
