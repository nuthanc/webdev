import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/Header';

const app = ({ Component, pageProps}) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default app;