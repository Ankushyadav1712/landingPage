import React from 'react'
import Navbar from './components/navbar'


import HeroSection from './components/HeroSection'
import ActiveSlider from './components/ActiveSlider'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ContactForm from './components/ContactForm'

import Footer from './components/Footer';

import Video from './components/video'







const App = () => {
  return (
    <>
      <Navbar />
      <ActiveSlider />
      <div className="max-w-7xl mx-auto pt-20 px-6" data-bs-theme="dark">
        <HeroSection />
      </div>
      <Video />
      <ContactForm />
      <Footer />

    </>
  )
}



export default App
