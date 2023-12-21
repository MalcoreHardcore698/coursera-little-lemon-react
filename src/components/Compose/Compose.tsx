import React, { Fragment, ComponentType, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  components: ComponentType[];
}

const Compose: React.FC<Props> = ({ components, children }) => (
  <Fragment>
    {components.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr) ? [curr[0], curr[1]] : [curr, {}]
      return <Provider {...props}>{acc}</Provider>
    }, children)}
  </Fragment>
);

export default Compose;
