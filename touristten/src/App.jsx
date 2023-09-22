import './App.css';
import { useState } from 'react';

const App = (props) => {

  const[cards]  = useState ([
    {
      title: 'Hong Kong',
      text: 'Visitors annually: 26.6',
      img: "/hong kong.jpeg"
    },
    {
      title: 'Bangkok',
      text: 'Visitors annually: 21.2',
      img: "/bangkok.webp"
    },
    {
      title: 'London',
      text: 'Visitors annually: 19.2',
      img: "/london.jpeg"
    },
    {
      title: 'Singapore',
      text: 'Visitors annually: 16.6',
      img: "/singapore.webp"
    },
    {
      title: 'Macau',
      text: 'Visitors annually: 15.4',
      img: "/macau.jpeg"
    },
    {
      title: 'Dubai',
      text: 'Visitors annually: 14.9',
      img: "/dubai.jpeg"
    },
    {
      title: 'Paris',
      text: 'Visitors annually: 14.4',
      img: "/paris.jpeg"
    },
    {
      title: 'New York',
      text: 'Visitors annually: 12.7',
      img: "/newyork.avif"
    },
    {
      title: 'Shenzhen',
      text: 'Visitors annually: 12.6',
      img: "/shenzhen.avif"
    },
    {
      title: 'Kuala Lumpur',
      text: 'Visitors annually: 12.3',
      img: "/kuala.jpeg"
    },
  ])
  return (
    <div className="App">
      <div className = "header"> 
        <h1>TOURIST 10</h1>
        <img className="appIcon" src="travelIcon.png" />
        <h2> Explore the 10 most toured places across the globe!</h2>
      </div>
      <div className = "cards">
        {
          cards.map((card,i) => (
            <div key = {i} className="card">
            <img src ={card.img}/> 
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button className = "btn">Button</button>
        </div>
          ))
        }
        
      </div>

      
    </div>
  )
}

export default App