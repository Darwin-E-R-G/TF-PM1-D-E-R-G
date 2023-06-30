import './App.css';
import { BrowserRouter as router, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu';
import Perfil from './componentes/perfil';
import Skil from './componentes/skil';
import Experiencia from './componentes/experiencia';
import Contacto from './componentes/contacto';
import Estudios from './componentes/estudio';


function App() {
  return (
    <div className='hom'>
      <div>
    <Menu/>
    <Routes>
      <Route path='/'  element= {<Perfil/>}/>
      <Route path='/skil/' element= {<Skil/>}/>
      <Route path='/expe/' element= {<Experiencia/>}/>
      <Route path='/conta/' element= {<Contacto/>}/>
      <Route path='/estu/' element= {<Estudios/>}/>
    </Routes>
    </div>
    </div>
  );
}

export default App;
