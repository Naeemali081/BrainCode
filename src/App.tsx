import { TopBanner } from './components/TopBanner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TopBanner />
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
