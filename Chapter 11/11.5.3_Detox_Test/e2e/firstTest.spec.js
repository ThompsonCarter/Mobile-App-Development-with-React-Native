describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should show counter and increment', async () => {
    await expect(element(by.id('count'))).toHaveText('0');
    await element(by.text('+1')).tap();
    await expect(element(by.id('count'))).toHaveText('1');
  });
});