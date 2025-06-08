const baseConfig = { host: 'api.example.com', port: 443 };
const override = { port: 8080 };

// Merge with spread
const finalConfig = { ...baseConfig, ...override };
