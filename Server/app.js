'use strict';

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var emailRouter = require('./routes/emails');

var app = express();
var router = express.Router();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use(emailRouter);
// app.use('/emails', emailRouter);
// app.get('/emails', emailRouter);
app.get('/emails',  function(req, res, next) {
  res.send('respond');
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});




// app.get('/',

//   // Do something
//   cors.initialize(),

//   // Do something else
//   auth.verify(),

//   // send response
//   function(req, res) {
//     res.render('index');
//   }
// );


              //middleware auth.isAuthenticated()
              // Checks if user is logged in
              // if they are, gets passed to controller.upload
// app.post('/upload', auth.isAuthenticated(), controller.upload);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
