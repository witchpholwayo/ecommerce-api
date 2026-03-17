const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, price, stock } = req.body;
  const [result] = await db.query(
    'INSERT INTO products (name, price, stock) VALUES (?, ?, ?)',
    [name, price, stock]
  );
  res.json({ id: result.insertId });
});

module.exports = router;