import './App.css'

import knowEachCoder from './coders';

function App (){
  let coders = [
    

  {
    "name": "Alice",
    "age": 25,
    "hobbies": ["Reading", "Gardening", "Cooking"],
    "bio": "Alice is a passionate learner who enjoys exploring new technologies."
  },
  {
    "name": "Bob",
    "age": 27,
    "hobbies": ["Playing guitar", "Hiking", "Photography"],
    "bio": "Bob is a creative individual who loves expressing himself through music and capturing moments with his camera."
  },
  {
    "name": "Charlie",
    "age": 23,
    "hobbies": ["Painting", "Writing", "Soccer"],
    "bio": "Charlie is an artist at heart, always seeking inspiration from various forms of art."
  },
  {
    "name": "David",
    "age": 29,
    "hobbies": ["Swimming", "Traveling", "Programming"],
    "bio": "David is an adventurer who is passionate about coding and exploring the world at the same time."
  }
];

let eachCoder =coders.map(knowEachCoder);

return (
  <>
    
      <header>
        <h1>Profile of our Coders</h1>
        <div className='main'>{eachCoder}</div>
      </header>
  
  
  </>
)
}

export default App;