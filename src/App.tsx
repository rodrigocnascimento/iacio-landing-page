import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DocumentationPage from './pages/DocumentationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-dark-gray">
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <img src="/assets/logo.svg" alt="IACIO" className="h-8 w-8 mr-3" />
                  <span className="self-center text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-deep-blue to-cyan">IACIO</span>
                </Link>
              </div>
              <div className="hidden md:flex md:space-x-8">
                <Link to="/" className="text-dark-gray hover:text-cyan transition-colors font-medium">Home</Link>
                <Link to="/docs" className="text-dark-gray hover:text-cyan transition-colors font-medium font-bold">Documentation</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;