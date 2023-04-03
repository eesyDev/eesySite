import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store  from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import '@/styles/globals.css'
import '../../dist/output.css'
import styles from '../styles/styles.css'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [bodyClassName, setBodyClassName] = useState('');

  useEffect(() => {
    const handleRouteChange = (url) => {
      setBodyClassName(url === '/' ? 'home' : '');
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    document.body.className = bodyClassName;
  }, [bodyClassName]);
  
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider> 
  )
}
