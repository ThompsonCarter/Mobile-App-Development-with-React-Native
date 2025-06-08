// Before: entire bundle includes library
import Chart from 'heavy-chart';

// After: load on demand
async function showChart() {
  const { default: Chart } = await import('heavy-chart');
  new Chart(...);
}
