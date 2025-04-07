import { useMatches } from 'react-router';

import { RouteHandle } from '@/types/route';

const useRouteMeta = () => {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1]; // 當前 Router
  const routeHandle = currentMatch.handle as RouteHandle;

  return routeHandle?.meta ?? {};
};

export default useRouteMeta;
