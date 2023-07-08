import { useState } from 'react'

function App() {
  return (
    <div className="large" id="largerDiv">
      <label htmlFor="inputID">請輸入數字</label>
      <input type="number" id="inputID" defaultValue={3} />
    </div>
  )
}

export default App