import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css"

import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  Aos.init({
    duration:2500,
    delay:400,
  })
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;
