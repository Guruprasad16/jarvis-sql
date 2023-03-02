var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

const initializePassport = require('./passport-config');
initializePassport(passport, email => {
  return users.find(user=>{user.email === email}),
  id => {return users.find(user=>{user.id === id})}
});
// require('./db')
// require('../src/database/connection');

// const db = require('./models');

var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var signupRouter = require('./routes/signup');
var modelRouter = require('./routes/model');
var solutionRouter = require('./routes/solution');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash())
app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors(origin="*"))
app.use('/', loginRouter);
app.use('/', usersRouter);
app.use('/', signupRouter);
app.use('/model', modelRouter);
app.use('/solution', solutionRouter);
// app.post('/login', passport.authenticate('local',{
//   successRedirect: '/',
//   failureRedirect: '/login',
//   failureFlash: true
// }))

function checkAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/login');
}

function checkNotAuthenticated(req, res, next){
  if(req.isAuthenticated()){
   return res.redirect('/')
  }
  next();
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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