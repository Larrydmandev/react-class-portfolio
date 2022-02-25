import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Progress from './Components/Progress';
import Cards from './Components/Cards';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts'
import Footer from './Components/Footer';
import Car from './Components/Class';
import Functions from './Components/Class/Function';
import Class from './Components/Class/Class';
import Counter from './Components/Counter';

function App() {
  
  return (
    <div>
      <Navbar/>
      <Header/>
      <Progress/> 
      <Cards/>
      <Portfolio/>
      <Contacts/>
      <Footer/>
      {/* <Car/> */}
      
      {/* <Functions title="hello guys" real={true} array={Array}/>
      <Class title="mr david" /> */}
      {/* <Counter/> */}
    </div>
  );
}

export default App;
