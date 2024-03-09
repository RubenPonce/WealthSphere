import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeroSection} from "./components/HeroSection";
import {FeaturesSection} from "./components/FeatureSection";
import {TestimonialsSection} from "./components/TestimonialsSection";
import { Header } from './components/Header';
import { NewsAndInformation } from './components/NewsAndInformation';
import { Footer } from './components/Footer';
import { CustomerWhy } from './components/CustomerWhy';
import { Pricing } from './components/Pricing';

function App() {
  return (
    <div className="App">
      <body>
        <Header />
        <HeroSection />
        <FeaturesSection />
        <CustomerWhy />
        <TestimonialsSection />
        <NewsAndInformation />
        <Pricing />
        <Footer />
      </body>
    </div>
  );
}

export default App;
