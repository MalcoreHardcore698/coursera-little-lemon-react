import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  CatalogProvider,
  ReservationsProvider,
} from 'context';
import Layout from 'components/Layout';
import Loader from 'components/Loader';
import Compose from 'components/Compose';
import LazyCatalog from 'features/LazyCatalog';

import 'theme/global.scss';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Catalog = lazy(() => import('pages/Catalog'));
const Reservations = lazy(() => import('pages/Reservations'));

const App: React.FC = () => (
  <Compose components={[CatalogProvider, ReservationsProvider]}>
    <Layout>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path='/about'
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />

        <Route
          path='/catalog'
          element={
            <Suspense fallback={<Loader />}>
              <Catalog />
            </Suspense>
          }
        />

        <Route
          path='/reservations'
          element={
            <Suspense fallback={<Loader />}>
              <Reservations />
            </Suspense>
          }
        />

        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </Layout>

    <LazyCatalog />
  </Compose>
);

export default App;
