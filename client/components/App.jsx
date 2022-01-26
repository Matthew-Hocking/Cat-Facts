import React, { useState, useEffect } from 'react'

import { getFact } from '../api'

function App() {
  const [fact, setFact] = useState([])

  useEffect(() => {
    newFact()
  }, [])

  const newFact = () => {
    getFact()
      .then(fact => setFact(fact)
      )}

  return (
    <>
      <main>
        <div className="bg-img"></div>
        <div className="app">

        <div className="title">
          <h1>CATFACT:</h1>
        </div>

        <div className="fact">
          <p>{fact}</p>
        </div>
        
        <div className="button">
          <button onClick={newFact}>Another Fact</button>
        </div>

        </div>
      </main>
    </>
  )
}

export default App
