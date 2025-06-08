const [isPremiumUser, setIsPremiumUser] = useState(false);

useEffect(() => {
  const checkPremiumStatus = async () => {
    const purchaserInfo = await Purchases.getCustomerInfo();
    setIsPremiumUser(purchaserInfo.entitlements.active['your_entitlement_identifier'] !== undefined);
  };
  checkPremiumStatus();
}, []);

{isPremiumUser ? (
  <PremiumFeature />
) : (
  <UpgradePrompt />
)}