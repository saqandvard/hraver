import Footer from './components/Footer';
import GettingMarried from './components/GettingMarried';
import HappyCouple from './components/HappyCouple';
import Header from './components/Header';
import Orchid from './components/Orchid';
import OurStory from './components/OurStory';

function App() {
  return (
    <>
      <Header />
      <HappyCouple />
      <Orchid down />
      <GettingMarried />
      <Orchid />
      <OurStory />
      <Orchid />
      <Footer />
    </>
  );
}

export default App;
