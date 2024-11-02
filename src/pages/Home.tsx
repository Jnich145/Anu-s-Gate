import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedContent from '../components/FeaturedContent';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <FeaturedContent />
      <UpcomingEvents />
    </div>
  );
};

export default Home;