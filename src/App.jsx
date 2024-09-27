import React, {Suspense,lazy,useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import LoadingSpinner from "./components/LoadingSpinner";
//lazy load components
const NavBar =lazy(()=>import('./components/NavBar'));
const HeroSection =lazy(()=>import('./components/HeroSection'));
const SkillsSection =lazy(()=>import('./components/SkillsSection'));
const ServicesSection =lazy(()=>import('./components/ServicesSection'));
const AboutSection =lazy(()=>import('./components/AboutSection'));
const NumbersSection =lazy(()=>import('./components/NumbersSection'));
const LatestProjects =lazy(()=>import('./components/LatestProjects'));
const TestimonialsSection =lazy(()=>import('./components/TestimonialsSection'));
const ContactSection =lazy(()=>import('./components/ContactSection'));
const Footer =lazy(()=>import('./components/Footer'));
const BackToTop =lazy(()=>import('./components/BackToTop'));
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  },[]);
  return (
    <div className="min-h-screen">
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-screen">
          <LoadingSpinner />
        </div>
      }>
        <div>
          <div className="bg-primary pt-4">
            <NavBar />
            <HeroSection />
          </div>
          <SkillsSection />
          <ServicesSection />
          <AboutSection />
          <NumbersSection />
          <LatestProjects />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <BackToTop />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
