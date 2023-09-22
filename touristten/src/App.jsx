import './App.css';
import { useState } from 'react';

const App = () => {

  const[cards]  = useState ([
    {
      title: 'Card-1',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-2',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-3',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-4',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-5',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-6',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-7',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-8',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-9',
      text: 'Sample text to demo if body text is working'
    },
    {
      title: 'Card-10',
      text: 'Sample text to demo if body text is working'
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