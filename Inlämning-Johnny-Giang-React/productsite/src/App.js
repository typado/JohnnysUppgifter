import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { Footer } from './Components/Footer';
import {useState} from 'react';

function App() {

  const [oneProduct, setOneProduct] = useState({
    price: "",
    productName: "",
    img: "",
    description: "",
    category: ""

  })

  const [activePage, setActivePage] = useState('Product');
      
  
  const onChangeActivePage = (newPage)=>{
    setActivePage(newPage)
  }
  const onSetOneProduct = (product)=>{
    setActivePage("productInfo")
    alert("hej hej")
    setOneProduct(product)
  }
  return (
    <div>

      <Header activePage={activePage} onChangeActivePage={onChangeActivePage} />
      <Main activePage={activePage} setOneProduct={onSetOneProduct} oneProduct={oneProduct}/>
      <Footer />
    </div>
  );
}

export default App;
