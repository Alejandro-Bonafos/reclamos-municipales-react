import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Login from './paginas/Login';
import Registro from './paginas/Registro';
import VecinosLogueados from './paginas/VecinosLogueados';
import ReclamosDelVecino from './paginas/ReclamosDelVecino';
import NuevoReclamo from './paginas/NuevoReclamo';
import RecuperarContraseña from './componentes/RecuperarContraseña';
import RestablecerContraseña from './componentes/RestablecerContraseña';
import Layouts from './componentes/layouts/Layouts';

function App() { 

  return (
    <Router basename="/reclamos-municipales-react">    
      <Routes> 

        <Route path="/" element={<Layouts />}>
          <Route index element={ <Home/> } /> 
          <Route path="login" element={<Login />} />
          <Route path="registro" element={<Registro />} />
          <Route path="logueados" element={<VecinosLogueados />} />
          <Route path="reclamos" element={<ReclamosDelVecino />} />
          <Route path="nuevo-reclamo" element={<NuevoReclamo />} />
          <Route path='recuperar' element={<RecuperarContraseña/>} />
          <Route path="/restablecer/:token" element={<RestablecerContraseña />} />

        </Route>
          
      </Routes>
    </Router>
  )
}

export default App;