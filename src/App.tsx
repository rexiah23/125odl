import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from './contexts/ConfigContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Listings } from './pages/Listings';
import { CarDetails } from './pages/CarDetails';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
    <Router>
      <ConfigProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route 
              path="/car/:carId" 
              element={<CarDetails />}
            />
          </Routes>
        </Layout>
      </ConfigProvider>
    </Router>
  );
}

export default App;