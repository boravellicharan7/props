
import './App.css'
import Buttons from './Button/button'
import Cards from './cards/cards'
import StafData from './cards/stafData'
import { Data } from './Data/staf'

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Buttons>
        Staf
      </Buttons>
      <StafData>
        {Data.map((staf) => {
          return (
            <div key={staf.id}>
              <h1>{staf.id}</h1>
              <h1>{staf.name}</h1>
              <p>{staf.profession}</p>
              <img src={staf.img} alt="" />
            </div>
          );
        })}
      </StafData>
      <Cards />
    </>
  )
}

export default App
