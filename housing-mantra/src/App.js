import logo from './logo.svg';
import './App.css';
import './custom.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Gallery from './components/Gallery'
import Career from './components/Career'
import Contact from './components/Contact'
import Main from './components/Main'
import {Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <div class="main-container d-flex">
     <Sidebar></Sidebar>
     <div class="content mb-5">
     <Header></Header>
   
   
   
      <Routes>
        <Route path="/" element={<Home></Home>}>
         
          <Route path="/About" element={ <About></About>} />
          <Route path="Gallery" element={<Gallery></Gallery>} />
          <Route path="Career" element={<Career></Career>} />
          <Route path="Contact" element={ <Contact></Contact>} />
          <Route path="Main" element={  <Main></Main>} />
          
        </Route>
      </Routes>
   
     </div>
     </div>
     
   

  
    </>
  );
}

export default App;
