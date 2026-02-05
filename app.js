const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = 4000;


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// 🔥 LOCAL MONGODB CONNECTION (NO AUTH)
mongoose.connect('mongodb://127.0.0.1:27017/employeeDB')
  .then(() => console.log('MongoDB  Connected Successfully'))
  .catch(err => console.log(err.message));

// Routes
app.use('/', employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
