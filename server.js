const express = require('express')
const handle = require('express-handlebars')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req, res) => res.send('TEST'))

app.listen(PORT, console.log(`Server started on port ${PORT}`));