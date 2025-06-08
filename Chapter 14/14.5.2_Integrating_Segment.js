npm install @segment/analytics-react-native
cd ios && pod install && cd ..

import { createClient } from '@segment/analytics-react-native';

const segmentClient = createClient({
  writeKey: 'your_write_key',
});

segmentClient.track('Item Purchased', {
  item: 'Sword',
  price: 10,
});