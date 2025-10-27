import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import DiscoverCarTap from './components/DiscoverCarTap';
import OurServices from './components/OurServices';
import EcoFriendly from './components/EcoFriendly';
import PhoneShowcase from './components/PhoneShowcase';
import LandingPage from './components/LandingPage';
import TestimonialsSection from './components/TestimonialsSection';
import FAQ from './components/FAQ';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App bg-black min-h-screen overflow-x-hidden">
      <Header />
      <LandingPage />
      <Banner />
      <DiscoverCarTap />
      <OurServices />
      <EcoFriendly />
      <PhoneShowcase />
      <TestimonialsSection />
      <FAQ />
      <DownloadApp />
      <Footer />
      
    </div>
  );
}

export default App;
