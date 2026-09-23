import { LanguageProvider } from './context/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Packages from './components/Packages.jsx';
import Coverage from './components/Coverage.jsx';
import WhyExa from './components/WhyExa.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Coverage />
        <WhyExa />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </LanguageProvider>
  );
}
