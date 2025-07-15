import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ChatBotDashboard from './views/ChatBotDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ChatBotDashboard />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
