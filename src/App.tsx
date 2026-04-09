import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ReportsPage from './pages/ReportsPage';
import PlansPage from './pages/PlansPage';
import { usePageTitle } from './hooks/usePageTitle';

function App() {
  usePageTitle();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
