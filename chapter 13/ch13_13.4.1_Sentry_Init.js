import * as Sentry from '@sentry/react-native';
Sentry.init({ dsn: 'https://<PUBLIC_KEY>@sentry.io/<PROJECT_ID>' });

Sentry.nativeCrash(); // forces a crash for testing
