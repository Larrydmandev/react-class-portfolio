import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Progress from './Components/Progress';
import Cards from './Components/Cards';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts'
import Footer from './Components/Footer';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import ErrorPage from './Components/ErrorPage';
import Projects from './Components/file/Projects';
import About from './Components/file/About';
//for react memo
import Home from './Components/Home';
import Text from './Components/Text';

function App() {
  
  //end
  return (
    <div>
      {/* <Header/> 
      <Progress/>
      <Cards/>
      <Portfolio/>
      <Contacts/>
      <Footer/> */}
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Header/>}/>
          <Route  path='/Projects' element={<Projects/>}/>
          <Route  path='/About' element={<About/>}/>
          <Route  path='*' element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Text/> */}

    </div>
  );
}

export default App;
