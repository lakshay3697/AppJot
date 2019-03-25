const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session= require('express-session');
const passport = require('passport');

const app = express();

const ideas = require('./routes/ideas');
const users = require('./routes/users');

require('./config/passport')(passport);

// const db = require('./config/database');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://darkhorse:darkhorse@appjot-prod-p3tj9.mongodb.net/test?retryWrites=true',{
    useNewUrlParser : true
})
.then(() => console.log('MongoDB Connected .....'))
.catch(err => console.log(err));

app.engine('handlebars',exphbs({
    defaultLayout:'main'
}));
app.set('view engine','handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname,'public')));

app.use(methodOverride('_method'));

app.use(session({
    secret : 'secret',
    resave : true,
    saveUninitialized : true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use(function(req,res,next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});

const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    const land_variable = 'Welcome';
    res.render('index',{
        title : land_variable
    });
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.use('/ideas',ideas);
app.use('/users',users);

app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});