import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Page } from './Page';
import { Root } from './Root';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Page title={'home'} /> },
        { path: 'test', element: <Page title={'test'} /> },
      ],
    },
  ],
  { basename: '/app' }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
