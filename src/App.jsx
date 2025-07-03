
import './App.css'
// import './components/botoncito/Botoncito'
import Botoncito from './components/botoncito/Botoncito.jsx'
import Card from './components/card/Card.jsx';
import { useState } from 'react';

function App() {

  const [cardData, setCardData] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const showCard = (index) => {
    switch(index) {
      case 1:
        setCardData({
          title: "Paula",
          description: "Este es el contenido del botón 1.",
          image: "https://cdn.prod.website-files.com/651577594cea61d37cb19467/6570ac305f9ea73e7050a691_Yorkshire%20Terrier.jpg" 
        });
        break;
      case 2:
        setCardData({
          title: "Yolanda",
          description: "Este es el contenido del botón 2.",
          image: "https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.webp?w=1600&h=1067" 
        });
        break;
      case 3:
        setCardData({
          title: "Fernanda",
          description: "Este es el contenido del botón 3.",
          image: "https://www.catster.com/wp-content/uploads/2023/11/orange-exotic-shorthair-cat-Sergey-Nemirovsky-Shutterstock.jpg.webp" 
        });
        break;
      default:
        setCardData(null);
    }
    setActiveButton(index); // <- Actualizamos el botón activo
  };


  return (
    <>
      <h1>Hola mundo</h1> 
      <Botoncito text="boton 1" onClick={() => showCard(1)} isActive={activeButton === 1} />
      <Botoncito text="boton 2" onClick={() => showCard(2)} isActive={activeButton === 2} />  
      <Botoncito text="boton 3" onClick={() => showCard(3)} isActive={activeButton === 3} />

      {cardData && (
        <Card
          image={cardData.image}
          title={cardData.title}
          description={cardData.description}
        />
      )}

    </>
  )
}


export default App

