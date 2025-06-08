const offerings = await Purchases.getOfferings();
if (offerings.current) {
  // Display offerings to the user
}

const purchaserInfo = await Purchases.purchasePackage(offerings.current.availablePackages[0]);
if (purchaserInfo.entitlements.active['your_entitlement_identifier']) {
  // Unlock premium content
}