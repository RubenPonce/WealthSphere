import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HeroSection} from "./components/HeroSection";
import {FeaturesSection} from "./components/FeatureSection";
import {TestimonialsSection} from "./components/TestimonialsSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <div className="section pricing">Pricing Plans</div>
      </body>
    </div>
  );
}

export default App;
