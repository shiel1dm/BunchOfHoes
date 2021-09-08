const express = require('express')
const handle = require('express-handlebars')
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.set('view engine', 'hbs');
app.engine('hbs', handle({
  extname: 'hbs',
  defaultView: 'home',
  layoutDir: __dirname + 'views/layouts'
}));
app.use(routes);
      
// port where app is served
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to port ${PORT}`))
});


