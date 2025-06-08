import mobileAds from 'react-native-google-mobile-ads';

mobileAds()
  .initialize()
  .then(() => {
    // Initialization complete
  });

import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

<BannerAd
  unitId={TestIds.BANNER}
  size={BannerAdSize.FULL_BANNER}
  requestOptions={{
    requestNonPersonalizedAdsOnly: true,
  }}
/>