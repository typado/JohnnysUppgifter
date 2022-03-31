import './App.css';
import { Card } from './Components/Card';
import { Header } from './Components/Header';
import { Hero } from './Components/Hero';
import cardData from './Data/CardData'


function App() {

  const cards = cardData.map(card =>{
      return (
        <Card
          key={card.id} 
          item={card}
        />
      )
  })

  return (
    <div className="App container">
      <Header/>
      <Hero/>
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
