import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/User/Home'
// import Navig from './components/User/Navig'
// import Login from './components/User/login';
// import Createblog from './components/User/Createblog';
// import Addpost from './components/User/Addpost';
// import Category from './components/User/Category';
// import Signup from './components/User/signup';
import Frms from './components/User/Frms';


function App() {
  return (
  <div>

    <BrowserRouter>
    <Frms/>
    {/* <Routes>
       <Route path='/' element={[<Navig/>,<Home/>]} />
       <Route path='/login' element={<Login/>} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='/Createblog' element={[<Createblog/>,<Addpost/>]} />
       <Route path='/Blogs' element={<Category/>} />
       </Routes> */}
    </BrowserRouter>
    
  </div> 
  );
}

export default App;
