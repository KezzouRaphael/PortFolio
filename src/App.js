import './App.scss';
import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
    <Routes>
      <Route path= "/PortFolio" element={<Layout />}>
        <Route index element={<Home/>}/> 
        <Route path= "/PortFolio/about" element={<About/>}/>
        <Route path= "/PortFolio/contact" element={<Contact/>}/>
        <Route path="/PortFolio/projects" element={<Projects/>}/>
      </Route>
     
    </Routes>
    </>
  );
}

export default App;
