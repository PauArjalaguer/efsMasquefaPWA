import './App.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/01Home';
import Noticies from './screens/02Noticies';
import Noticia from './screens/03Noticia';
import Partits from './screens/04Partits';
import Equips from './screens/05Equips';
import Equip from './screens/06Equip';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="noticies/detall/:idNew" element={<Noticia />} />
      <Route path="/noticies" element={<Noticies />} />
      <Route path="/partits" element={<Partits />} />
      <Route path="/equips/:idTeam" element={<Equip />} /> 
      <Route path="/equips" element={<Equips />} /> 
    </Routes>
  );
}

export default App;
