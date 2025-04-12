import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './component/layout/MainLayout';
import RegistrationForm from './component/forms/RegistrationForm';
import HomePage from './component/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="registration" element={<RegistrationForm />} />
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;