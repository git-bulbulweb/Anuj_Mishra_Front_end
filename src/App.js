import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Tutorials from './Components/Tutorials';
import Exercises from './Components/Exercises';
import GetCertified from './Components/GetCertified';
import Services from './Components/Services';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import DefaultNavbar from './Components/DefaultNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <BrowserRouter basename={process.env.PUBLIC_URL}>
   <DefaultNavbar></DefaultNavbar>
    <Routes>
      <Route exact path='/' element={<Home></Home>}></Route>
      <Route path='/tutorials' element={<Tutorials></Tutorials>}></Route>
      <Route path='/exercises' element={<Exercises></Exercises>}></Route>
      <Route path='/getCertified' element={<GetCertified></GetCertified>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
