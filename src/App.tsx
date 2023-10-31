import { useState } from 'react';
import './App.css'
import { List } from './components/list';
import { PlaceImage } from './components/place-image';
import { Place } from './components/place';
import { PlaceModel } from './model/place';

export const appPlaces = [{
  id: 0,
  name: 'Bo-Kaap in Cape Town, South Africa',
  description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
  imageId: 'https://i.imgur.com/K9HVAGHl.jpg'
  
}, {
  id: 1, 
  name: 'Rainbow Village in Taichung, Taiwan',
  description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
  imageId: 
  'https://i.imgur.com/9EAYZrtl.jpg'
}, {
  id: 2, 
  name: 'Macromural de Pachuca, Mexico',
  description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
  imageId: 'https://i.imgur.com/DgXHVwul.jpg'
}, {
  id: 3, 
  name: 'Selarón Staircase in Rio de Janeiro, Brazil',
  description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
  imageId: 'https://i.imgur.com/aeO3rpIl.jpg'
}, {
  id: 4, 
  name: 'Burano, Italy',
  description: 'The houses are painted following a specific color system dating back to 16th century.',
  imageId: 'https://i.imgur.com/kxsph5Cl.jpg'
}, {
  id: 5, 
  name: 'Chefchaouen, Marocco',
  description: 'There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.',
  imageId: 'https://i.imgur.com/rTqKo46l.jpg'
}, {
  id: 6,
  name: 'Gamcheon Culture Village in Busan, South Korea',
  description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
  imageId: 'https://i.imgur.com/ZfQOOzfl.jpg'
}];

// const place: PlaceModel = 
// {name: 'Genoa',
// description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestiae adipisci laboriosam assumenda error tempora blanditiis ducimus, aspernatur, pariatur nostrum itaque a. Quaerat optio illo error beatae alias cum sunt.',
// id: 655,
// imageId: 'https://i.imgur.com/K9HVAGHl.jpg'
// }

function App() {
 
  const [isLarge, setIsLarge] = useState(false);
  //const imageSize = isLarge ? 150 : 100;

  return (
    <>
     <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
    <List
      places={appPlaces}
      imageSize={200}
      >
        <Place
        place={place}
        imageSize={200}
        >
          <PlaceImage 
        place={place} 
        imageSize={200}
        />
        </Place>
    </List>
      
    </>
  )
}

export default App
