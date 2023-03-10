import './components/styles/App.css'
import Footer from './components/ui/Footer';
import Header from './components/ui/Header';
import NFTCard from './components/ui/NFTCard';

function App({ isOpen, toggleBurger }) {
  return (
    <>
      <Header />
      <NFTCard />
      <Footer />
    </>
  );
}

export default App;
