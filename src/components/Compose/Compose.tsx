import React, { Fragment, ComponentType, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  /**
   * List of components
   */
  components: ComponentType[];
}

/**
 * Component expands components into hierarchical structure
 * @example
 * You can use <Compose components={[<Provider1 />, <Provider2 />, <Provider3 />]} />
 * instead
 * <Provider1>
 *  <Provider2>
 *    <Provider3 />
 *  </Provider2>
 * </Provider1>
 */
const Compose: React.FC<Props> = ({ components, children }) => (
  <Fragment>
    {components.reverse().reduce((acc, curr) => {
      const [Provider, props] = Array.isArray(curr) ? [curr[0], curr[1]] : [curr, {}]
      return <Provider {...props}>{acc}</Provider>
    }, children)}
  </Fragment>
);

export default Compose;
