// pages/_app.tsx
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
