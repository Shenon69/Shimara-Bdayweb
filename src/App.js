import './App.css';
import Hero from './Hero';
import Rage from './Rage';
import Gorgeous from './Gorgeous';
import Surprise from './Surprise';
import End from './End';
import Footer from './Footer';


function App() {
  return (
    <div>
      <div className='p-[1rem] bg-[#E6C2AC]'>
      <Hero/>
      <Rage/>
      <Gorgeous/>
      <Surprise/>
      <End/>
      </div>
      <Footer/>
      


    </div>
  );
}

export default App;
