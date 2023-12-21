import React from 'react';

import { useCatalog } from 'context';
import Animated from 'components/Animated';
import Card from 'components/Card';

import './PageCatalog.scss';

const PageCatalog: React.FC = () => {
  const { catalog } = useCatalog();

  return (
    <div className='page-catalog'>
      {catalog.map((dish, index) => <Animated.Fade key={dish._id} transition={{ delay: 0 + 0.075 * index }}>
        <Card dish={dish} />
      </Animated.Fade>)}
    </div>
  );
};

export default PageCatalog;
