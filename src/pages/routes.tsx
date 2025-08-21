import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    Component: null,
    children: [
      {
        path: '/:slug',
        Component: null,
        loader: () => {},
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
