import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store/store';
import Navigator from './app/navigation/navigation';
import Toast from 'react-native-toast-message';
import toastConfig from './app/Toast';
export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
      <Toast config={toastConfig} />
    </Provider>
  );
}
