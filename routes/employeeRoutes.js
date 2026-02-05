const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');


router.get('/', async (req, res) => {
  const employees = await Employee.find();
  res.render('home', { employees });
});


router.get('/add', (req, res) => {
  res.render('add');
});


router.post('/add', async (req, res) => {
  await Employee.create(req.body);
  res.redirect('/');
});


router.get('/edit/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.render('edit', { employee });
});


router.put('/edit/:id', async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
});


router.delete('/delete/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;
