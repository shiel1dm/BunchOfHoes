const express = require('express')
const handle = require('express-handlebars')
const path = require('path');
const test = require('./config/connection');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.engine('hbs', handle({
  defaultLayout: 'main',
  extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

//right now its using this route
//couldnt get them to work so did this for now in order to see the handlbar pages 
app.get('/', (req, res) => {
  res.render('home');
});

/*document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});*/
      
// port where app is served
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to port ${PORT}`))
});

/*
app.set('view engine', 'hbs');
app.engine('hbs', handle({
  extname: 'hbs',
  defaultView: 'main',
  layoutDir: __dirname + 'views/layouts',
  partialDir: __dirname + 'views/partials'
}));

app.use(express.static(path.join(__dirname, 'public')));

*/