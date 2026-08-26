import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Footer from './components/Footer.tsx'
import Navbar from './components/Navbar.tsx'

const page = document.getElementById('occu-page')

if (!page) {
  throw new Error("No se encontró el elemento con id 'occu-page'. Asegúrate de que existe en index.html.")
}

createRoot(page).render(
  <StrictMode>
    <Navbar />
    <App />
    <Footer />
  </StrictMode>,
)
