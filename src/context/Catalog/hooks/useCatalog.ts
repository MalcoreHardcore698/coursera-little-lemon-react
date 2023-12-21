import client from 'api';
import { useContextCatalog } from '../context';
import { useCallback } from 'react';

export const useCatalog = () => {
  const [catalog, setCatalog] = useContextCatalog();

  const onFetch = useCallback(() => {
    return client.catalog().then(setCatalog);
  }, [setCatalog]);

  return {
    catalog,
    setCatalog,
    onFetch,
  };
};
