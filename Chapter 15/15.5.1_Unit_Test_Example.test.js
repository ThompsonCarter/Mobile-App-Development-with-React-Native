test('adds item to cart', () => {
  const cart = [];
  const product = { id: 1, name: 'Test Product' };
  cart.push(product);
  expect(cart).toContain(product);
});
