import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import {useState} from 'react';

function App() {



  const [activePage, setActivePage] = useState('Product');
      
  
  const onChangeActivePage = (newPage)=>{
    setActivePage(newPage)
  }

  return (
    <div>

      <Header activePage={activePage} onChangeActivePage={onChangeActivePage} />
      <Main activePage={activePage}/>
      <Footer />
    </div>
  );
}

export default App;
