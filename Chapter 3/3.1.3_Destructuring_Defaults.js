const settings = { theme: 'dark', notifications: true };

// Without destructuring
const theme = settings.theme;
const notifications = settings.notifications || false;

// With destructuring + defaults
const { theme = 'light', notifications = false } = settings;
