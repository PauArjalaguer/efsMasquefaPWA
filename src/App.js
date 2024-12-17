import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/01Home';
import Noticies from './screens/02Noticies';
import Noticia from './screens/03Noticia';
import Partits from './screens/04Partits';
import Equips from './screens/05Equips';
import Equip from './screens/06Equip';
import Competicions from './screens/07Competicions';
import Competicio from './screens/08Competicio';
import InstallPrompt from './components/06InstallPrompt';
function App() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(registration => {
         // console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
          //console.log('SW registration failed: ', registrationError);
        });
    });
  }
  return (
    <>

      {/*  <div className="flex flex-col items-center justify-center h-screen bg-azure-800">
        <img src="images/logo.png" className="mb-4" />
        <p>  <h1 className='text-white font-bold'>E.F.S. Masquefa</h1></p>
        <p>&nbsp;</p>
        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.258425388386!2d1.8136755000000002!3d41.49867429999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4621843c4c8a5%3A0xd3d8136501a3c970!2sPabell%C3%B3n%20de%20Masquefa!5e0!3m2!1ses!2ses!4v1732129879469!5m2!1ses!2ses" width="400" height="300" lowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
      </div> */}
      <InstallPrompt />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="noticies/detall/:idNew" element={<Noticia />} />
        <Route path="/noticies" element={<Noticies />} />
        <Route path="/partits" element={<Partits />} />
        <Route path="/equips/:idTeam" element={<Equip />} />
        <Route path="/equips" element={<Equips />} />
        <Route path="/competicio/:idLeague" element={<Competicio />} />
        <Route path="/competicio" element={<Competicions />} />
      </Routes>
    </>
  );
}

export default App;
