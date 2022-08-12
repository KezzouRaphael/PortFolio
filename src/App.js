import './App.scss';
import {Routes,Route, Navigate} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <>
    <Routes>
      <Route path= "/" element={<Layout />}>
        <Route index element={<Home/>}/> 
        <Route path= "about" element={<About/>}/>
        <Route path= "contact" element={<Contact/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="*" element={<Navigate to='/' replace />} /> 
      </Route>
     
    </Routes>
    </>
  );
}

export default App;
