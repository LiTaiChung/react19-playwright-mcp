import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import Layout from '@/layouts/Layout';
import { RouteObjectWithMeta } from '@/types/route';

const Home = lazy(async () => import('../pages/Home'));
const About = lazy(async () => import('../pages/About'));
const Article = lazy(async () => import('../pages//Article'));

const routes: RouteObjectWithMeta[] = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        handle: {
          meta: {
            title: 'Home Page',
            requiresAuth: false,
            description: 'This is the home page',
            priority: 1,
          },
        },
      },
      {
        path: '/about',
        element: <About />,
        handle: {
          meta: {
            title: 'About Page',
            requiresAuth: false,
            description: 'Learn more about us',
            priority: 2,
          },
        },
      },
      {
        path: '/article/:id',
        element: <Article />,
        handle: {
          meta: {
            title: 'Article Page',
            requiresAuth: false,
            description: 'Read the full article',
            priority: 3,
          },
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
