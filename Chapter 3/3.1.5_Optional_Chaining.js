const user = null;

// Without optional chaining
const city = user && user.address && user.address.city;

// With optional chaining + nullish coalescing
const city2 = user?.address?.city ?? 'Unknown';
