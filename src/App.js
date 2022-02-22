import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Progress from './Components/Progress';
import Cards from './Components/Cards';
import Portfolio from './Components/Portfolio';
import Contacts from './Components/Contacts'
import Footer from './Components/Footer';


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
    </div>
  );
}

export default App;
