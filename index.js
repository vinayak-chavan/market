const express = require('express');
const app = express();
const route = express.Router();

const port = 3500;
const routes = require('./routes');

app.use(express.urlencoded({extended: true}))
app.use(express.static('views'));

app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(port, () => {
    console.log(`connection is live at port ${port}`);
})