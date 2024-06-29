import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Logout from './Components/Logout';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div className="App">
     <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}> </Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/logout' element={<Logout></Logout>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
