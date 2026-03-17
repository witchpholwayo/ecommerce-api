const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM customers');
  res.json(rows);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const [result] = await db.query(
    'INSERT INTO customers (name, email) VALUES (?, ?)',
    [name, email]
  );
  res.json({ id: result.insertId });
});

module.exports = router;