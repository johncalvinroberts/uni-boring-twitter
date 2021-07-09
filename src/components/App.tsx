/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Route } from 'wouter';
import { SWRConfig } from 'swr';
import { ToastContainer } from 'react-toastify';
// local imports
import Style from './Style';
import Header from './Header';
import Footer from './Footer';
import UserDetail from './UserDetail';
import TweetDetail from './TweetDetail';
import TweetList from './TweetList';
import TitleContextOuter from './TitleContext';
import { fetcher } from '../utils';
import { useScrollReset } from '../hooks';

// style import
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  useScrollReset();
  return (
    <TitleContextOuter>
      <Style />
      <SWRConfig
        value={{
          refreshInterval: 3000,
          fetcher: (resource) => fetcher(resource),
          suspense: true,
        }}
      >
        <div
          css={css`
            min-height: 100vh;
            display: grid;
            grid-template-areas:
              'head'
              'main'
              'foot';
            grid-template-rows: 65px 1fr 30px;
            grid-template-columns: 1fr;
          `}
        >
          <Header />
          <main
            css={css`
              max-width: 400px;
              margin: 0 auto;
              padding: var(--sm);
            `}
          >
            <Route path="/">{() => <TweetList />}</Route>
            <Route path="/t/:id">
              {(params) => <TweetDetail id={params.id} />}
            </Route>
            <Route path="/users/:id">
              {(params) => <UserDetail id={params.id} />}
            </Route>
          </main>
          <Footer />
        </div>
        <ToastContainer />
      </SWRConfig>
    </TitleContextOuter>
  );
};

export default App;
