import { hashRouter } from 'react-router-dom';
import MainLayout from '../component/layout/MainLayout';
import HomePage from '../component/pages/HomePage';
import RegistrationPage from '../component/pages/RegistrationPage';

export const router = hashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'registration', element: <RegistrationPage /> },
      // Add other routes here
    ]
  }
]);
