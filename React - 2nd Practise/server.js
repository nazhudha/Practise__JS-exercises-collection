const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
const customers = [
  {id: 1, firstName: 'John', lastName:'Doe'},
  {id: 2, firstName: 'Mary', lastName:'Smith'},
  {id: 3, firstName: 'John', lastName:'Holy'}
];

res.json(customers);
});


const port = 5000;

app.listen(port, () => console.log(`Sever started on ${port}`)
)