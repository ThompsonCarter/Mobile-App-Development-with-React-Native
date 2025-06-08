api.post('/orders', { itemId: 42, qty: 3 })
  .then(resp => console.log('Created', resp.data));

api.put('/orders/42', { qty: 4 })
  .then(resp => console.log('Updated', resp.data));

api.delete('/orders/42')
  .then(() => console.log('Deleted order 42'));
