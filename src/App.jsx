
import './App.css'
import Cards from './cards/cards'
import StafData from './cards/stafData'
import { Data } from './Data/staf'

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Cards />
      <StafData>
        {Data.map((staf) => {
          return (
            <div key={staf.id}>
              <h1>{staf.id}</h1>
              <h1>{staf.name}</h1>
              <p>{staf.age}</p>
              <p>{staf.course}</p>
            </div>
          );
        })}
      </StafData>
    </>
  )
}

export default App
