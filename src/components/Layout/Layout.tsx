import React from 'react';
import type { PropsWithChildren } from 'react';

import PageHeader from 'components/PageHeader';
import PageFooter from 'components/PageFooter';

import './Layout.scss';

/**
 * Base layout component with predefined header and footer
 */
const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <PageHeader />
    <main className='layout'>
      {children}
    </main>
    <PageFooter />
  </>
);

export default Layout;
