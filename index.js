const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/customers', require('./routes/customers'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(3333, () => {
    console.log('Server running on port 3333');
  });
}

module.exports = app;