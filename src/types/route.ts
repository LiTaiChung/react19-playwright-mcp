import { RouteObject } from 'react-router';

// types/route.ts
export interface RouteMeta {
  title?: string;
  requiresAuth?: boolean;
  description?: string;
  priority?: number;
}

export interface RouteHandle {
  meta?: RouteMeta;
}

export type RouteObjectWithMeta = RouteObject & {
  handle?: RouteHandle;
};
