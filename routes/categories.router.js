const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('index de categorias');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send('categorias unico' + id);
});

router.post('/', (req, res) => {
  const { nombre } = req.params;
  res.json({
    nombre
  });
});

module.exports = router;
