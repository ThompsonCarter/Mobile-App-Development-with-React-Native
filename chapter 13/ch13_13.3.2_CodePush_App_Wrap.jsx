import codePush from 'react-native-code-push';
function App() { /* ... */ }
export default codePush({ checkFrequency: codePush.CheckFrequency.ON_APP_START })(App);
