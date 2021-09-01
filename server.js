const express = require('express')
const handle = require('express-handlebars')
const path = require('path');
const test = require('./config/connection');
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('TEST'))
app.get('/login', (req, res) => res.send('LOGIN'))

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening to port ${PORT}`))
});